---
title: Start your blog?
date: 2022-08-25
published: true
tags: ["dev"]
series: false
canonical_url: false
description: "Why I did start my blog site and how."
---

_Everything we do should start with the question **why** before **how**._

### This is the why

I have been reading other peoples' blogs for a long time. The thought of
having one from my own was always at the back of my head. But I wasn't
finding a good reason to do so.

Finally I could figure out the reasons:

- Writing helps you think. It forces you to focus on one particular thing.
- I wanted to keep track of things I learn and experience.
- And share those with others; hoping that would benefit them.

### And this is how

I had prior experience working with `ReactJs` and `GatsbyJs`. I wanted to explore
`VueJs` and therefore found out about `Gridsome`.

The steps forward are simple. [assuming you have node(v12) and npm(v6) installed]

#### 1. Install `Gridsome`

```bash
npm install --global @gridsome/cli
```

#### 2. Start the project with the gridsome blog starter

```bash
gridsome create my-blog https://github.com/gridsome/gridsome-starter-blog.git
cd my-blog
gridsome develop # to start local dev server at `http://localhost:8080`
```

And you are all set 🎉

Psst, It took more time to write this up than setting up the website.
