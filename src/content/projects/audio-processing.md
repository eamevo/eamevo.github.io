---
title: "Audio Processing & Filtering System"
summary: "End-to-end analog audio signal chain with real-time signal processing in C"
tags: ["C", "Arduino", "Analog Circuits", "Signal Processing", "MAX4466", "LM386"]
date: 2025-07-01
order: 4
---

## Overview

A self-directed project I started because I wanted to understand audio hardware on a more full scale: not just the code, but the actual physics of getting sound from a microphone to a speaker and doing something useful with it along the way.

I built a full analog signal chain: MAX4466 electret microphone, LM386 audio amplifier, coupling capacitors, and an 8-ohm speaker. Then I connected the mic to an Arduino to digitize the signal and do real-time processing in C.

## Technical Details

**Analog Signal Chain**
- **MAX4466** electret mic module — outputs a small AC audio signal riding on a DC bias
- **Coupling capacitor** — strips the DC component, passes only the audio AC signal
- **LM386** audio amplifier — amplifies the signal to speaker-driving levels
- **Gain tuning** — adjustable via capacitor between pins 1 and 8 on the LM386
- **Bypass capacitor** on the LM386 supply pin to reduce noise and ripple
- **8-ohm speaker** output with real-time audio passthrough

Getting clean audio passthrough required understanding each stage. The LM386 clips badly if the input is too hot. The DC bias on the mic output will saturate the amp if you don't block it. Every coupling cap and bypass cap is doing a specific job.

**Signal Processing in C (Arduino)**
Once audio was flowing, I added processing on the Arduino side reading raw ADC samples (0-1023):

- **RMS volume estimation** — root mean square over a rolling window gives a perceptually accurate loudness reading
- **10-sample moving averager** — smooths out noisy raw ADC readings before processing
- **Clap detection** — detects sudden large spikes in peak-to-peak amplitude, threshold-based transient detection

**What's Next**
Planning to add RL, RC, and LC analog filters to shape the frequency response, and pitch detection via FFT to drive LED color mapping.

## What I Learned

Building a signal chain from scratch made abstract concepts concrete in a way that lecture never quite does. I understood coupling capacitors on paper. I understood them differently after hearing my audio go flat and DC-saturated and having to figure out why.

The gap between "the mic outputs audio" and "clean audio reaches the speaker" is filled with a dozen small decisions such as biasing, gain, noise, impedance matching. Each one is invisible until you get it wrong.

The software side reinforced something I've been noticing across projects, which is that raw sensor data is almost never ideal. The moving averager exists because analogRead on an Arduino is noisy enough to make direct RMS calculations meaningless. Signal processing starts before the interesting algorithms.
