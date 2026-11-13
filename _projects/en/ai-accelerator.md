---
title: "A small AI accelerator"
summary: "A simple hardware design for neural network inference, documented from RTL to verification to FPGA."
doc: KFO-001
rev: A
updated: 2026-11-13
year: 2026
status: starting
type: ai
ref: ai-accelerator
order: 1
stack:
  Design: [Verilog]
  Verification: [cocotb]
  Target: [FPGA]
revisions:
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

Neural networks spend most of their time multiplying and adding numbers. General-purpose processors can do this, but dedicated hardware does it faster and with far less energy. I want to understand that trade-off by building one myself, at a small scale.

## Approach

A small, low-precision inference accelerator: an array of multiply-accumulate units fed by simple buffers. Every module will have its own automated tests before it is integrated.

## Plan

- Architecture and block diagram
- RTL for the multiply-accumulate unit and the array
- Verification with cocotb
- Running on an FPGA and measuring the results

This page is updated as each stage is completed; changes are listed in the revision history below.
