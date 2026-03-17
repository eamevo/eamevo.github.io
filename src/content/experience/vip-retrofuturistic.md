---
title: "Retrofuturistic Hardware VIP"
role: "Student Researcher"
organization: "Georgia Tech VIP Program"
location: "Atlanta, GA"
startDate: "Jan 2026"
endDate: "Present"
tags: ["XMOS", "6502", "65c816", "DSP", "I2S", "Audio", "Embedded", "Assembly"]
type: "research"
order: 2
image: ""
links: []
---

## About

A Vertically Integrated Projects (VIP) research program at Georgia Tech under Dr. Aaron Lanterman. The focus is on the intersection of retro computing architectures and modern multicore microcontrollers, exploring how old ideas in hardware design hold up (or don't) against contemporary constraints.

## What I'm Working On

**XMOS Audio DSP**
I've been working with XMOS multicore microcontrollers: programmable chips designed for deterministic real-time processing using hardware threads. I implemented an I2S audio loopback and layered in digital signal processing: gain control, square-wave muting, and amplitude modulation.

The most educational part was figuring out what broke and why. Floating-point operations blew the real-time deadline at 48kHz. Each sample has about 20 microseconds of budget, and floats don't fit. Switching to integer arithmetic with bit-shifts solved it. AM modulation produced sidebands at unexpected frequencies (sum and difference components from multiplying two signals) which I'd seen in ECE 2026 but never heard before.

XMOS uses `par` constructs in XC (their C-based language) for hardware-level parallelism. There is no OS or scheduler, threads are mapped directly to hardware cores.

**6502 / 65c816 Architecture Study**
Alongside the XMOS work, I've been studying the 6502 and 65c816 processor architectures — the chips behind the Apple II, NES, SNES, and a lot of early personal computing. Learning assembly at this level is a different kind of thinking than writing C or HDL. Every instruction is a deliberate choice. Memory is a resource you budget, not assume.

The 65c816 extends the 6502 to 16-bit with a 24-bit address space while staying mostly backward compatible, which is a fascinating example of architectural evolution under constraint.
