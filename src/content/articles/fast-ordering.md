---
title: Fast Ordering
description: An ordering application built for Chiro Stam.
tags: ["vue", "pocketbase"]
image: chiro-stam.webp
date: 2026-03-05
hidden: true
---

Every year, Chiro Stam hosts an event where members and their families can come together to enjoy a delicious spaghetti bolognese.

This event has been a tradition for about 15 years. Reservations were handled through a Google Form and orders were managed on paper using a rather complicated (and manual) system.

When I got the opportunity to organise one of these events I immediately saw the possibilities of a digital ordering system.

I started planning an application built with Vue (frontend), Go (backend), PostgreSQL (database) and Keycloak (IDP). I had never used the Go language before so I saw this as a great learning exercise. I got pretty far before realizing that I was overcomplicating the task.

I started from scratch and decided to use Pocketbase. This was the right choice as it included an SQLite database, authentication and the possibility of extending the program (with Go).

Pocketbase is insanely easy to use, extend and deploy. It ended up being a great choice for this project. I ended up deploying the backend on a Hetzner VPS and the frontend on Cloudflare Workers.

My plan is to clean up the codebase and open-source the entire project.
