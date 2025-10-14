---
title: My custom tool that makes college easier
date: 2025-06-06
---

Since I switched to Linux I have been looking for ways to be more productive as a student. I found a post written by Gilles Castel that explained his awesome way of making notes using Latex and Python scripts.

> Read the original post on [Gilles' website](https://castel.dev/post/lecture-notes-3).

The previous version of this tool was written in [Rust](https://rustlang.org). I recently rewrote it using [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

> You can check out the code on [Github](https://github.com/niceduckdev/school-setup).

The tool reads through a base directory that is filled with semesters or periods.
When executing the `school-setup semesters` command you can expect something that looks like this.
- `semester-1`
- `semester-2`
- `period-1`
- `period-2`
- `period-3`

You can select a period or semester by executing the `school-setup semesters <semester>` command.

This behaviour is copied for courses, a list is shown when executing `school-setup courses` and a course can be selected with the `school-setup courses <course>` command.

All of my keybindings are managed by the *sxhkd* keyboard daemon. I use *rofi* to show the output of my tool.

I also created keybindings for opening a terminal or file manager in the current course directory.

```sh
# show semesters
super + s
    rofi -modi 'semesters:school-setup semesters' -show semesters -p '' -theme-str 'prompt \{ enabled: false; \}'

# show courses in current semester
super + c
	rofi -modi 'courses:school-setup courses' -show courses -p '' -theme-str 'prompt \{ enabled: false; \}'

# show current course in file manager
super + o
	pcmanfm /home/kaj/school/course

# show current course in terminal
super + p
	alacritty --working-directory /home/kaj/school/course
```