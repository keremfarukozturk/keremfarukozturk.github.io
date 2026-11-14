---
title: "48 V → 12 V intermediate bus converter"
summary: "A small-scale, measurement-verified model of the last intermediate power stage that feeds AI hardware in a data center rack."
doc: KFO-002
rev: B
updated: 2026-11-14
year: 2027
status: planned
type: electronics
ref: 48v-power
order: 3
stack:
  Topic: [Power distribution, DC-DC conversion, digital control]
  Measurement: [Efficiency, load-step response, loop gain]
revisions:
  - { rev: B, date: 2026-11-14, note: "Scope narrowed to a 48 V → 12 V intermediate bus converter; plan updated" }
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

AI hardware draws a lot of power in a small space, and delivering that power efficiently is becoming a limit of its own. For the same power, four times the voltage means a quarter of the current, and conduction losses (I²R) drop to a sixteenth. That is why distribution voltages keep rising: while rack inputs move to DC at up to 800 V, the intermediate stage that steps 48 V down to 12 V is set to remain inside many racks in the near term.

## Approach

A bench-scale model of this intermediate stage: a synchronous buck converter controlled by a microcontroller. The first board is 24 V → 5 V, followed by 48 V → 12 V. At every stage, measurements are compared against simulation.

## Plan

- Reading notes on 48 V architectures
- LTspice simulation and schematic
- First 24 V → 5 V board and digital control loop
- Bench measurements compared against simulation
- 48 V → 12 V version

This project runs after the first stages of the AI accelerator.
