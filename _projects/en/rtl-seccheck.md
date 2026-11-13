---
title: "RTL-SecCheck"
summary: "An open-source pipeline that checks AI-written hardware designs for functional and security defects."
doc: KFO-003
rev: A
updated: 2026-11-13
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Methods: [Lint, simulation, formal verification]
  Focus: [Hardware security]
revisions:
  - { rev: A, date: 2026-11-13, note: "Project page" }
---

## Problem

More and more hardware code is written with the help of AI models. A design can pass its tests and still hide a security flaw.

## Approach

An open-source pipeline that combines lint, simulation and formal verification with a set of security checks for common hardware weaknesses.

## Plan

I'm applying it to my own designs first. Confirmed findings in other designs will be shared with their authors through responsible disclosure before anything is published.
