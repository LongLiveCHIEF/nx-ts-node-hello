So here's something that should be a simple challenge:

### NX Typescript server challenge

**Rules:**

- in a typescript preset workspace 
- create a simple "hello world" application executed by node
- written in typescript
- must not use the `run-commands` executor for the `serve` task
- must use `@nx/js:tsc` to compile (doesn't matter if it's inferred in the `nx.json`or explicitly configured in the projects' targets)
- must not use `esbuild` or any other bundler
- must not use express/next/any node server side framework
- node application project must restart when a change is made to its source code

**Alternative to starting from scratch**

Use this project as a starter, and convert the two nx projects into a single project, abiding by the limitations in the rules above.

https://github.com/LongLiveCHIEF/nx-ts-node-hello

### Purpose

What I'm trying to do here is bring awareness to what I believe is a missing fundamental in the NX js/node building blocks.

This simple exercise is designed to simulate within an NX project, the typical "Hello World" day 1 beginner path of learning typescript and node, where you would:

- write a `index.ts` file, 
- run `tsc index.ts`, 
- run `node index.js`

A while back @philipjfulcher posted a blog post about managing TypeScript monorepo's the right way, along with an excellent YouTube walkthrough.

The applications he created though were solely for the web.

### Justification

Ever since then, I've had engineers trying to do this for applications for the _server_.

You would _think_ that it would be a simple matter to use _just_ the TypeScript compiler with Typescript configs and run that with node. 

However, I've found that it is essentially impossible to create a simple Hello World typescript server in nx, using the existing `nx/js` and `nx/node` plugins, without having to resort to using `run-commands`, or splitting up the application into a library and an application.

In the latter case, the task pipeline for `serve` in the application doesn't work well when changing the source code in the library project.

### Reward

If anyone can beat this challenge without having a Pull Request accepted in upstream NX, I will donate `$50 USD to the Open Source Software project of your choosing`.

First person to submit a challenge proof via NX discord or Merge Request on this project
claims the reward.  Your merge request or message should indicate the project
you want the donation to go to.