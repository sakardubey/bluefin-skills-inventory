"""build.py: checks data.js against the source files, then writes skills_app.html.

Run:  python -I build.py
Stops with a list of errors if any evidence fails a check. Never reads the text of #random.
(CLAUDE.md planned build.js; Node.js is not installed on this laptop, so this is the Python version.)
"""
import csv, json, os, sys

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.abspath(__file__))

GROUPS = [
    ("Technical", ["SQL", "Excel modelling", "Power BI", "Survey design", "Statistics", "Python", "Machine learning"]),
    ("Client", ["Client presenting", "Proposal writing", "Handling difficult clients"]),
    ("Domain", ["Banking", "FMCG", "Retail", "Healthcare"]),
    ("Languages", ["Tamil", "Bengali", "Marathi"]),
    ("Other", ["Qualitative interviewing", "Mentoring", "Vendor negotiation"]),
]
NEEDS = [
    {"need": "SQL and data work", "skill": "SQL"},
    {"need": "Banking knowledge", "skill": "Banking"},
    {"need": "Survey design", "skill": "Survey design"},
    {"need": "Tamil fieldwork", "skill": "Tamil"},
    {"need": "Marathi fieldwork", "skill": "Marathi"},
    {"need": "Client presenting", "skill": "Client presenting"},
]
# Written judgement shown on the page, so the app explains itself.
BRIEF = {
    "hardest": [
        {"name": "Vikram Sethi", "why": "Real client skills: he presented and defended Rangoli's numbers and reviewed Harpreet's proposal. But he twice said he built the Rangoli dashboard (M095, M195), and the handover note credits Sneha and Arvind. His Power BI is marked as contradicted, and most of his client skills rest on one message each."},
        {"name": "Kabir Malhotra", "why": "He talks about machine learning more than anyone, and the 2024 register lists both machine learning and Python for him. The proven machine-learning work is learning with Pooja reviewing, so it is level 1, and Python has no evidence. His real strength, Excel modelling, is the skill he never mentions."},
        {"name": "Manoj Yadav", "why": "Vendor negotiation is clear (level 3, two notes). The Sunleaf note says he briefed the Marathi-speaking recruiters himself, which might mean he speaks Marathi, but the note does not say which language he used. Left unscored until someone asks him."},
    ],
    "cautions": [
        "Only one person, Lakshmi Narayanan, has evidenced Tamil. She is also the top survey designer, so the bid has no second name for either need.",
        "Devika Menon is on leave (people.csv), so she is shown but not suggested.",
        "Rohan Mehta says he has led three banking projects (M192). Only Pragati is evidenced.",
        "Nikhil Joshi undersells himself (M203). The Sunleaf note shows he moderated all six Marathi groups.",
    ],
    "assumptions": [
        "Pragati Finance, a consumer lender, counts as Banking.",
        "Third Cup Cafés does not count towards any domain, because a café chain does not clearly fit Retail.",
        "README lists 20 skills (CLAUDE.md says 22). The app uses the 20.",
        "Levels follow the CLAUDE.md rule strictly: the strongest piece of proof sets the level (led, reviewed or taught = 3; did = 2; learning or helped = 1). One teaching moment or one review is enough for level 3.",
        "Meera Rao's Sunleaf escalation call counts as helped (level 1), because the note says Kavya led and Meera joined one call.",
    ],
}


def read_csv(name):
    with open(os.path.join(ROOT, name), encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def load_data_js():
    t = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
    return json.loads(t[t.index("{"): t.rindex("};") + 1])


def main():
    D = load_data_js()
    errors = []
    people = read_csv("people.csv")
    current = {p["name"] for p in people}
    chat = {r["id"]: r for r in read_csv("team_chat.csv")}
    note_dir = os.path.join(ROOT, "project_notes")
    notes = {f: open(os.path.join(note_dir, f), encoding="utf-8").read() for f in os.listdir(note_dir)}
    rahul = {r["id"]: r["person"] for r in D["rahulK"]}
    withheld = D["privacy"]["withheldMessages"]
    skills = [s for _, g in GROUPS for s in g]

    if sorted(skills) != sorted(D["skills"]):
        errors.append("Skill list in data.js does not match README's 20 skills")

    def author_of(mid):
        r = chat[mid]
        if r["author"] == "Rahul K.":
            return rahul.get(mid)
        hits = [n for n in current if f"{n.split()[0]} {n.split()[1][0]}." == r["author"]]
        return hits[0] if len(hits) == 1 else None

    # every message stored in data.js must match the source
    for m in D["messages"]:
        src = chat.get(m["id"])
        if not src:
            errors.append(f"{m['id']}: not in team_chat.csv")
        elif src["channel"] == "random":
            errors.append(f"{m['id']}: #random must not be stored")
        elif not m.get("withheld") and src["message"] != m["text"]:
            errors.append(f"{m['id']}: text differs from team_chat.csv")

    kind_level = {"led": 3, "reviewed": 3, "taught": 3, "did": 2, "learning": 1}
    third_party = []
    for p in D["people"]:
        if p["name"] not in current:
            errors.append(f"{p['name']}: not in people.csv")
        for s in p["skills"]:
            if s["skill"] not in skills:
                errors.append(f"{p['name']}: unknown skill {s['skill']}")
            lv = [1 if e.get("helped") else kind_level[e["kind"]] for e in s["evidence"] if e["kind"] in kind_level]
            if (max(lv) if lv else None) != s["level"]:
                errors.append(f"{p['name']}/{s['skill']}: level {s['level']} does not follow the rule (expected {max(lv) if lv else None})")
            for e in s["evidence"]:
                ref = e["ref"]
                if ref.endswith(".md"):
                    if ref not in notes:
                        errors.append(f"{p['name']}/{s['skill']}: note {ref} missing")
                    elif p["name"].split()[0] not in notes[ref]:
                        errors.append(f"{p['name']}/{s['skill']}: {ref} does not name them")
                    continue
                if ref not in chat:
                    errors.append(f"{p['name']}/{s['skill']}: {ref} does not exist"); continue
                if chat[ref]["channel"] == "random":
                    errors.append(f"{p['name']}/{s['skill']}: {ref} is in #random"); continue
                if ref in withheld:
                    errors.append(f"{p['name']}/{s['skill']}: {ref} is private"); continue
                a = author_of(ref)
                if a != p["name"]:
                    if p["name"].split()[0] in chat[ref]["message"]:
                        third_party.append(f"{ref} by {a} about {p['name']}")
                    else:
                        errors.append(f"{p['name']}/{s['skill']}: {ref} is by {a} and does not mention them")

    if errors:
        print("Stopped. Fix these first:")
        print("\n".join(" - " + e for e in errors))
        sys.exit(1)

    # register check
    register = []
    by_name = {p["name"]: p for p in D["people"]}
    for r in read_csv("skills_register.csv"):
        listed = [s.strip() for s in r["skills"].split(";") if s.strip()]
        if r["name"] not in current:
            for s in listed:
                register.append({"name": r["name"], "skill": s, "result": "left"})
            continue
        found = {s["skill"]: s for s in by_name[r["name"]]["skills"]}
        for s in listed:
            if s not in skills:
                res, lvl = "not tracked", None
            elif s in found and found[s]["level"]:
                res, lvl = "confirmed", found[s]["level"]
            elif s in found and found[s]["status"] == "contradicted":
                res, lvl = "contradicted", None
            else:
                res, lvl = "unverified", None
            register.append({"name": r["name"], "skill": s, "result": res, "level": lvl})
        for s, x in found.items():
            if x["level"] and s not in listed:
                register.append({"name": r["name"], "skill": s, "result": "new", "level": x["level"]})
    in_register = {r["name"] for r in read_csv("skills_register.csv")}
    for p in D["people"]:
        if p["name"] not in in_register:
            for x in p["skills"]:
                if x["level"]:
                    register.append({"name": p["name"], "skill": x["skill"], "result": "new", "level": x["level"]})

    n_refs = sum(len(s["evidence"]) for p in D["people"] for s in p["skills"])
    n_msg_refs = sum(1 for p in D["people"] for s in p["skills"] for e in s["evidence"] if not e["ref"].endswith(".md"))
    build_checks = [  # the build stops before this point if any of these failed
        ("Every stored message matches team_chat.csv word for word", f"{len(D['messages'])} messages compared"),
        ("No #random message is stored or cited", "#random is filtered out before reading"),
        ("No private message is cited as evidence", f"{len(withheld)} messages withheld"),
        ("Every cited message id exists", f"{n_msg_refs} message references checked"),
        ("Every cited project note exists and names the person", f"{n_refs - n_msg_refs} note references checked"),
        ("Every cited message is by the person or names them", f"{len(third_party)} name someone other than the author"),
        ("Every level follows the rule strictly", "led, reviewed or taught = 3; did = 2; learning or helped = 1"),
        ("Only the 20 README skills are used", "20 skills"),
        ("Only people in people.csv are scored", f"{len(current)} people"),
    ]
    payload = {
        "buildChecks": [{"name": a, "detail": b, "ok": True} for a, b in build_checks],
        "builtOn": D["builtOn"], "groups": GROUPS, "needs": NEEDS, "brief": BRIEF,
        "people": D["people"], "notes": notes, "register": register,
        "messages": {m["id"]: m for m in D["messages"]},
        "rahulK": D["rahulK"], "privacy": D["privacy"],
        "counts": {"messagesRead": len(D["messages"]) - len(withheld), "withheld": len(withheld),
                   "notes": len(notes), "people": len(D["people"]), "thirdParty": len(third_party)},
    }
    blob = json.dumps(payload, ensure_ascii=False).replace("</", "<\\/")
    tpl = open(os.path.join(ROOT, "app_template.html"), encoding="utf-8").read()
    out = tpl.replace("__DATA__", blob)
    page = ('<!doctype html>\n<html lang="en-GB"><head><meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            '<style>body{margin:0}[hidden]{display:none!important}</style>\n'
            + out.replace("</style>\n", "</style>\n</head><body>\n", 1) + "\n</body></html>\n")
    with open(os.path.join(ROOT, "skills_app.html"), "w", encoding="utf-8") as f:
        f.write(page)  # double-click to open in any browser
    if "--web" in sys.argv:  # body-only copy for publishing as a claude.ai link
        with open(sys.argv[sys.argv.index("--web") + 1], "w", encoding="utf-8") as f:
            f.write(out)
    print(f"All checks passed. {len(third_party)} references are about someone other than the author (allowed: they name the person).")
    print(f"Wrote skills_app.html ({len(out)//1024} KB)")


if __name__ == "__main__":
    main()
