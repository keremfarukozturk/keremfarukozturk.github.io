---
title: "A small AI accelerator"
summary: "A compact INT8 neural network inference accelerator in Verilog, verified bit-exactly; its smallest working version goes to Tiny Tapeout, and then the project closes."
doc: KFO-001
rev: C
updated: 2026-11-17
year: 2026
status: ongoing
type: ai
ref: ai-accelerator
order: 3
stack:
  Design: [Verilog]
  Verification: [cocotb, Icarus Verilog, Yosys, SymbiYosys, Python]
  Target: [Tiny Tapeout, FPGA (optional)]
revisions:
  - { rev: C, date: 2026-11-17, note: "Rescoped as a closing project; verification checks folded into it" }
  - { rev: B, date: 2026-11-14, note: "Verification tools, target process and plan updated" }
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

Neural networks spend most of their time multiplying and adding numbers. General-purpose processors can do this, but dedicated hardware does it faster and with far less energy. I want to understand that trade-off by building one myself, at a small scale.

## Approach

A very small neural network trained in Python, with a fixed-point (INT8) reference model. On the hardware side, there is a multiply-accumulate (MAC) unit and a control unit that streams the weights in from off-chip. Every module goes through lint, simulation and formal checks, and the output is compared bit-exactly against the Python reference with cocotb.

## Plan

- A small network and its INT8 reference model in Python
- A MAC unit and a control unit in Verilog (ready/valid interfaces)
- Bit-exact match with cocotb; basic checks with Yosys and SymbiYosys
- Shrinking the design and submitting it to Tiny Tapeout; a short measurement once the chip arrives
- Optional: running it on an FPGA board

This is a closing project: it ends once the smallest working version is submitted to Tiny Tapeout. The scope is deliberately small.
