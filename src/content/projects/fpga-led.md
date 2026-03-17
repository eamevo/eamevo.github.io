---
title: "FPGA LED Controller"
summary: "Gamma-corrected LED controller on DE10 FPGA with logarithmic LUT and team leadership"
tags: ["VHDL", "FPGA", "DE10", "Hardware Verification", "Team Leadership"]
date: 2025-04-15
order: 3
---

## Overview

A gamma-corrected LED controller peripheral designed for the DE10 FPGA board, built as a team project for ECE 2031 with me managing a 5-person group. The controller allows per-LED brightness control via a 16-bit register interface, with hardware gamma correction so the brightness feels visually natural rather than technically linear.

## Technical Details

**Hardware Design**
- 10-bit LED selection mask for addressing individual LEDs
- 6-bit brightness control per LED via 16-bit register interface
- Logarithmic lookup table (LUT) implementing gamma correction
- Full FPGA peripheral integration with SCOMP instruction interfacing

**Why Gamma Correction**
Human brightness perception is logarithmic, not linear. As a result, a raw linear brightness value stepping from 0 to 63 evenly looks like most of the visible change happens at the low end, with the top half barely noticeable. The LUT maps linear input values to a logarithmic curve so the perceived brightness ramps feel smooth and even across the full range.

**Verification**
- Oscilloscope measurements to verify signal accuracy and timing
- Iterative simulation testing for visual response
- End-to-end integration testing on physical hardware

**Team**
Led a 5-person team: managed task delegation, set timelines, tracked progress, and coordinated integration of hardware and software components for on-time delivery.

## What I Learned

Leading a team on a hardware project is a different challenge than leading one on a software project. You can't just merge branches and run tests. Integration means actual wires and signals, and when something doesn't work, you have to figure out if the problem is in the logic, the timing, the physical connections, or someone's misunderstanding of the spec.

The gamma correction piece was my favorite part technically. It's a small thing but it made me think about how much of hardware design is really about the human on the other end. A technically correct output isn't always a good output.
