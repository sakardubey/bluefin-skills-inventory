// data.js: Bluefin skills inventory, part 1 (evidence-based skills and chat messages).
// Generated from people.csv, team_chat.csv and project_notes/. #random is never read;
// withheld messages keep their id but not their text.
const DATA = {
 "builtOn": "2026-11-19",
 "skills": [
  "SQL",
  "Excel modelling",
  "Power BI",
  "Survey design",
  "Statistics",
  "Python",
  "Machine learning",
  "Client presenting",
  "Proposal writing",
  "Handling difficult clients",
  "Banking",
  "FMCG",
  "Retail",
  "Healthcare",
  "Tamil",
  "Bengali",
  "Marathi",
  "Qualitative interviewing",
  "Mentoring",
  "Vendor negotiation"
 ],
 "levels": {
  "1": "basic",
  "2": "working",
  "3": "expert"
 },
 "notes": [
  "2026-06_medora_patient_survey_retro.md",
  "2026-07_pragati_churn_study_retro.md",
  "2026-07_rangoli_dashboard_handover.md",
  "2026-08_sunleaf_rural_fieldwork_note.md",
  "2026-09_shikhar_enquiry_funnel_note.md",
  "2026-09_third_cup_survey_retro.md"
 ],
 "privacy": {
  "excludedChannels": [
   "random"
  ],
  "withheldMessages": {
   "M093": "HR conversation about workload",
   "M115": "health, family and leave reason",
   "M116": "reply about leave",
   "M120": "family event and leave",
   "M147": "health and leave reason",
   "M148": "health",
   "M149": "leave announcement (availability comes only from people.csv)",
   "M164": "mentions family"
  }
 },
 "rahulK": [
  {
   "id": "M010",
   "timestamp": "2026-07-02 09:55",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M014",
   "timestamp": "2026-07-02 15:25",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M084",
   "timestamp": "2026-07-30 15:45",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M091",
   "timestamp": "2026-08-04 10:15",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M126",
   "timestamp": "2026-08-20 10:30",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M136",
   "timestamp": "2026-08-26 13:00",
   "person": "Rahul Kumar",
   "reason": "Before 7 September 2026: always Rahul Kumar."
  },
  {
   "id": "M156",
   "timestamp": "2026-09-07 11:00",
   "person": "Rahul Kapoor",
   "reason": "Joining day; asks how to connect and says he has only done SQL basics in college."
  },
  {
   "id": "M157",
   "timestamp": "2026-09-07 11:15",
   "person": "Rahul Kumar",
   "reason": "Replies 'Welcome!' and offers connection details and a starter query: the senior analyst helping the new intern."
  },
  {
   "id": "M159",
   "timestamp": "2026-09-08 14:00",
   "person": "Rahul Kapoor",
   "reason": "Thanks 'Rahul' for the starter query and asks about LEFT vs INNER JOIN: continues M156."
  },
  {
   "id": "M161",
   "timestamp": "2026-09-09 10:00",
   "person": "Rahul Kumar",
   "reason": "Reports on the Pragati scoring job and tunes the repayment view Rahul Kumar built (Pragati retro)."
  },
  {
   "id": "M193",
   "timestamp": "2026-09-22 10:10",
   "person": "Rahul Kumar",
   "reason": "Says he knows Pragati's loan tables well: Rahul Kumar wrote the Pragati extract."
  },
  {
   "id": "M206",
   "timestamp": "2026-09-25 15:00",
   "person": "Rahul Kapoor",
   "reason": "'First dashboard in Excel for the Shikhar centres': Shikhar note says the intern built the Excel summary by centre."
  }
 ],
 "people": [
  {
   "name": "Meera Rao",
   "chatName": "Meera R.",
   "team": "Leadership",
   "role": "Founder and CEO",
   "manager": "",
   "joined": "2014-04-01",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Client presenting",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Pitched the Third Cup proposal to the founders, who signed on the day."
      },
      {
       "ref": "M142",
       "kind": "did",
       "note": "Reports pitching Third Cup; signed on the spot."
      }
     ]
    },
    {
     "skill": "Handling difficult clients",
     "level": 1,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "did",
       "note": "Joined one escalation call with Sunleaf's MD (a supporting role; Kavya led).",
       "helped": true
      },
      {
       "ref": "M050",
       "kind": "claim",
       "note": "Says she has dealt with Sunleaf's MD before."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Ananya Iyer",
   "chatName": "Ananya I.",
   "team": "People",
   "role": "Head of People",
   "manager": "Meera Rao",
   "joined": "2019-02-11",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Mentoring",
     "level": null,
     "confidence": null,
     "status": "claimed only",
     "evidence": [
      {
       "ref": "M133",
       "kind": "claim",
       "note": "Announces mentoring circles she will run; a plan, not yet evidence."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Farhan Qureshi",
   "chatName": "Farhan Q.",
   "team": "Analytics",
   "role": "Head of Analytics",
   "manager": "Meera Rao",
   "joined": "2016-06-06",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Statistics",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "reviewed",
       "note": "Reviewed the statistics on the Pragati churn study."
      },
      {
       "ref": "M042",
       "kind": "reviewed",
       "note": "Checked calibration and asked for confidence intervals."
      },
      {
       "ref": "M068",
       "kind": "reviewed",
       "note": "Rohan credits him: the CFO asked about confidence intervals."
      }
     ]
    },
    {
     "skill": "Machine learning",
     "level": 3,
     "confidence": "Medium",
     "status": "proven",
     "evidence": [
      {
       "ref": "M041",
       "kind": "reviewed",
       "note": "Pooja asks him to sanity-check the model's feature importance."
      },
      {
       "ref": "M042",
       "kind": "reviewed",
       "note": "Reviews the churn model's calibration."
      }
     ]
    },
    {
     "skill": "SQL",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "M013",
       "kind": "reviewed",
       "note": "Spotted that Rahul Kumar's repayment view double-counted restructured loans."
      },
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "reviewed",
       "note": "Fixed the treatment of restructured loans (the note does not name SQL)."
      }
     ]
    },
    {
     "skill": "Banking",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Knew how restructured loans should be treated in a lending dataset."
      },
      {
       "ref": "M013",
       "kind": "did",
       "note": "Flags restructured-loan status codes."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Vikram Sethi",
   "chatName": "Vikram S.",
   "team": "Client Delivery",
   "role": "Head of Client Delivery",
   "manager": "Meera Rao",
   "joined": "2017-01-09",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Client presenting",
     "level": 2,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M173",
       "kind": "did",
       "note": "Presented Rangoli's quarterly review."
      }
     ]
    },
    {
     "skill": "Handling difficult clients",
     "level": 2,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M173",
       "kind": "did",
       "note": "Held ground for half an hour when Rangoli challenged the returns numbers."
      }
     ]
    },
    {
     "skill": "Proposal writing",
     "level": 3,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M178",
       "kind": "reviewed",
       "note": "Reviewed Harpreet's Shikhar phase 2 proposal; sharpened pricing."
      }
     ]
    },
    {
     "skill": "Retail",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "led",
       "note": "Client lead for Rangoli Threads (ethnic-wear brand); managed the go-live."
      }
     ]
    },
    {
     "skill": "Power BI",
     "level": null,
     "confidence": null,
     "status": "contradicted",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "contradicts",
       "note": "Handover note credits Sneha with building the dashboard; Vikram managed the client."
      },
      {
       "ref": "M095",
       "kind": "contradicts",
       "note": "Told Rangoli's founder he built the dashboard."
      },
      {
       "ref": "M195",
       "kind": "contradicts",
       "note": "Says 'I built Rangoli's' dashboards on the bid channel."
      }
     ]
    }
   ],
   "flags": [
    {
     "ref": "M095",
     "kind": "contradicts",
     "note": "Took credit for the Rangoli dashboard with the client."
    },
    {
     "ref": "M195",
     "kind": "contradicts",
     "note": "Repeats the claim on the bid channel; the handover note credits Sneha and Arvind."
    }
   ],
   "questions": []
  },
  {
   "name": "Devika Menon",
   "chatName": "Devika M.",
   "team": "Research",
   "role": "Research Manager",
   "manager": "Meera Rao",
   "joined": "2015-08-03",
   "status": "On leave",
   "available": false,
   "skills": [
    {
     "skill": "Survey design",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "reviewed",
       "note": "Reviewed the Medora questionnaire."
      },
      {
       "ref": "M071",
       "kind": "taught",
       "note": "Runs a survey design clinic for Lakshmi and Divya."
      }
     ]
    },
    {
     "skill": "Healthcare",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "led",
       "note": "Led the Medora study and wrote the clinical-context section."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 3,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M071",
       "kind": "taught",
       "note": "Survey design clinic for her team."
      }
     ]
    }
   ],
   "flags": [],
   "questions": [
    "On leave (people.csv): shown but unavailable for Halcyon."
   ]
  },
  {
   "name": "Rahul Kumar",
   "chatName": "Rahul K.",
   "team": "Analytics",
   "role": "Senior Analyst",
   "manager": "Farhan Qureshi",
   "joined": "2020-07-01",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "SQL",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Wrote the SQL extract from Pragati's loan warehouse."
      },
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "did",
       "note": "Cleaned the Shikhar enquiry export in SQL."
      },
      {
       "ref": "M010",
       "kind": "did",
       "note": "Joins disbursements to repayments by account ID."
      },
      {
       "ref": "M091",
       "kind": "did",
       "note": "Wrote a cleaning query for three date formats."
      },
      {
       "ref": "M161",
       "kind": "did",
       "note": "Tuned the repayment view to run three times faster."
      },
      {
       "ref": "M157",
       "kind": "taught",
       "note": "Gives the new intern a starter query."
      }
     ]
    },
    {
     "skill": "Python",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Wrote a Python check on row counts."
      },
      {
       "ref": "M014",
       "kind": "did",
       "note": "Python check against monthly totals."
      }
     ]
    },
    {
     "skill": "Excel modelling",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "reviewed",
       "note": "Fixed a lookup error in Kabir's Excel funnel model."
      },
      {
       "ref": "M136",
       "kind": "reviewed",
       "note": "Fixed the Gurugram lookup."
      }
     ]
    },
    {
     "skill": "Banking",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Worked on Pragati's loan tables."
      },
      {
       "ref": "M010",
       "kind": "did",
       "note": "Splits churn by loan product."
      },
      {
       "ref": "M193",
       "kind": "claim",
       "note": "Says he knows Pragati's loan tables well."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 3,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M157",
       "kind": "taught",
       "note": "Helps the new intern get started."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Sneha Ghosh",
   "chatName": "Sneha G.",
   "team": "Analytics",
   "role": "Analyst",
   "manager": "Farhan Qureshi",
   "joined": "2023-01-16",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Power BI",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "led",
       "note": "Designed and built the Rangoli dashboard; owns questions about it."
      },
      {
       "ref": "M022",
       "kind": "led",
       "note": "Takes on the Rangoli build."
      },
      {
       "ref": "M055",
       "kind": "did",
       "note": "First version live."
      },
      {
       "ref": "M101",
       "kind": "did",
       "note": "Version 3 with the returns drill-down."
      },
      {
       "ref": "M168",
       "kind": "did",
       "note": "Building two more dashboards."
      }
     ]
    },
    {
     "skill": "SQL",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Wrote the returns queries."
      },
      {
       "ref": "M055",
       "kind": "did",
       "note": "'I wrote the returns query myself.'"
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Kabir Malhotra",
   "chatName": "Kabir M.",
   "team": "Analytics",
   "role": "Analyst",
   "manager": "Farhan Qureshi",
   "joined": "2024-03-04",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Excel modelling",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Prepared the Excel summary tables for the readout."
      },
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "did",
       "note": "Built the funnel model in Excel; Rahul Kumar fixed a lookup error."
      },
      {
       "ref": "M125",
       "kind": "did",
       "note": "Shikhar funnel model done in Excel."
      }
     ]
    },
    {
     "skill": "Machine learning",
     "level": 1,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "learning",
       "note": "Scoping an enrolment model with Pooja, who reviews."
      },
      {
       "ref": "M179",
       "kind": "learning",
       "note": "Wrote a one-page ML use case at Farhan's request."
      },
      {
       "ref": "M181",
       "kind": "learning",
       "note": "Pooja will review while he drives."
      },
      {
       "ref": "M005",
       "kind": "claim",
       "note": "Enthusiasm about transformer-based churn models."
      },
      {
       "ref": "M043",
       "kind": "claim",
       "note": "'Deep learning would definitely push the AUC higher.'"
      },
      {
       "ref": "M106",
       "kind": "claim",
       "note": "Offers to lead an agentic-AI effort."
      },
      {
       "ref": "M191",
       "kind": "claim",
       "note": "Offers to build an ML model for Halcyon; 'been reading a lot'."
      }
     ]
    }
   ],
   "flags": [
    {
     "ref": "M005",
     "kind": "claim",
     "note": "Enthusiasm, not evidence."
    },
    {
     "ref": "M043",
     "kind": "claim",
     "note": "Enthusiasm, not evidence."
    },
    {
     "ref": "M106",
     "kind": "claim",
     "note": "Enthusiasm, not evidence."
    },
    {
     "ref": "M191",
     "kind": "claim",
     "note": "Enthusiasm, not evidence."
    }
   ],
   "questions": []
  },
  {
   "name": "Rahul Kapoor",
   "chatName": "Rahul K.",
   "team": "Analytics",
   "role": "Intern",
   "manager": "Farhan Qureshi",
   "joined": "2026-09-07",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "SQL",
     "level": 1,
     "confidence": "Medium",
     "status": "proven",
     "evidence": [
      {
       "ref": "M156",
       "kind": "learning",
       "note": "Asks how to connect and for a guide to joins."
      },
      {
       "ref": "M159",
       "kind": "learning",
       "note": "Asks the difference between LEFT and INNER JOIN."
      }
     ]
    },
    {
     "skill": "Excel modelling",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "did",
       "note": "Built a simple Excel summary of enquiries by centre."
      },
      {
       "ref": "M206",
       "kind": "did",
       "note": "First Excel dashboard; took all week."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Pooja Desai",
   "chatName": "Pooja D.",
   "team": "Analytics",
   "role": "Analyst",
   "manager": "Farhan Qureshi",
   "joined": "2022-05-02",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Machine learning",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "led",
       "note": "Built the churn model: logistic baseline and gradient boosting, AUC 0.81."
      },
      {
       "ref": "M004",
       "kind": "did",
       "note": "Compares gradient boosting with the logistic baseline on a holdout set."
      },
      {
       "ref": "M044",
       "kind": "did",
       "note": "Argues a simpler model is easier to explain with 18,000 accounts."
      },
      {
       "ref": "M181",
       "kind": "reviewed",
       "note": "Will review Kabir's enrolment-prediction model."
      },
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "reviewed",
       "note": "Scoping the phase 2 enrolment model with Kabir."
      }
     ]
    },
    {
     "skill": "Python",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "led",
       "note": "Built the model in Python and packaged it for monthly scoring."
      },
      {
       "ref": "M108",
       "kind": "did",
       "note": "Packaged the Python pipeline for scheduling."
      },
      {
       "ref": "M114",
       "kind": "did",
       "note": "Reruns her script from version control."
      }
     ]
    },
    {
     "skill": "Statistics",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Holdout validation and AUC on the churn model."
      },
      {
       "ref": "M041",
       "kind": "did",
       "note": "Reports AUC and top drivers."
      },
      {
       "ref": "M004",
       "kind": "did",
       "note": "Holdout comparison of two models."
      }
     ]
    },
    {
     "skill": "Banking",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Churn model for a consumer lender across loan products."
      },
      {
       "ref": "M041",
       "kind": "did",
       "note": "Finds missed EMIs and top-up loans drive churn."
      }
     ]
    },
    {
     "skill": "SQL",
     "level": 3,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M160",
       "kind": "taught",
       "note": "Explains INNER vs LEFT JOIN to the intern; none of her own SQL work is seen."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 3,
     "confidence": "Medium",
     "status": "proven",
     "evidence": [
      {
       "ref": "M044",
       "kind": "taught",
       "note": "Offers to walk Kabir through the notebook."
      },
      {
       "ref": "M160",
       "kind": "taught",
       "note": "Answers the intern's SQL question."
      },
      {
       "ref": "M181",
       "kind": "taught",
       "note": "Pairs with Kabir: he drives, she reviews."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Arvind Pillai",
   "chatName": "Arvind P.",
   "team": "Analytics",
   "role": "Data Engineer",
   "manager": "Farhan Qureshi",
   "joined": "2021-03-15",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "SQL",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Built the SQL views and nightly 2 a.m. refresh."
      },
      {
       "ref": "M023",
       "kind": "did",
       "note": "SQL views on the order tables."
      },
      {
       "ref": "M170",
       "kind": "did",
       "note": "Will handle the data model in SQL."
      },
      {
       "ref": "M141",
       "kind": "did",
       "note": "Diagnosed and reran a failed refresh."
      }
     ]
    },
    {
     "skill": "Python",
     "level": 2,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M109",
       "kind": "did",
       "note": "Wrote a Python wrapper for the scoring job."
      }
     ]
    },
    {
     "skill": "Power BI",
     "level": null,
     "confidence": null,
     "status": "contradicted",
     "evidence": [
      {
       "ref": "M170",
       "kind": "contradicts",
       "note": "Has not touched Power BI since his last job; the register lists Power BI."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Lakshmi Narayanan",
   "chatName": "Lakshmi N.",
   "team": "Research",
   "role": "Senior Research Associate",
   "manager": "Devika Menon",
   "joined": "2019-06-17",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Survey design",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "led",
       "note": "Designed the Medora questionnaire and interview guide."
      },
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "reviewed",
       "note": "Reviewed Divya's Third Cup survey before launch."
      },
      {
       "ref": "M027",
       "kind": "did",
       "note": "Client called her questionnaire the clearest they had seen."
      },
      {
       "ref": "M076",
       "kind": "reviewed",
       "note": "Caught a double-barrelled question in Divya's survey."
      }
     ]
    },
    {
     "skill": "Qualitative interviewing",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "led",
       "note": "Ran 30 of 42 interviews, trained two interviewers, reviewed every transcript."
      },
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Ran in-café interviews."
      },
      {
       "ref": "M130",
       "kind": "did",
       "note": "Drafted the Medora follow-up discussion guide."
      },
      {
       "ref": "M174",
       "kind": "did",
       "note": "Will moderate the Medora follow-up interviews."
      }
     ]
    },
    {
     "skill": "Tamil",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "led",
       "note": "Ran the Medora interviews in Tamil and trained local interviewers."
      },
      {
       "ref": "M028",
       "kind": "did",
       "note": "Switched the Coimbatore interviews fully to Tamil."
      },
      {
       "ref": "M130",
       "kind": "did",
       "note": "Wrote the discussion guide in English and Tamil."
      }
     ]
    },
    {
     "skill": "Healthcare",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "did",
       "note": "Designed and ran the Medora patient-experience study."
      },
      {
       "ref": "M130",
       "kind": "did",
       "note": "Medora follow-up guide."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "taught",
       "note": "Trained two local interviewers."
      },
      {
       "ref": "M076",
       "kind": "reviewed",
       "note": "Reviews Divya's questionnaire."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Nikhil Joshi",
   "chatName": "Nikhil J.",
   "team": "Research",
   "role": "Research Associate",
   "manager": "Devika Menon",
   "joined": "2025-02-03",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Marathi",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "led",
       "note": "Moderated all six Sunleaf groups in Marathi."
      },
      {
       "ref": "M059",
       "kind": "led",
       "note": "Moderates the Marathi groups and briefs local recruiters."
      },
      {
       "ref": "M203",
       "kind": "modest",
       "note": "'Not sure I'm senior enough for a bid that size.'"
      }
     ]
    },
    {
     "skill": "Qualitative interviewing",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "did",
       "note": "Ran 20 interviews and six group discussions."
      },
      {
       "ref": "M087",
       "kind": "did",
       "note": "Reports findings from the Satara groups."
      },
      {
       "ref": "M034",
       "kind": "did",
       "note": "Coordinates the Sunleaf rural fieldwork."
      }
     ]
    },
    {
     "skill": "FMCG",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "did",
       "note": "Fieldwork for Sunleaf Foods (packaged foods)."
      },
      {
       "ref": "M087",
       "kind": "did",
       "note": "Price-perception findings."
      }
     ]
    }
   ],
   "flags": [
    {
     "ref": "M203",
     "kind": "modest",
     "note": "Undersells: led all the Marathi moderation for Sunleaf."
    }
   ],
   "questions": []
  },
  {
   "name": "Aisha Khan",
   "chatName": "Aisha K.",
   "team": "Research",
   "role": "Research Associate",
   "manager": "Devika Menon",
   "joined": "2022-08-08",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Qualitative interviewing",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Ran 120 store intercepts in Delhi and Jaipur."
      },
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Ran in-café interviews."
      },
      {
       "ref": "M052",
       "kind": "did",
       "note": "Reports the intercept themes."
      },
      {
       "ref": "M151",
       "kind": "did",
       "note": "Coded the Third Cup verbatims."
      }
     ]
    },
    {
     "skill": "Retail",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Her intercepts shaped the fit and returns pages."
      },
      {
       "ref": "M052",
       "kind": "did",
       "note": "Fit, sizing and returns findings."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Sourav Banerjee",
   "chatName": "Sourav B.",
   "team": "Research",
   "role": "Research Associate",
   "manager": "Devika Menon",
   "joined": "2021-11-01",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Bengali",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "led",
       "note": "Ran the Kolkata leg: 12 interviews in Bengali."
      },
      {
       "ref": "M057",
       "kind": "did",
       "note": "Offers to run the interviews in Bengali."
      },
      {
       "ref": "M102",
       "kind": "did",
       "note": "12 interviews done, all in Bengali, translated."
      },
      {
       "ref": "M165",
       "kind": "did",
       "note": "Takes the Kolkata follow-up."
      }
     ]
    },
    {
     "skill": "Qualitative interviewing",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "did",
       "note": "Ran the 12 Kolkata interviews."
      },
      {
       "ref": "M102",
       "kind": "did",
       "note": "Interviews done."
      }
     ]
    },
    {
     "skill": "FMCG",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "did",
       "note": "Fieldwork for Sunleaf Foods."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Divya Reddy",
   "chatName": "Divya R.",
   "team": "Research",
   "role": "Research Executive",
   "manager": "Devika Menon",
   "joined": "2024-07-01",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Survey design",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "did",
       "note": "Scripted the online survey, including branching for repeat patients."
      },
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Scripted the Third Cup survey; Lakshmi reviewed it."
      },
      {
       "ref": "M075",
       "kind": "did",
       "note": "Survey scripted with skip logic."
      },
      {
       "ref": "M071",
       "kind": "learning",
       "note": "Invited to Devika's survey design clinic."
      },
      {
       "ref": "M077",
       "kind": "learning",
       "note": "Fixes the question Lakshmi flagged."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Rohan Mehta",
   "chatName": "Rohan M.",
   "team": "Client Delivery",
   "role": "Client Manager",
   "manager": "Vikram Sethi",
   "joined": "2018-09-03",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Client presenting",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Presented the Pragati readout to the CFO."
      },
      {
       "ref": "M068",
       "kind": "did",
       "note": "Reports the Pragati readout."
      }
     ]
    },
    {
     "skill": "Proposal writing",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "did",
       "note": "Wrote the Pragati proposal."
      },
      {
       "ref": "M062",
       "kind": "reviewed",
       "note": "Reviewed and reworked Harpreet's Third Cup proposal."
      },
      {
       "ref": "M202",
       "kind": "did",
       "note": "Drafting the Halcyon proposal outline."
      }
     ]
    },
    {
     "skill": "Banking",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_pragati_churn_study_retro.md",
       "kind": "led",
       "note": "Client lead on Pragati Finance, a consumer lender."
      },
      {
       "ref": "M009",
       "kind": "did",
       "note": "Relays the CFO's request to split churn by loan product."
      },
      {
       "ref": "M192",
       "kind": "claim",
       "note": "Says he has led three banking projects; only Pragati is evidenced."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Kavya Nair",
   "chatName": "Kavya N.",
   "team": "Client Delivery",
   "role": "Client Manager",
   "manager": "Vikram Sethi",
   "joined": "2020-01-20",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Handling difficult clients",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "led",
       "note": "Brief changed three times; agreed a revised scope and held the budget."
      },
      {
       "ref": "M049",
       "kind": "led",
       "note": "Takes the scope call with Sunleaf's marketing head."
      },
      {
       "ref": "M103",
       "kind": "did",
       "note": "Brand head pushed back on findings; she walked him through the verbatims."
      }
     ]
    },
    {
     "skill": "Client presenting",
     "level": 2,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M103",
       "kind": "did",
       "note": "Presented the Sunleaf topline."
      }
     ]
    },
    {
     "skill": "FMCG",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "led",
       "note": "Client lead on Sunleaf Foods (packaged foods)."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 2,
     "confidence": "Low",
     "status": "proven",
     "evidence": [
      {
       "ref": "M140",
       "kind": "did",
       "note": "Gave Siddharth feedback on his first presentation."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Harpreet Kaur",
   "chatName": "Harpreet K.",
   "team": "Client Delivery",
   "role": "Associate Client Manager",
   "manager": "Vikram Sethi",
   "joined": "2022-04-04",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Proposal writing",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Wrote the Third Cup proposal with three priced options."
      },
      {
       "ref": "2026-09_shikhar_enquiry_funnel_note.md",
       "kind": "did",
       "note": "Wrote the Shikhar phase 2 proposal."
      },
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Wrote the Rangoli contract extension."
      },
      {
       "ref": "M061",
       "kind": "did",
       "note": "Third Cup proposal drafted; asks Rohan to review."
      },
      {
       "ref": "M177",
       "kind": "did",
       "note": "Shikhar phase 2 proposal drafted; asks Vikram to review."
      }
     ]
    }
   ],
   "flags": [
    {
     "ref": "M113",
     "kind": "claim",
     "note": "Jokes about being 'the Python expert' after deleting an output folder: not evidence either way."
    }
   ],
   "questions": []
  },
  {
   "name": "Siddharth Jain",
   "chatName": "Siddharth J.",
   "team": "Client Delivery",
   "role": "Associate",
   "manager": "Vikram Sethi",
   "joined": "2025-06-02",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Excel modelling",
     "level": 1,
     "confidence": "Medium",
     "status": "proven",
     "evidence": [
      {
       "ref": "M029",
       "kind": "learning",
       "note": "Asks how to do pivot tables."
      },
      {
       "ref": "M033",
       "kind": "learning",
       "note": "Pivots make sense now, 'still very slow'."
      }
     ]
    },
    {
     "skill": "Client presenting",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Presented the interim findings to Third Cup's operations head."
      },
      {
       "ref": "M139",
       "kind": "modest",
       "note": "'Nervous, but it went okay.'"
      }
     ]
    }
   ],
   "flags": [
    {
     "ref": "M139",
     "kind": "modest",
     "note": "Undersells a client presentation that the retro records."
    }
   ],
   "questions": []
  },
  {
   "name": "Zoya Siddiqui",
   "chatName": "Zoya S.",
   "team": "Client Delivery",
   "role": "Insights Designer",
   "manager": "Vikram Sethi",
   "joined": "2024-05-13",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Power BI",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-07_rangoli_dashboard_handover.md",
       "kind": "did",
       "note": "Restyled the report pages to Rangoli's brand guide."
      },
      {
       "ref": "M138",
       "kind": "did",
       "note": "Rebuilt the Rangoli monthly report pages in Power BI."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Neha Agarwal",
   "chatName": "Neha A.",
   "team": "Operations",
   "role": "Finance and Operations Manager",
   "manager": "Meera Rao",
   "joined": "2017-10-02",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Excel modelling",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Costed Third Cup in the Excel model."
      },
      {
       "ref": "M124",
       "kind": "led",
       "note": "Built the firm's project costing model with three scenarios, used for every quote."
      },
      {
       "ref": "M031",
       "kind": "taught",
       "note": "Taught Siddharth pivot tables."
      },
      {
       "ref": "M033",
       "kind": "taught",
       "note": "Siddharth confirms the session helped."
      }
     ]
    },
    {
     "skill": "Vendor negotiation",
     "level": 2,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-09_third_cup_survey_retro.md",
       "kind": "did",
       "note": "Negotiated the panel vendor from Rs 180 to Rs 140 per complete."
      },
      {
       "ref": "M121",
       "kind": "did",
       "note": "Reports the same negotiation."
      }
     ]
    },
    {
     "skill": "Mentoring",
     "level": 3,
     "confidence": "Medium",
     "status": "proven",
     "evidence": [
      {
       "ref": "M031",
       "kind": "taught",
       "note": "Offers Siddharth a one-to-one on pivots."
      },
      {
       "ref": "M033",
       "kind": "taught",
       "note": "Siddharth thanks her."
      }
     ]
    },
    {
     "skill": "SQL",
     "level": null,
     "confidence": null,
     "status": "contradicted",
     "evidence": [
      {
       "ref": "M172",
       "kind": "contradicts",
       "note": "Says she has not written SQL since 2019; the 2024 register lists SQL."
      }
     ]
    }
   ],
   "flags": [],
   "questions": []
  },
  {
   "name": "Manoj Yadav",
   "chatName": "Manoj Y.",
   "team": "Operations",
   "role": "Field Operations Coordinator",
   "manager": "Neha Agarwal",
   "joined": "2018-03-12",
   "status": "Active",
   "available": true,
   "skills": [
    {
     "skill": "Vendor negotiation",
     "level": 3,
     "confidence": "High",
     "status": "proven",
     "evidence": [
      {
       "ref": "2026-06_medora_patient_survey_retro.md",
       "kind": "led",
       "note": "Contracted the Chennai field agency and agreed the rates."
      },
      {
       "ref": "2026-08_sunleaf_rural_fieldwork_note.md",
       "kind": "led",
       "note": "Contracted two Pune agencies and negotiated 12% off."
      },
      {
       "ref": "M035",
       "kind": "did",
       "note": "Getting two agency quotes, pushing the rate."
      },
      {
       "ref": "M088",
       "kind": "did",
       "note": "Secured 12% off the per-interview rate."
      },
      {
       "ref": "M119",
       "kind": "did",
       "note": "Neha credits his renegotiated rates for a 9% cut in field costs."
      }
     ]
    }
   ],
   "flags": [],
   "questions": [
    "The Sunleaf note says he 'briefed the Marathi-speaking recruiters himself'. That may mean he speaks Marathi, but the note does not say which language he used. Not scored; worth asking him."
   ]
  },
  {
   "name": "Priya Sharma",
   "chatName": "Priya S.",
   "team": "People",
   "role": "HR Executive",
   "manager": "Ananya Iyer",
   "joined": "2023-07-03",
   "status": "Active",
   "available": true,
   "skills": [],
   "flags": [],
   "questions": []
  },
  {
   "name": "Thomas D'Souza",
   "chatName": "Thomas D.",
   "team": "Operations",
   "role": "IT and Admin Executive",
   "manager": "Neha Agarwal",
   "joined": "2016-11-21",
   "status": "Active",
   "available": true,
   "skills": [],
   "flags": [],
   "questions": []
  }
 ],
 "messages": [
  {
   "id": "M001",
   "timestamp": "2026-07-01 09:12",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Good morning all. Q2 numbers are in: our best quarter since 2022. Thank you, every one of you. Town hall on Friday at 4."
  },
  {
   "id": "M002",
   "timestamp": "2026-07-01 09:30",
   "channel": "general",
   "author": "Thomas D.",
   "person": "Thomas D'Souza",
   "text": "The second-floor printer is fixed. Please stop printing to the third floor."
  },
  {
   "id": "M003",
   "timestamp": "2026-07-01 10:05",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Pragati Finance want the churn readout moved to 22 July. Pooja, does that work for the model?"
  },
  {
   "id": "M004",
   "timestamp": "2026-07-01 10:20",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Yes. The gradient boosting version is beating the logistic baseline on the holdout set, so I'll present both and explain the trade-off."
  },
  {
   "id": "M005",
   "timestamp": "2026-07-01 11:02",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Have you all seen the new paper on transformer-based churn prediction? We should be doing this for every client. I can take a look this week!"
  },
  {
   "id": "M006",
   "timestamp": "2026-07-01 11:15",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Kabir, let's get the Pragati summary tables done first."
  },
  {
   "id": "M007",
   "timestamp": "2026-07-01 11:16",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "On it 👍"
  },
  {
   "id": "M009",
   "timestamp": "2026-07-02 09:41",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Pragati's CFO wants churn segmented by loan product: personal loans, gold loans and two-wheeler loans. I've told them we'll split it in the readout."
  },
  {
   "id": "M010",
   "timestamp": "2026-07-02 09:55",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Rohan, I've added loan product to the extract. The query joins disbursements to repayments on account ID, so we can see which product churns first. Runs in about four minutes on their warehouse."
  },
  {
   "id": "M011",
   "timestamp": "2026-07-02 10:20",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf kick-off call moved to Friday 11 a.m."
  },
  {
   "id": "M012",
   "timestamp": "2026-07-02 14:30",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Medora transcripts are all uploaded to the shared drive."
  },
  {
   "id": "M013",
   "timestamp": "2026-07-02 15:10",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Rahul, the repayment view double-counts restructured loans. Add a filter on the status code before you send anything to Pragati."
  },
  {
   "id": "M014",
   "timestamp": "2026-07-02 15:25",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Good catch. Fixed, and I wrote a small Python check that compares row counts against their monthly totals so it can't creep back in."
  },
  {
   "id": "M016",
   "timestamp": "2026-07-03 11:00",
   "channel": "research",
   "author": "Aisha K.",
   "person": "Aisha Khan",
   "text": "Can someone share the Rangoli store list? I need the Jaipur addresses."
  },
  {
   "id": "M017",
   "timestamp": "2026-07-03 11:05",
   "channel": "research",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Sent it to you on email."
  },
  {
   "id": "M018",
   "timestamp": "2026-07-03 15:55",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Reminder: town hall today at 4. Snacks courtesy of Thomas."
  },
  {
   "id": "M020",
   "timestamp": "2026-07-06 09:05",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Payslips for June are out. Ping me if anything looks wrong."
  },
  {
   "id": "M021",
   "timestamp": "2026-07-06 10:12",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Rangoli Threads loved the brand tracker pilot. They want the full dashboard live by the end of July."
  },
  {
   "id": "M022",
   "timestamp": "2026-07-06 10:30",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "I'll build the Rangoli dashboard in Power BI. Arvind, can you set up a nightly refresh from their sales data?"
  },
  {
   "id": "M023",
   "timestamp": "2026-07-06 10:41",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "Yes. I'll write SQL views on top of their order tables and schedule the load for 2 a.m."
  },
  {
   "id": "M025",
   "timestamp": "2026-07-07 09:40",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Rangoli asked for an invoice with their new GST number. Neha, can you reissue?"
  },
  {
   "id": "M026",
   "timestamp": "2026-07-07 10:10",
   "channel": "client-delivery",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "Done, reissued this morning."
  },
  {
   "id": "M027",
   "timestamp": "2026-07-07 12:00",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "text": "Lovely work on the Medora final report, Lakshmi. The client called the questionnaire the clearest they've seen."
  },
  {
   "id": "M028",
   "timestamp": "2026-07-07 12:10",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Thank you! Coimbatore was the hardest. The older patients opened up much more once we switched fully to Tamil."
  },
  {
   "id": "M029",
   "timestamp": "2026-07-08 09:30",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Quick one: can anyone show me how to do pivot tables? I need to summarise the Third Cup responses by city and I'm stuck."
  },
  {
   "id": "M030",
   "timestamp": "2026-07-08 09:44",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Siddharth, ask Neha. She's the Excel wizard."
  },
  {
   "id": "M031",
   "timestamp": "2026-07-08 10:02",
   "channel": "general",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "Siddharth, come by at 3 and I'll walk you through pivots."
  },
  {
   "id": "M033",
   "timestamp": "2026-07-08 15:40",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Thanks Neha, pivots finally make sense. Still very slow at them though."
  },
  {
   "id": "M034",
   "timestamp": "2026-07-09 11:20",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Sunleaf have confirmed the rural study: Nashik, Satara and Latur, 36 interviews and 6 group discussions. Manoj, can you line up the field agencies?"
  },
  {
   "id": "M035",
   "timestamp": "2026-07-09 11:35",
   "channel": "research",
   "author": "Manoj Y.",
   "person": "Manoj Yadav",
   "text": "Will do. I'll get quotes from two agencies in Pune and push for a better per-interview rate this time."
  },
  {
   "id": "M036",
   "timestamp": "2026-07-09 16:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Fire drill on Wednesday at 11. Please actually leave the building this time."
  },
  {
   "id": "M037",
   "timestamp": "2026-07-10 09:15",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "The shared drive will be read-only from 8 p.m. tonight for the backup."
  },
  {
   "id": "M040",
   "timestamp": "2026-07-13 09:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Client lunch with Pragati's CEO on Thursday. Rohan and Farhan, please join."
  },
  {
   "id": "M041",
   "timestamp": "2026-07-13 10:00",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Pragati churn model update: AUC is 0.81 on the holdout set. Top drivers are missed EMIs in the first three months and top-up loans. Notebook is in the Pragati folder. Farhan, can you sanity-check the feature importance before Thursday?"
  },
  {
   "id": "M042",
   "timestamp": "2026-07-13 10:40",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Checked. Calibration looks good, but please add confidence intervals on the uplift numbers. The CFO will ask."
  },
  {
   "id": "M043",
   "timestamp": "2026-07-13 11:05",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "We should try a neural network for this! Deep learning would definitely push the AUC higher."
  },
  {
   "id": "M044",
   "timestamp": "2026-07-13 11:20",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Maybe, but with 18,000 accounts a simpler model is easier to explain to the client. Happy to walk you through the notebook if you're interested, Kabir."
  },
  {
   "id": "M045",
   "timestamp": "2026-07-13 14:30",
   "channel": "client-delivery",
   "author": "Zoya S.",
   "person": "Zoya Siddiqui",
   "text": "Does anyone have the Rangoli logo in a higher resolution?"
  },
  {
   "id": "M046",
   "timestamp": "2026-07-13 14:40",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Check the brand folder. If it's not there, ask their marketing team."
  },
  {
   "id": "M047",
   "timestamp": "2026-07-14 10:00",
   "channel": "research",
   "author": "Divya R.",
   "person": "Divya Reddy",
   "text": "Is the Third Cup survey going to include Hindi as well as English?"
  },
  {
   "id": "M048",
   "timestamp": "2026-07-14 10:12",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "text": "Yes, both. Translation is with the agency."
  },
  {
   "id": "M049",
   "timestamp": "2026-07-14 15:00",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf have changed the brief again: they now want price perception added to the rural study. Third change in a month. I'm on a call with their marketing head at 4 to agree scope, and I'll hold the line on budget."
  },
  {
   "id": "M050",
   "timestamp": "2026-07-14 15:20",
   "channel": "client-delivery",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Kavya, if they push again, loop me in. I've dealt with their MD before and he responds to a firm no."
  },
  {
   "id": "M051",
   "timestamp": "2026-07-15 09:15",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Reminder: please submit your August leave plans by Friday."
  },
  {
   "id": "M052",
   "timestamp": "2026-07-15 12:30",
   "channel": "research",
   "author": "Aisha K.",
   "person": "Aisha Khan",
   "text": "Rangoli store intercepts are done: 120 shoppers across six stores in Delhi and Jaipur. Strong theme on fit and sizing for kurtas, and people hate the returns process."
  },
  {
   "id": "M054",
   "timestamp": "2026-07-16 09:20",
   "channel": "general",
   "author": "Thomas D.",
   "person": "Thomas D'Souza",
   "text": "New laptops for the Research team arrive on Monday. I'll set them up by Tuesday."
  },
  {
   "id": "M055",
   "timestamp": "2026-07-16 10:10",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "First version of the Rangoli dashboard is up: sales by region, top styles, and returns by reason. I wrote the returns query myself so we can split by store. Feedback welcome before I tidy the visuals."
  },
  {
   "id": "M056",
   "timestamp": "2026-07-17 11:30",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Pragati readout is in the calendar for 22 July, 3 p.m. Deck review on the 20th."
  },
  {
   "id": "M057",
   "timestamp": "2026-07-17 14:00",
   "channel": "research",
   "author": "Sourav B.",
   "person": "Sourav Banerjee",
   "text": "Sunleaf want a small Kolkata leg too. I can run those interviews in Bengali next week."
  },
  {
   "id": "M058",
   "timestamp": "2026-07-17 14:05",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "text": "Thanks Sourav. Nikhil, you've got Maharashtra covered?"
  },
  {
   "id": "M059",
   "timestamp": "2026-07-17 14:12",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Yes. I'll moderate the Marathi group discussions myself and brief the local recruiters."
  },
  {
   "id": "M060",
   "timestamp": "2026-07-20 09:10",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Reminder: health insurance renewal forms are due on Friday."
  },
  {
   "id": "M061",
   "timestamp": "2026-07-20 11:00",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Proposal for the Third Cup customer survey is drafted: three options, all priced. Rohan, could you review the scope section?"
  },
  {
   "id": "M062",
   "timestamp": "2026-07-20 11:30",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Looks strong. I tightened the scope, reworked the pricing table and added a timeline slide. Send it."
  },
  {
   "id": "M064",
   "timestamp": "2026-07-21 10:30",
   "channel": "research",
   "author": "Sourav B.",
   "person": "Sourav Banerjee",
   "text": "Kolkata recruitment is on track. Ten of twelve slots filled."
  },
  {
   "id": "M067",
   "timestamp": "2026-07-22 09:00",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Team lunch on Friday to celebrate Pragati, assuming the readout goes well."
  },
  {
   "id": "M068",
   "timestamp": "2026-07-22 18:30",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Pragati readout done. Their CFO asked about confidence intervals in the first ten minutes, so thank you Farhan. Pooja's model got a lot of interest; they want it running monthly by Q4."
  },
  {
   "id": "M069",
   "timestamp": "2026-07-23 09:20",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Great result, team. Pooja, nicely done on the model."
  },
  {
   "id": "M070",
   "timestamp": "2026-07-23 15:00",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf want the topline by 7 August. Tight but doable."
  },
  {
   "id": "M071",
   "timestamp": "2026-07-24 11:00",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "text": "Lakshmi and Divya: survey design clinic on Thursday. Bring a questionnaire you're working on and we'll pull it apart together."
  },
  {
   "id": "M074",
   "timestamp": "2026-07-27 09:30",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Board meeting on Wednesday. I'll be offline most of the day."
  },
  {
   "id": "M075",
   "timestamp": "2026-07-27 11:00",
   "channel": "research",
   "author": "Divya R.",
   "person": "Divya Reddy",
   "text": "Third Cup survey is scripted and soft-launched. Skip logic for non-coffee drinkers is working now."
  },
  {
   "id": "M076",
   "timestamp": "2026-07-27 11:20",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Divya, I looked over it. Question 14 is double-barrelled: it asks about price and quality together. Split it before full launch?"
  },
  {
   "id": "M077",
   "timestamp": "2026-07-27 11:24",
   "channel": "research",
   "author": "Divya R.",
   "person": "Divya Reddy",
   "text": "Good catch, fixing now."
  },
  {
   "id": "M078",
   "timestamp": "2026-07-28 11:00",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Leaving for Nashik tomorrow, back on the 1st. Reachable on phone in the evenings."
  },
  {
   "id": "M079",
   "timestamp": "2026-07-28 15:00",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Rangoli dashboard went live today. Client is very happy."
  },
  {
   "id": "M080",
   "timestamp": "2026-07-28 15:30",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "Dashboard is live. Arvind's nightly refresh worked first time, which never happens 😄"
  },
  {
   "id": "M081",
   "timestamp": "2026-07-29 10:00",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Third Cup want to see sample questions before the full launch. Sending them today."
  },
  {
   "id": "M082",
   "timestamp": "2026-07-29 12:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Shout-out to the Rangoli team for getting the dashboard live on time."
  },
  {
   "id": "M083",
   "timestamp": "2026-07-30 10:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Our skills register is now nearly two years old. I'll send round an update form next month. Please fill it in!"
  },
  {
   "id": "M084",
   "timestamp": "2026-07-30 15:45",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Anyone else seeing slow queries on the shared warehouse this afternoon?"
  },
  {
   "id": "M085",
   "timestamp": "2026-07-30 15:50",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "Yes, the backup is running early. Should clear in an hour."
  },
  {
   "id": "M087",
   "timestamp": "2026-08-03 09:30",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Back from Satara. The groups went well; the women's evening group was far more open about price than the men's."
  },
  {
   "id": "M088",
   "timestamp": "2026-08-03 09:45",
   "channel": "research",
   "author": "Manoj Y.",
   "person": "Manoj Yadav",
   "text": "The Pune agency agreed to 12% off the per-interview rate if we commit to the Latur leg too. I've said yes."
  },
  {
   "id": "M089",
   "timestamp": "2026-08-03 10:30",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Independence Day on the 15th is a holiday. Office closed."
  },
  {
   "id": "M090",
   "timestamp": "2026-08-04 09:00",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Client review meeting every Monday at 10 from now on. Please keep your updates to two minutes."
  },
  {
   "id": "M091",
   "timestamp": "2026-08-04 10:15",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Shikhar Classes sent their enquiry export. It's a mess: three date formats in one column. I've written a cleaning query and will share the view tomorrow."
  },
  {
   "id": "M093",
   "timestamp": "2026-08-04 16:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "withheld": "HR conversation about workload",
   "text": ""
  },
  {
   "id": "M095",
   "timestamp": "2026-08-05 11:00",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Rangoli's founder asked who built the dashboard. I said I did, it was simpler than explaining the whole team 😅 Anyway, she wants to extend the contract."
  },
  {
   "id": "M096",
   "timestamp": "2026-08-05 11:10",
   "channel": "client-delivery",
   "author": "Zoya S.",
   "person": "Zoya Siddiqui",
   "text": "😬"
  },
  {
   "id": "M097",
   "timestamp": "2026-08-05 15:00",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Can someone book meeting room 2 for the Third Cup debrief on Friday?"
  },
  {
   "id": "M098",
   "timestamp": "2026-08-05 15:05",
   "channel": "research",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Booked, 2 to 4 p.m."
  },
  {
   "id": "M099",
   "timestamp": "2026-08-06 09:30",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Does anyone have the Pragati readout deck? I need a chart from it."
  },
  {
   "id": "M100",
   "timestamp": "2026-08-06 09:35",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "It's in the Pragati folder under 'final'."
  },
  {
   "id": "M101",
   "timestamp": "2026-08-06 14:00",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "For the record, the Rangoli dashboard is on version 3 now. Added the returns drill-down they asked for."
  },
  {
   "id": "M102",
   "timestamp": "2026-08-06 15:20",
   "channel": "research",
   "author": "Sourav B.",
   "person": "Sourav Banerjee",
   "text": "Kolkata interviews done: 12, all in Bengali. Translated transcripts by Thursday."
  },
  {
   "id": "M103",
   "timestamp": "2026-08-07 10:00",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf topline presented this morning. Their brand head pushed back hard on the price findings, but we walked through the verbatims and he came round."
  },
  {
   "id": "M105",
   "timestamp": "2026-08-10 09:15",
   "channel": "general",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "Please submit July expense claims by Wednesday. Late claims roll into next month."
  },
  {
   "id": "M106",
   "timestamp": "2026-08-10 12:00",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Spent the weekend reading about agentic AI. We could replace half our survey work with agents. Happy to lead this!"
  },
  {
   "id": "M107",
   "timestamp": "2026-08-10 12:15",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Kabir, write me one page on a specific use case and we'll talk."
  },
  {
   "id": "M108",
   "timestamp": "2026-08-11 09:30",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Pragati want the churn model scored monthly. I've packaged the Python pipeline so Arvind can schedule it."
  },
  {
   "id": "M109",
   "timestamp": "2026-08-11 10:00",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "Got it. I've written a small Python wrapper so it runs in the same scheduler as the Rangoli refresh."
  },
  {
   "id": "M110",
   "timestamp": "2026-08-11 14:20",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf paid the first invoice. Small miracles."
  },
  {
   "id": "M111",
   "timestamp": "2026-08-12 10:00",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Latur interviews start Thursday. Manoj, the agency has confirmed the recruiters."
  },
  {
   "id": "M112",
   "timestamp": "2026-08-12 10:15",
   "channel": "research",
   "author": "Manoj Y.",
   "person": "Manoj Yadav",
   "text": "Yes, confirmed this morning."
  },
  {
   "id": "M113",
   "timestamp": "2026-08-12 16:00",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Tried running Pooja's script to regenerate the Pragati charts and managed to delete the output folder. Sure, I'm the Python expert now 😂 Pooja, I'm so sorry."
  },
  {
   "id": "M114",
   "timestamp": "2026-08-12 16:10",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "No harm done, it's all in version control. I'll rerun it."
  },
  {
   "id": "M115",
   "timestamp": "2026-08-13 11:00",
   "channel": "research",
   "author": "Aisha K.",
   "person": "Aisha Khan",
   "withheld": "health, family and leave reason",
   "text": ""
  },
  {
   "id": "M116",
   "timestamp": "2026-08-13 11:05",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "withheld": "reply about leave",
   "text": ""
  },
  {
   "id": "M117",
   "timestamp": "2026-08-13 11:20",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Yes, I'll take them."
  },
  {
   "id": "M118",
   "timestamp": "2026-08-14 11:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Happy Independence Day in advance, everyone. Enjoy the long weekend."
  },
  {
   "id": "M119",
   "timestamp": "2026-08-17 10:00",
   "channel": "general",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "Field costs for the quarter are down 9%, mostly thanks to the renegotiated agency rates. Thanks Manoj."
  },
  {
   "id": "M120",
   "timestamp": "2026-08-18 09:30",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "withheld": "family event and leave",
   "text": ""
  },
  {
   "id": "M121",
   "timestamp": "2026-08-18 14:00",
   "channel": "client-delivery",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "The Third Cup panel vendor wanted Rs 180 per complete. I got them to Rs 140 by moving to a quarterly contract."
  },
  {
   "id": "M122",
   "timestamp": "2026-08-19 10:45",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Third Cup want the interim findings on the 27th."
  },
  {
   "id": "M124",
   "timestamp": "2026-08-19 15:00",
   "channel": "client-delivery",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "I've updated the project costing model in Excel: staffing by grade, field costs by city, and three scenarios. Use it for every new quote please."
  },
  {
   "id": "M125",
   "timestamp": "2026-08-20 10:00",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Shikhar funnel model is done in Excel: enquiry to demo class to enrolment, by centre and month. Rahul, I used your cleaned data."
  },
  {
   "id": "M126",
   "timestamp": "2026-08-20 10:30",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Nice. The drop between demo class and enrolment at the Noida centre is huge."
  },
  {
   "id": "M127",
   "timestamp": "2026-08-20 15:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Reminder: quarterly business review on 2 September. Team heads, please send me your slides by the 30th."
  },
  {
   "id": "M130",
   "timestamp": "2026-08-24 09:30",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Devika, for the Medora follow-up I've drafted the discussion guide in English and Tamil. Both are uploaded."
  },
  {
   "id": "M132",
   "timestamp": "2026-08-25 10:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "The skills register update form is out. Please fill it in by 5 September."
  },
  {
   "id": "M133",
   "timestamp": "2026-08-25 10:30",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Also: our mentoring circles start next week. Every new joiner gets a buddy and a monthly hour with me."
  },
  {
   "id": "M134",
   "timestamp": "2026-08-25 16:00",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Pragati want a short note on how the monthly scoring will work. I'll draft it with Pooja."
  },
  {
   "id": "M135",
   "timestamp": "2026-08-26 09:10",
   "channel": "research",
   "author": "Divya R.",
   "person": "Divya Reddy",
   "text": "Third Cup survey closes on Friday. 1,140 completes so far."
  },
  {
   "id": "M136",
   "timestamp": "2026-08-26 13:00",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Kabir, your funnel model was pulling the wrong month for the Gurugram centre. Fixed the lookup and sent it back."
  },
  {
   "id": "M137",
   "timestamp": "2026-08-27 09:30",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Ganesh Chaturthi on the 14th of September is an optional holiday. Let me know if you're taking it."
  },
  {
   "id": "M138",
   "timestamp": "2026-08-27 11:00",
   "channel": "client-delivery",
   "author": "Zoya S.",
   "person": "Zoya Siddiqui",
   "text": "Rebuilt the Rangoli monthly report pages in Power BI with their brand colours and a cleaner layout."
  },
  {
   "id": "M139",
   "timestamp": "2026-08-27 16:00",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Presented the Third Cup interim findings to their ops head. Nervous, but it went okay."
  },
  {
   "id": "M140",
   "timestamp": "2026-08-28 12:00",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Good job, Siddharth. Next time lead with the one number they care about."
  },
  {
   "id": "M141",
   "timestamp": "2026-08-28 15:00",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "Rangoli refresh failed last night: their server was down. Reran it this morning, all fine."
  },
  {
   "id": "M142",
   "timestamp": "2026-08-28 17:30",
   "channel": "client-delivery",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Pitched the Third Cup founders today with Harpreet's proposal. They signed on the spot."
  },
  {
   "id": "M143",
   "timestamp": "2026-08-31 10:00",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Shikhar want to meet next week about phase 2. Any preference on days?"
  },
  {
   "id": "M145",
   "timestamp": "2026-09-01 09:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Welcome back from the weekend. Busy month ahead."
  },
  {
   "id": "M147",
   "timestamp": "2026-09-02 10:00",
   "channel": "research",
   "author": "Devika M.",
   "person": "Devika Menon",
   "withheld": "health and leave reason",
   "text": ""
  },
  {
   "id": "M148",
   "timestamp": "2026-09-02 10:05",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "withheld": "health",
   "text": ""
  },
  {
   "id": "M149",
   "timestamp": "2026-09-02 10:30",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "withheld": "leave announcement (availability comes only from people.csv)",
   "text": ""
  },
  {
   "id": "M150",
   "timestamp": "2026-09-02 15:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Quarterly review went well. Thank you, team heads."
  },
  {
   "id": "M151",
   "timestamp": "2026-09-03 10:15",
   "channel": "research",
   "author": "Aisha K.",
   "person": "Aisha Khan",
   "text": "Third Cup verbatims are coded. Sharing the theme sheet with Lakshmi today."
  },
  {
   "id": "M152",
   "timestamp": "2026-09-03 11:00",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "One-to-ones with each of you this week. Bring one thing you want to learn this quarter."
  },
  {
   "id": "M154",
   "timestamp": "2026-09-07 09:00",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Please welcome Rahul Kapoor, who joins Analytics as an intern today! Rahul is a final-year economics student with us for three months."
  },
  {
   "id": "M155",
   "timestamp": "2026-09-07 09:20",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Welcome, Rahul! We now have two Rahul K.s, so please use full names in threads."
  },
  {
   "id": "M156",
   "timestamp": "2026-09-07 11:00",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kapoor",
   "text": "Hi everyone! Quick question: how do I connect to the Shikhar database? And is there a guide to SQL joins? I've only done the basics in college."
  },
  {
   "id": "M157",
   "timestamp": "2026-09-07 11:15",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Welcome! I'll send you the connection details and a starter query. Joins are easier than they look."
  },
  {
   "id": "M158",
   "timestamp": "2026-09-08 09:30",
   "channel": "general",
   "author": "Thomas D.",
   "person": "Thomas D'Souza",
   "text": "Rahul Kapoor's laptop is ready. Rahul, collect it from my desk."
  },
  {
   "id": "M159",
   "timestamp": "2026-09-08 14:00",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kapoor",
   "text": "Thanks Rahul! The starter query worked. What's the difference between a LEFT JOIN and an INNER JOIN again?"
  },
  {
   "id": "M160",
   "timestamp": "2026-09-08 14:20",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Rahul, INNER keeps only rows that match in both tables. LEFT keeps every row from the first table, matched or not."
  },
  {
   "id": "M161",
   "timestamp": "2026-09-09 10:00",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Pragati scoring job ran overnight: 2.1 million rows, no failures. I also tuned the repayment view; it's three times faster now."
  },
  {
   "id": "M162",
   "timestamp": "2026-09-09 16:20",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf want a Kolkata follow-up. Details tomorrow."
  },
  {
   "id": "M163",
   "timestamp": "2026-09-10 10:50",
   "channel": "research",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Sunleaf want a quick follow-up in Kolkata. Sneha, could you help with the Bengali transcripts?"
  },
  {
   "id": "M164",
   "timestamp": "2026-09-10 11:00",
   "channel": "research",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "withheld": "mentions family",
   "text": ""
  },
  {
   "id": "M165",
   "timestamp": "2026-09-10 11:30",
   "channel": "research",
   "author": "Sourav B.",
   "person": "Sourav Banerjee",
   "text": "I'll take it, Kavya. Same moderator guide as last time, translated."
  },
  {
   "id": "M166",
   "timestamp": "2026-09-11 10:00",
   "channel": "general",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "August invoices are all out. Thank you for the quick sign-offs."
  },
  {
   "id": "M167",
   "timestamp": "2026-09-11 15:00",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Rangoli have renewed for another year and want two more dashboards. Great news."
  },
  {
   "id": "M168",
   "timestamp": "2026-09-11 15:20",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "Happy to build the new Rangoli dashboards. Can we get the store-level returns data this time?"
  },
  {
   "id": "M170",
   "timestamp": "2026-09-14 10:00",
   "channel": "analytics",
   "author": "Arvind P.",
   "person": "Arvind Pillai",
   "text": "Sneha, I haven't touched Power BI since my last job, so I'll leave the visuals to you and handle the data model in SQL."
  },
  {
   "id": "M171",
   "timestamp": "2026-09-15 10:30",
   "channel": "research",
   "author": "Divya R.",
   "person": "Divya Reddy",
   "text": "Medora follow-up recruitment has started in Chennai."
  },
  {
   "id": "M172",
   "timestamp": "2026-09-15 12:00",
   "channel": "general",
   "author": "Neha A.",
   "person": "Neha Agarwal",
   "text": "Someone asked if I can pull the Shikhar numbers myself. I haven't written SQL since 2019, so please ask Rahul Kumar!"
  },
  {
   "id": "M173",
   "timestamp": "2026-09-15 14:30",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Presented Rangoli's quarterly review today. They challenged our returns numbers for half an hour; we held our ground with the store data and they accepted it."
  },
  {
   "id": "M174",
   "timestamp": "2026-09-16 09:30",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Weekly research update: Third Cup qual is complete, Sunleaf Kolkata follow-up in progress (Sourav), Medora follow-up interviews start 1 October in Chennai. I'll moderate those myself."
  },
  {
   "id": "M175",
   "timestamp": "2026-09-16 11:15",
   "channel": "client-delivery",
   "author": "Siddharth J.",
   "person": "Siddharth Jain",
   "text": "Third Cup final report sent. They want a call next week."
  },
  {
   "id": "M176",
   "timestamp": "2026-09-17 09:45",
   "channel": "general",
   "author": "Priya S.",
   "person": "Priya Sharma",
   "text": "Reminder: please update your emergency contact details in the HR portal."
  },
  {
   "id": "M177",
   "timestamp": "2026-09-17 14:00",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Shikhar Classes phase 2 proposal is drafted: enquiry tracking plus counsellor training. Vikram, your review please."
  },
  {
   "id": "M178",
   "timestamp": "2026-09-17 17:00",
   "channel": "client-delivery",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "Reviewed it. Sharpened the pricing section and cut the methodology to one page. Good to go."
  },
  {
   "id": "M179",
   "timestamp": "2026-09-18 11:00",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Farhan, here's my one-pager on using machine learning to predict which Shikhar enquiries will enrol."
  },
  {
   "id": "M180",
   "timestamp": "2026-09-18 11:20",
   "channel": "analytics",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Thanks Kabir. Pooja, could you look at this? You've built this kind of model before."
  },
  {
   "id": "M181",
   "timestamp": "2026-09-18 11:30",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Sure. The Pragati churn approach would transfer well. Kabir, let's pair on it, you can drive and I'll review."
  },
  {
   "id": "M183",
   "timestamp": "2026-09-21 09:20",
   "channel": "analytics",
   "author": "Sneha G.",
   "person": "Sneha Ghosh",
   "text": "Store-level returns data from Rangoli has arrived. Starting the new dashboards today."
  },
  {
   "id": "M186",
   "timestamp": "2026-09-22 09:00",
   "channel": "halcyon-bid",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Big news: Halcyon Bank has invited us to bid for a customer-experience study across Tamil Nadu and Maharashtra. It would be the largest project we've ever run. Proposal due 8 October. This channel is for the bid team."
  },
  {
   "id": "M187",
   "timestamp": "2026-09-22 09:10",
   "channel": "halcyon-bid",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "We need: SQL and data work on their customer data, banking knowledge, survey design, Tamil and Marathi fieldwork, and someone strong to present. Who do we have?"
  },
  {
   "id": "M188",
   "timestamp": "2026-09-22 09:30",
   "channel": "halcyon-bid",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "According to the skills register: Imran Sheikh for Tamil fieldwork, Devika for survey design, Tanvi Shah for SQL, and Arvind for dashboards."
  },
  {
   "id": "M189",
   "timestamp": "2026-09-22 09:35",
   "channel": "halcyon-bid",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "Ananya, Imran left last November and Tanvi left in June last year. And Devika is on leave."
  },
  {
   "id": "M190",
   "timestamp": "2026-09-22 09:40",
   "channel": "halcyon-bid",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Ah. That register is two years old, and half the team didn't fill in the update form either."
  },
  {
   "id": "M191",
   "timestamp": "2026-09-22 09:52",
   "channel": "halcyon-bid",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "I'd love to be on this! I could build a machine learning model to predict customer satisfaction. I've been reading a lot about it."
  },
  {
   "id": "M192",
   "timestamp": "2026-09-22 10:05",
   "channel": "halcyon-bid",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "I've led three banking projects, including Pragati. Happy to lead the client side and present."
  },
  {
   "id": "M193",
   "timestamp": "2026-09-22 10:10",
   "channel": "halcyon-bid",
   "author": "Rahul K.",
   "person": "Rahul Kumar",
   "text": "Count me in for the data work. I know Pragati's loan tables well, and Halcyon's will be similar."
  },
  {
   "id": "M194",
   "timestamp": "2026-09-22 10:30",
   "channel": "halcyon-bid",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Thanks. Who has done fieldwork in Tamil recently? And Marathi?"
  },
  {
   "id": "M195",
   "timestamp": "2026-09-22 11:15",
   "channel": "halcyon-bid",
   "author": "Vikram S.",
   "person": "Vikram Sethi",
   "text": "I can take the client relationship too, and the dashboards. I built Rangoli's."
  },
  {
   "id": "M196",
   "timestamp": "2026-09-22 14:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Diwali leave requests by 10 October, please."
  },
  {
   "id": "M197",
   "timestamp": "2026-09-23 09:00",
   "channel": "halcyon-bid",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "Meera, this is exactly why we need a live skills inventory: something that reads how people actually work, not what they wrote in a form two years ago."
  },
  {
   "id": "M198",
   "timestamp": "2026-09-23 09:15",
   "channel": "halcyon-bid",
   "author": "Farhan Q.",
   "person": "Farhan Qureshi",
   "text": "As long as it doesn't read anything it shouldn't. Let's agree what it looks at before anyone builds it."
  },
  {
   "id": "M199",
   "timestamp": "2026-09-23 09:30",
   "channel": "halcyon-bid",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Agreed, let's discuss. Either way, I need names by Friday 2 October."
  },
  {
   "id": "M202",
   "timestamp": "2026-09-24 10:30",
   "channel": "client-delivery",
   "author": "Rohan M.",
   "person": "Rohan Mehta",
   "text": "Drafting the Halcyon proposal outline. Will share a skeleton by Monday."
  },
  {
   "id": "M203",
   "timestamp": "2026-09-24 12:00",
   "channel": "research",
   "author": "Nikhil J.",
   "person": "Nikhil Joshi",
   "text": "Saw the Halcyon news. I ran all the Marathi groups for Sunleaf, if that helps. Not sure I'm senior enough for a bid that size though."
  },
  {
   "id": "M204",
   "timestamp": "2026-09-24 12:20",
   "channel": "research",
   "author": "Lakshmi N.",
   "person": "Lakshmi Narayanan",
   "text": "Reminder: the Medora follow-up kit is ready for the 1 October interviews."
  },
  {
   "id": "M205",
   "timestamp": "2026-09-25 09:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "Halcyon have extended the proposal deadline to 12 October. Names still needed by Friday."
  },
  {
   "id": "M206",
   "timestamp": "2026-09-25 15:00",
   "channel": "analytics",
   "author": "Rahul K.",
   "person": "Rahul Kapoor",
   "text": "Finished my first dashboard in Excel for the Shikhar centres! Took me all week but I'm proud of it."
  },
  {
   "id": "M207",
   "timestamp": "2026-09-25 15:10",
   "channel": "analytics",
   "author": "Kabir M.",
   "person": "Kabir Malhotra",
   "text": "Nice work, Rahul!"
  },
  {
   "id": "M208",
   "timestamp": "2026-09-28 10:00",
   "channel": "general",
   "author": "Ananya I.",
   "person": "Ananya Iyer",
   "text": "If you haven't filled in the skills update form yet, please do. We need it for Halcyon."
  },
  {
   "id": "M209",
   "timestamp": "2026-09-28 15:30",
   "channel": "client-delivery",
   "author": "Harpreet K.",
   "person": "Harpreet Kaur",
   "text": "Shikhar signed phase 2. Kick-off on 6 October."
  },
  {
   "id": "M210",
   "timestamp": "2026-09-29 10:10",
   "channel": "analytics",
   "author": "Pooja D.",
   "person": "Pooja Desai",
   "text": "Pragati's first monthly scoring run is scheduled for 1 October."
  },
  {
   "id": "M211",
   "timestamp": "2026-09-29 11:00",
   "channel": "client-delivery",
   "author": "Kavya N.",
   "person": "Kavya Nair",
   "text": "Third Cup's ops head mentioned that two outlet licences lapsed last year and they had to close for a week. Might be worth pitching them something on that."
  },
  {
   "id": "M214",
   "timestamp": "2026-09-30 17:00",
   "channel": "general",
   "author": "Meera R.",
   "person": "Meera Rao",
   "text": "End of quarter. Thank you all. Halcyon names by Friday, please."
  }
 ]
};
if (typeof module !== 'undefined') module.exports = DATA;
