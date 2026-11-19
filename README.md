# Bluefin Skills Inventory

An evidence-based skills inventory for a fictional research firm, built for the Gen AI for Business course (PGDM).

**Live site:** https://sakardubey.github.io/bluefin-skills-inventory/

> Everything in this project is invented: the company, the people, the clients and every message.

## The problem

Bluefin Insights has to name a bid team for a large Halcyon Bank study by Friday 2 October. The bid needs SQL and data work, banking knowledge, survey design, Tamil and Marathi fieldwork, and a strong presenter. The HR skills register is two years old and self-reported, so nobody trusts it.

This tool reads what people **actually did**, in project notes and three months of team chat, and turns that into a skills inventory where every level links to its proof.

## What the website does

| Tab | What it shows |
|---|---|
| **Team finder** | A suggested bid team for each need, with backups, risks and the hardest calls explained |
| **Skills matrix** | 25 people × 20 skills. Click any cell to see the exact message or note behind it |
| **Register check** | The 2024 register against the evidence: confirmed, contradicted, unverified, newly found, leavers |
| **What it reads** | The sources, the privacy rules and every judgement call |
| **Health check** | 28 automatic checks (green or red), plus a per-person sheet with sources side by side |

## How levels are decided

- **3** = led the work, or reviewed or trained others
- **2** = did it independently
- **1** = learning or helped

**Confidence:** High if a project note supports it, Medium with two or more chat messages, Low otherwise.

Talk, jokes and boasts are not evidence, and taking credit for someone else's work is flagged.

## Privacy by design

- The `#random` channel is never read.
- Messages about health, family, leave or HR conversations are withheld: their ids are kept, but not their text.
- Availability comes only from the official staff list.
- No judgement of personality or performance.

## How it's built

- `index.html`: the whole website in one file (plain HTML, CSS and JavaScript, no frameworks).
- `code/build.py`: checks every piece of evidence against the source files and stops if anything is missing, private or out of bounds. Then it builds the page.
- `code/app_template.html`: the page design.
- `code/data.js`: every person's skills with their evidence, plus the chat messages that were allowed.

The raw course files (staff list, register, chat export and project notes) are not included, so `build.py` needs them alongside it to rebuild the page.

Built with Claude Code as an AI pair-programmer.
