---
title: My custom tool that makes college easier
date: 2025-06-06
---

Since I switched to Linux I have been looking for ways to be more productive as a student.

I found a post written by Gilles Castel that explained his awesome way of making notes using Latex and Python scripts.

> Read the original post on [Gilles' website](https://castel.dev/post/lecture-notes-3).

My tool is written in Bash. You can check out the code on [Github](https://github.com/niceduckdev/setup-for-college).

# How does it work?

The structure of my `school` directory is as following.

```sh
school (main) -> tree
.
├── course -> /home/kaj/school/semester/course-1
├── semester -> /home/kaj/school/semester-1
└── semester-1
```

`course` and `semester` are both symlinks to the current course or semester that I selected using `./school.sh courses` and `./school.sh semesters`.

# Keybindings

All of my keybindings are managed by the sxhkd keyboard daemon. I use rofi to show the output of my tool.

```sh
super + s
    rofi -modi 'semesters:school-setup semesters' \
    -show semesters -p '' \
    -theme-str 'prompt \{ enabled: false; \}'
```

```sh
super + c
	rofi -modi 'courses:school-setup courses' \
    -show courses -p '' \
    -theme-str 'prompt \{ enabled: false; \}'
```

I also created keybindings for opening a terminal or file manager in the current course directory.

```sh
super + o
	pcmanfm /home/kaj/school/course
```

```sh
super + p
	alacritty --working-directory /home/kaj/school/course
```
