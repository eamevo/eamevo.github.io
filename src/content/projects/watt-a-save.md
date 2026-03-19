---
title: "Watt-a-Save"
summary: "Sensor-driven HVAC and lighting automation system built with high school students at GT's CEISMC"
tags: ["Arduino", "C", "Embedded Systems", "DHT11", "PIR", "PWM", "Sensors", "Outreach"]
date: 2025-06-06
order: 6
---

## Overview

Watt-a-Save was a smart home energy automation system built as part of Georgia Tech's CEISMC CoSense outreach program. I led a team of high school students in ideating, designing, and building a sensor-driven system to automate home power usage cutting AC and lighting waste based on real environmental data. 

The system runs on an Arduino Uno and uses a DHT11 temperature/humidity sensor, a PIR motion sensor, an RGB LED (as the house's light), and a brushless fan acting as a miniature AC unit. Everything is automatic: the fan speed responds to temperature, the lights respond to motion, and neither wastes power when they don't need to be on.

## Technical Details

**Hardware**
- Arduino Uno as the main controller
- DHT11 temperature and humidity sensor (indoor readings)
- Second DHT11 for outdoor temperature reference
- PIR motion sensor for room occupancy detection
- Brushless fan for HVAC simulation, speed-controlled via PWM
- RGB LED as lighting output
- LCD display for real-time system status

**Fan Speed Control**
The fan speed is proportional to the difference between indoor and outdoor temperature. If the indoor temp is within 2 degrees of outdoor, the fan stays off. No point running AC when you could just open a window. As the gap grows, PWM duty cycle scales up, spinning the fan faster. This is a simple but physically motivated control strategy. As more cooling is needed, more power is applied.

**Motion-Triggered Lighting**
The PIR sensor detects room entry and exit. Lights turn on when someone enters, off when they leave. No manual switching, no lights left on in empty rooms. The student's end user is a single college student living alone, so everytime the PIR sensor detects someone, it is the same person going in or out of the room.

**Communication**
DHT11 uses a single-wire digital protocol for data transfer. The LCD communicates over I2C. The PIR sensor outputs a simple digital GPIO signal. PWM handles the fan motor.

## The Outreach Side

Leading high school students through an engineering project is a different challenge than building something yourself. You can't just do it for them because the point is that they understand what they're building and why.

I supported ideation, helped the team scope the project to something achievable, guided the hardware prototyping, and coached them through the final presentation to CEISMC staff. By the end, they could explain why the fan speed was proportional to temperature differential, not just that it was.

Watching a student go from "I don't know what a sensor is" to presenting a working automated system to an audience was exteemely satisfying as I love teaching!

## What I Learned

Constraints make you creative. The system had to be understandable to people with no engineering background, buildable in a short timeframe, and demonstrably useful. That combination forced simplicity in the right places. The control logic is straightforward, but it's physically motivated and it works.

I also learned that teaching is a form of verification. If I can't explain why something works, there's a gap somewhere. Either in their understanding or in how I explained it.
