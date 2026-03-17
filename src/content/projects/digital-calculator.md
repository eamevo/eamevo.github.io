---
title: "Digital Calculator System"
summary: "32-bit ripple-carry adder with FSM controller, verified across 1000+ test cases"
tags: ["SystemVerilog", "RTL", "FSM", "Cadence Xcelium", "Synopsys Verdi", "Verisium"]
date: 2025-08-24
order: 1
---

## Overview

A complete 32-bit digital calculator implemented in SystemVerilog, designed from the ground up as a full RTL system — not just an adder, but a coordinated machine with memory, arithmetic logic, and sequencing all working together.

The core is a 32-bit ripple-carry adder driven by an FSM-based controller that manages the full operation lifecycle: reading inputs, executing arithmetic, writing results to memory, and buffering outputs. The design was verified using industry-standard EDA tools across 1000+ test cases.

## Technical Details

**Architecture**
- 32-bit ripple-carry adder as the arithmetic core
- FSM controller handling state transitions across input, compute, and output phases
- Integrated memory for operand storage and result buffering
- Clean separation between datapath and control logic

**Verification**
- 1000+ directed and randomized test cases
- Cadence Xcelium for simulation and functional verification
- Synopsys Verdi for waveform analysis and signal tracing
- Verisium for coverage collection and analysis
- Verified timing constraints and functional correctness across all test scenarios

## What I Learned

This project was my first real exposure to thinking about hardware as a *system* rather than individual components. Writing the FSM made me realize how much of digital design is really about control flow — deciding *when* things happen is just as important as deciding *what* happens.

The verification side was eye-opening too. It's one thing to simulate a circuit and see it work. It's another to build a test infrastructure that can catch edge cases you didn't anticipate. Using Verdi to chase down failing waveforms taught me how professional debug workflows actually feel — you're not just reading code, you're reading time.

If I revisited this, I'd push toward formal property checking rather than simulation coverage alone.
