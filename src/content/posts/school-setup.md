---
title: Setup for college
image: setup-for-college.webp
date: 2025-04-02
---

This tool was inspired by [Gilles Castel's tool](https://castel.dev/post/lecture-notes-3).

When I read Gilles' blog post about his tool to structure his notes I was immediately inspired to *try* to create my own.

Gilles wrote his tool using Python, I saw this as the perfect opportunity to learn Rust.

You can check out my code on [Github](https://github.com/niceduckdev/setup).

I use [Rofi](https://github.com/davatorium/rofi) to show the output of my tool.

My keybindings are managed by [SXHKD](https://github.com/baskerville/sxhkd)

`super + s  rofi -modi 'semesters:school-setup semesters' -show semesters -p '' -theme-str 'prompt \{ enabled: false; \}'`

`super + c  rofi -modi 'courses:school-setup courses' -show courses -p '' -theme-str 'prompt \{ enabled: false; \}'`

I also have keybindings to open up my file manager and terminal.

`super + o	pcmanfm /home/kaj/school/course`

`super + p	alacritty --working-directory /home/kaj/school/course`
