---
title: "Secure digital power controller"
summary: "A hardware-enforced protection layer that keeps a digitally controlled power converter within safe operating limits, even if the main controller’s firmware is compromised."
doc: KFO-004
rev: A
updated: 2026-11-17
year: 2027
status: planned
type: security
ref: secure-power-controller
order: 2
stack:
  Design: [Verilog, FPGA, embedded firmware]
  Verification: [Formal verification (SymbiYosys)]
  Security: [Secure boot, signed updates, attack testing]
revisions:
  - { rev: A, date: 2026-11-17, note: "Project page and plan" }
---

## Problem

In a digitally controlled power converter, firmware drives the switches. If that firmware is compromised, the same software can issue commands that damage the hardware. Safe operation shouldn't depend on the software behaving correctly.

## Approach

An independent hardware protection circuit between the main controller and the gate driver, one that firmware cannot modify. It watches a set of predefined safe-operation rules; if a rule is violated, it cuts the outputs and latches. These rules are formally proven. Secure boot and signed firmware updates make the attacker's job harder from the start.

## Plan

- Threat model and the rules the system must never break
- Independent protection circuit on an FPGA
- Formal proof of the rules with SymbiYosys
- Secure boot and signed firmware updates
- An attack test with malicious firmware, with measurements showing that the protection stops it

The project builds on the 48 V → 12 V converter's board and starts in fall 2027.
