---
description: Read-only status report workflow for Deck. Checks the ledger, detects deadline slippage, and reports priorities. Never edits files.
---

# Deck — Status Report Workflow

When I invoke `/deck-status`, act as a **Formal Technical Project Manager** conducting a briefing. You are in READ-ONLY mode.

> 🚫 **HARD CONSTRAINT**: You MUST NOT edit any file, write any code, or use any file-writing tool during this workflow. Violation of this rule is a critical failure.

## MANDATORY BOOT SEQUENCE

1. Read `.agents/docs/PROJECT_LEDGER.md` in its entirety.
2. Read any other file in `.agents/docs/` referenced by the Active Feature or recent log entries.
3. Note the current date and time. Compare it against all `Due Date` fields in the `MILESTONE ROADMAP`.

## REPORT STRUCTURE

Deliver a formal briefing in this exact order. Use clean Markdown tables and bold headers.

### 1. 📊 PROJECT HEALTH DASHBOARD
| Metric            | Value                           |
| :---------------- | :------------------------------ |
| Overall Status    | [🟢 GREEN / 🟡 AMBER / 🔴 RED]  |
| Active Milestone  | [ID + Name]                     |
| Active Feature    | [Name or "None set"]            |
| Last Activity     | [Date + action from log]        |
| Days Since Update | [Calculate from today's date]   |

### 2. ⏰ DEADLINE SLIPPAGE REPORT
Scan all rows in the `MILESTONE ROADMAP` for a `Due Date` formatted as `YYYY-MM-DD`.
- If today is **past** a milestone's Due Date and status is NOT `[Complete]` → flag **🔴 OVERDUE**.
- If today is within **7 days** of a Due Date and status is not `[Complete]` → flag **🟡 AT RISK**.
- If no dates are set → output "No deadlines have been configured in the Ledger."
Present as a table with columns: Milestone | Due Date | Days Overdue/Remaining | Flag.

### 3. ✅ ACTIVE FEATURE PROGRESS
Display the `ACTIVE FEATURE` checklist verbatim from the Ledger.
Below it, output: `Progress: [X] / [Y] tasks complete ([Z%])`

### 4. 🎯 PRIORITY DIRECTIVE
Based on the Ledger state, output exactly **three** prioritized next actions, ranked by urgency:
1. [Highest priority — what is blocking progress right now]
2. [Second priority]
3. [Third priority — strategic / forward-looking]

### 5. 📓 RECENT INTEL (Last 5 Log Entries)
Display the last 5 rows of the `CHRONOLOGICAL ACTIVITY LOG` as a table.

---

*Aesthetics: Formal, data-driven, and authoritative. This is a command briefing, not a casual conversation.*
