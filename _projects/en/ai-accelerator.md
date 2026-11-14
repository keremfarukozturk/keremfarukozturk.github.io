---
title: "A small AI accelerator"
summary: "A compact INT8 neural network inference accelerator in Verilog, verified bit-exactly and headed for an FPGA and Tiny Tapeout."
doc: KFO-001
rev: B
updated: 2026-11-14
year: 2026
status: ongoing
type: ai
ref: ai-accelerator
order: 1
stack:
  Design: [Verilog]
  Verification: [cocotb, Icarus Verilog, Verilator, SymbiYosys, Python]
  Target: [FPGA, Tiny Tapeout (GF180MCU)]
revisions:
  - { rev: B, date: 2026-11-14, note: "Verification tools, target process and plan updated" }
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

Neural networks spend most of their time multiplying and adding numbers. General-purpose processors can do this, but dedicated hardware does it faster and with far less energy. I want to understand that trade-off by building one myself, at a small scale.

## Approach

A compact INT8 inference accelerator for handwritten-digit classification: a multiply-accumulate (MAC) datapath, a control state machine, ReLU activation and an argmax output stage. The weights don't fit on the chip, so they are streamed in from outside. The RTL is verified bit-exactly against a Python reference model with cocotb.

## Plan

- Architecture and block diagram
- RTL for the MAC datapath, control and activation
- Bit-exact verification against the Python model
- Running on a low-cost FPGA board with ready/valid interfaces
- Comparing variants (weight bit-width, serial vs. parallel MAC) on area, timing and accuracy before a Tiny Tapeout submission
- Tiny Tapeout submission, and measurements once the chip arrives

This page is updated as each stage is completed; changes are listed in the revision history below.
