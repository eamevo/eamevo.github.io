---
title: "Current-Starved Ring Oscillator"
summary: "5-stage AMS oscillator in Cadence Virtuoso on Sky130 130nm PDK, meeting full specs across 0-70°C"
tags: ["Cadence Virtuoso", "Sky130", "AMS Design", "Analog", "Mixed-Signal", "Process Corners"]
date: 2026-03-08
order: 1
---

## Overview

I designed and simulated a 5-stage current-starved ring oscillator in Cadence Virtuoso using the Sky130 130nm open-source PDK. The target: 450-550 MHz oscillation frequency, under 500 µW power consumption, and rise/fall times under 200 ps, all held across a 0-70°C operating temperature range.

## Technical Details

**Circuit Architecture**
A current-starved ring oscillator controls oscillation frequency by limiting the current available to charge and discharge each inverter stage. Each stage is a current-starved inverter made of 4 transistors:
- PMOS bias transistor (current limiting, top)
- PMOS inverter transistor
- NMOS inverter transistor
- NMOS bias transistor (current limiting, bottom)

(will insert schematic images later)

The bias transistors are controlled by a shared bias voltage, setting the current budget for the whole ring.

**The Temperature Problem**
My initial design met specs at 27°C but drifted badly with temperature. There was about 260 MHz of frequency variation across the 0-70°C range, which blew the spec window entirely. The root cause was that fixed DC bias voltages don't track temperature. As the chip heats up, transistor threshold voltages shift, changing the effective current through each stage, which changes the propagation delay, which changes the frequency.

**The Fix: Diode-Connected Bias Generator**
I replaced the fixed DC bias sources with a bias generator circuit using a diode-connected PMOS and NMOS around an ideal current source. Because the bias voltages now come from transistors operating in the same thermal environment as the ring, they track temperature in a way that partially compensates for the threshold voltage shifts. This brought the frequency variation down to about 96 MHz across the full range within spec.

**Simulations**
- Transient simulation to verify oscillation and measure frequency, rise/fall times
- Parametric temperature sweep from 0°C to 70°C
- Process corner simulations: fast-fast (ff), slow-slow (ss), and typical (tt)

**Results at tt corner, 27°C**
- Frequency: ~487 MHz
- Power: 141-167 µW across temperature
- Rise/fall times: ~186-193 ps
- Duty cycle: 50-57%

## What I Learned

This was my first real analog design project and it changed how I think about simulation. In digital design, there is no consideration for real-life effects until physical design, which I am not involved in. In analog, the whole job is making it work everywhere across process variation, temperature, and voltage. Those aren't edge cases, they are the spec to be tested against.

The temperature fix was also my first experience with self-referencing circuits. The bias generator doesn't eliminate temperature dependence.It just makes the oscillator and the bias source vary together in a way that partially cancels. I still don't fully understand the physics of it, but plan to do more AMS projects and learn through that!

I still have layout, DRC, and LVS to complete.
