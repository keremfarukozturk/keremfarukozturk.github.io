---
title: "RTL-SecCheck"
summary: "An open-source pipeline that audits the verification of AI-assisted hardware designs: first on my own designs, then on open designs with known bugs."
lede: "An open-source pipeline that audits the verification of AI-assisted hardware designs."
doc: KFO-003
rev: B
updated: 2026-11-14
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Methods: [Lint, simulation, formal verification, mutation testing]
  Focus: [Verification adequacy, hardware security]
revisions:
  - { rev: B, date: 2026-11-14, note: "Scope narrowed to auditing verification; two-phase plan" }
  - { rev: A, date: 2026-11-13, note: "Project page" }
---

## Problem

A growing share of hardware code, and of the tests that check it, is written with the help of AI models. A design can pass its tests and still hide a bug or a security flaw. The real question is whether the verification is good enough to catch it.

## Approach

The pipeline combines lint, simulation and formal verification. In the second phase, it deliberately injects bugs into the design and measures whether the verification catches them.

## Plan

- Phase 1: I'm applying the pipeline to my own accelerator modules, recording what the AI produced and which bugs I caught.
- Phase 2 (2027): On open designs with known bugs (Hack@DAC, OpenTitan), measuring whether verification properties written by AI catch those bugs.
