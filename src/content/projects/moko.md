---
title: Moko
description: Online platform for board games with multiplayer support. Made in my third year at KdG
image: moko/moko.webp
date: 2026-01-08
---

> This project was an assignment of the Integration Project 3 course. All students were split up based on their major (Developers, AI and Deployment / DevOps). This meant that we had to communicate with external teams for the first time during our Bachelor's Degree.

Our goal was to create a platform where users could buy digital board games, play them with friends, and build a community without jumping between different services.

# Core Features
> **Store & Library Management**<br>
> Browse and purchase (integration with a payment service) digital board games + manage your personal library

> **Social Features**<br>
> Manage your profile (show achievements, favourites and statistics) + Connect with friends

> **Multiplayer Features**<br>
> Create a lobby and invite friends + Play digital board games together or against an AI

> **Communication**<br>
> Chat with friends or with an AI to ask for information about the platform + Chat while you are sitting in the lobby or playing a game + See and manage your notifications

> **Games**<br>
> Play Tic Tac Toe, Checkers and an external Chess prototype using a translation layer

# Architecture
Having used microservices in a previous course, we decided that this architecture was the ideal choice for Moko's complexity and scale. This choice had several advantages.
- Independent development (two teams working on different parts of the platform)
- Scalability (horizontal scaling for specific services if needed)

We created a detailed plan of the different microservices and how they would communicate with each other.

![Overview of architecture](/images/projects/moko/architecture.webp)

We implemented all of the real-time features (Lobby, Chat and Notifications) using websockets instead of just polling for new data every X seconds. We ended up creating a gateway service that passed messages throughout the entire architecture.

# Frontend
The frontend of Moko was written in React using Tailwind, Zustand and Axios.
We began the design process by experimenting in Figma before beginning to write code.

![Mockup of Profile Page](/images/projects/moko/profile-mockup.webp)
*Profile page mockup showcasing achievements, stats, and social features*

These were our core principles while working on the frontend for Moko.
- User-centric navigation
- Consistent design choices and visual language
- Responsive design
- Modern design

We ended up using the "Package by feature" project structure and writing an entire custom component library. We also split up the data fetching and UI state by using separate services.

```sh
src (main) -> tree -L 2
.
├── app.tsx
├── components
│   ├── buttons
│   ├── cards
│   ├── chat
│   ├── dialog
│   ├── global
│   ├── icons
│   ├── inputs
│   ├── layout
│   ├── links
│   ├── navigation
│   ├── section.tsx
│   ├── state
│   ├── statistic.tsx
│   ├── tabs
│   └── text
├── config.ts
├── features
│   ├── cart
│   ├── chat
│   ├── checkout
│   ├── friends
│   ├── games
│   ├── library
│   ├── lobby
│   ├── not-found.tsx
│   ├── notifications
│   ├── profiles
│   └── store
├── lib
│   ├── api-client.ts
│   ├── format.ts
│   ├── id.ts
│   ├── polling.ts
│   └── socket-client.ts
├── main.tsx
├── stores
│   ├── auth-store.ts
│   └── socket-store.ts
├── styles.css
```

# Testing and Local Development
We also had around 90% test coverage, made up by unit- and integration tests.

We ran into a couple of issues while running our backend locally. While the microservice architecture gave us a lot of freedom, it also required a lot of IDEs and JVMs to be running while testing our application. My laptop has 32GB of RAM and had a lot of difficulties running the entire architecture.

Our solution was to create a local Docker environment specifically for development. This made it possible to run all of the backend services except one via docker (no IDE so lower system usage) and have them communicate via the `host.docker.internal` address.

# Conclusion
I ended up learning a ton about large scale projects.
- Microservice architecture was the **right choice**
- By starting with designing a detailed plan we gave ourself a headstart (for the **backend and the frontend**)
- Communication with external teams (AI Team and DevOps Team) could be better
- Docker is a must-have for this architecture

The feedback that we got from our tutors was really positive, they appreciated the time we spent specifying and following our code conventions, designing the architecture and writing clean code.

> *Pssst*
>
> When a user creates a new profile, they automatically get a random picture from the best API the world has ever seen. [Click here](https://thecatapi.com/) for more information.

# Showcase
You can check out the following demo video for a showcase of our platform.

<iframe height="315" class="rounded-md border-4" src="https://www.youtube.com/embed/cTVb87V25zY?si=hOp5FZPEUvFjKMmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![Store Page](/images/projects/moko/store.webp)
*Store Page showing Tic Tac Toe and Checkers*

![Friends Page](/images/projects/moko/friends.webp)
*Friends Page with a fun cat picture*

![Tic Tac Toe](/images/projects/moko/tic-tac-toe.webp)
*Playing Tic Tac Toe against another user*
