---
title: "2035le"
summary: "Wordle on an Mbed microcontroller with a custom uLCD interface and linked-list keyboard"
tags: ["C", "C++", "Mbed", "Embedded Systems", "uLCD", "Data Structures"]
date: 2024-12-01
order: 5
---

## Overview

ECE 2035 final project: a fully playable Wordle clone running on an Mbed microcontroller, with all the game logic, interface, and input handling implemented in embedded C. The word bank uses vocabulary from ECE 2035 itself, which made it feel very on-brand.

Input is handled through a 5-way tactile nav switch and push buttons. The display is a uLCD screen. No OS or librariers, just bare-metal C and careful memory management.

## Technical Details

**Hardware**
- Mbed LPC1768 microcontroller
- uLCD-144-G2 display for all graphics
- 5-way tactile nav switch for letter navigation and selection
- Push button for delete

**Game Features**
- 30+ word dictionary stored and managed in a linked list
- Nav switch scrolls through the alphabet to select letters
- Center button confirms letter selection
- Push button deletes the last letter
- Row-by-row guess display with color feedback (correct letter, wrong position, not in word)
- Hint system after 5 incorrect guesses
- Win and game over screens
- Animated fireworks on win
- Custom word entry mode
- 10+ sprite animations
- Autoscrolling keyboard display

**Linked List Keyboard**
The keyboard is implemented as a linked list of letter nodes — navigating left and right traverses the list, and selecting removes confirmed wrong letters from the structure so they can't be reselected. This mirrors the original Wordle behavior of graying out eliminated letters.

## What I Learned

This was one of the most satisfying projects I've done because the constraints were so tight and the result was so tangible. Every byte mattered. Every display call had a cost. You couldn't be sloppy.

The linked list keyboard felt like overkill at first but ended up being very important. The game logic for removing eliminated letters mapped easily to list node deletion, and traversal was intuitive to implement. I'm not a CS student, so this as my first exposure to Data Structures and their usefulness.

It also made me appreciate how much work goes into even simple interfaces when you're doing it at the hardware level. Every pixel on that uLCD is a deliberate call someone had to set up.
