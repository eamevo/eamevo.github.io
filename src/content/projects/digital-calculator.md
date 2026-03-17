---
title: "Digital Calculator System"
summary: "32-bit ripple-carry adder with FSM controller, verified across 1000+ test cases"
tags: ["SystemVerilog", "RTL", "FSM", "Cadence Xcelium", "Synopsys Verdi", "Verisium"]
date: 2025-08-24
order: 2
---

## Overview

A complete 32-bit digital calculator implemented in SystemVerilog, designed from the ground up as a full RTL system. It is a coordinated machine with memory, arithmetic logic, and sequencing all working together.

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

This project was my first experience digitally designing a full system rather than individual components. Digital design is really about control flow deciding when things happen is just as important as deciding what happens.

The verification side was eye-opening too. With physical circuits, we validate through lab tools and also our human senses. If an LED doesn't turn on, you know there's a problem. For digital design work, we build  test infrastructure to catch edge cases. Using Verdi to chase down failing waveforms gave me a taste of how professional debug workflows. We're not just reading code, we're comparing performance to time and cycles.

At some point I would like to revisit this and achieve higher verfiication coverage by learning UVM.