---
title: "Konsey"
summary: "Konsey is a multi-model decision tool. It puts the same question to Claude, GPT and Gemini separately, has them critique one another, and presents only a text that all three have voted on."
lede: "Three AI models, one shared answer."
doc: KFO-005
rev: A
updated: 2026-11-23
year: 2026
status: completed
type: ai
ref: konsey
order: 4
revisions:
  - { rev: A, date: 2026-11-23, note: "Project page" }
---

Konsey is a multi-model decision tool. It puts the same question to Claude, GPT and Gemini separately, has them critique one another, and presents only a text that all three have voted on.

## Why

An AI model sounds just as confident when it is wrong. Instead of trusting a single voice, Konsey brings together three voices that check each other.

I built Konsey so that I wouldn't have to rely on a single model's answer, which can be confident and still wrong.

## How it works

{% include konsey-flow.html %}

1. **Independent answers.** The three models answer without seeing each other.
2. **Anonymous critique.** Each model critiques the other answers without knowing who wrote them.
3. **Skeptical revision.** Models verify a critique before accepting it; anything they cannot verify is recorded as an open question.
4. **Joint draft.** The revised answers are merged into a single text.
5. **Separate votes.** Each model approves or rejects the text on its own; the votes are counted by code.
{: .flow-steps}

## Principles

- **Rules are enforced in code.** Vote counting, turn order and rule violations are checked by software.
- **Sources are cited by number.** When a question needs current information, every claim links to its source; fabricated citations are caught automatically.
- **Uncertainty stays visible.** Unresolved points appear openly in the answer.
- **Models run in a closed environment.** They only produce text; they cannot touch files, commands or accounts.
- **No extra API cost.** Each model runs through its own official command-line tool.

Unanimity is not the same as correctness. Konsey does not aim to eliminate errors; it aims to make them visible.

## Facts

Version 1.0 · Python · 3 models · 74 design decisions · 820 automated tests
{: .facts}
