---
title: "RTL-SecCheck"
summary: "An open-source pipeline that checks small, AI-written RTL designs for functional and security defects."
doc: KFO-003
rev: A
updated: 2026-11-13
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Checks: [Yosys lint, cocotb simulation, SymbiYosys formal]
  Properties: [SystemVerilog Assertions (SVA)]
  Language: [Python]
revisions:
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

More and more hardware code is written with the help of AI models. A design can pass its tests and still hide a security flaw, such as a security register that is not initialized on reset, or a debug mode that bypasses a lock.

## Approach

A pipeline for small RTL designs in three layers: lint with Yosys, simulation with cocotb and formal checks with SymbiYosys. On top of it, a library of security properties written as SystemVerilog Assertions and mapped to MITRE hardware CWEs, for example CWE-1271 (uninitialized value on reset for security registers) and CWE-1234 (debug modes overriding locks).

## Plan

- Apply the pipeline first to AI-assisted variants of my own accelerator
- Then to open-source Tiny Tapeout designs
- Report confirmed findings to the designers through responsible disclosure

This page is updated as each stage is completed.
