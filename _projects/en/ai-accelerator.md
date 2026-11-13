---
title: "A small AI accelerator"
summary: "A compact INT8 neural network inference accelerator in Verilog, verified bit-exactly and headed for an FPGA and Tiny Tapeout."
doc: KFO-001
rev: A
updated: 2026-11-13
year: 2026
status: ongoing
type: ai
ref: ai-accelerator
order: 1
stack:
  Design: [Verilog]
  Verification: [cocotb, Icarus Verilog, Verilator, Python]
  Target: [FPGA, Tiny Tapeout (SkyWater 130 nm)]
revisions:
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

Neural networks spend most of their time multiplying and adding numbers. General-purpose processors can do this, but dedicated hardware does it faster and with far less energy. I want to understand that trade-off by building one myself, at a small scale.

## Approach

A compact INT8 inference accelerator for handwritten-digit classification: a multiply-accumulate (MAC) datapath, a control state machine, ReLU activation and an argmax output stage. The RTL is verified bit-exactly against a Python reference model with cocotb.

## Plan

- Architecture and block diagram
- RTL for the MAC datapath, control and activation
- Bit-exact verification against the Python model
- Running on a low-cost FPGA board
- Comparing variants (weight bit-width, serial vs. parallel MAC) on area, timing and accuracy before a Tiny Tapeout submission

This page is updated as each stage is completed; changes are listed in the revision history below.
