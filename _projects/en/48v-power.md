---
title: "48 V data center power, at bench scale"
summary: "A small-scale model of the 48 V power architecture used to feed AI hardware in data centers."
doc: KFO-002
rev: A
updated: 2026-11-13
year: 2026
status: planned
type: electronics
ref: 48v-power
order: 3
stack:
  Topic: [Power distribution, DC-DC conversion]
  Measurement: [Efficiency, losses]
revisions:
  - { rev: A, date: 2026-11-13, note: "Project page and plan" }
---

## Problem

AI hardware draws a lot of power in a small space, and delivering that power efficiently is becoming a limit of its own. Data centers are moving from 12 V to 48 V distribution: for the same power, four times the voltage means a quarter of the current, and conduction losses (I²R) drop by a factor of sixteen.

## Approach

A small bench model of the chain: a 48 V bus, a converter that steps it down for the load, and careful measurements of efficiency and losses at each stage.

## Plan

- Literature notes on 48 V architectures
- Converter selection and schematic
- Building and measuring at bench scale

This project starts after the first stages of the AI accelerator.
