---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
title: Update your fork directly on Github
subtitle: Avoid Terminal heartbreak (or not)
slug: update-your-forked-repository-directly-on-github
banner: /img/Cogley-Banner-Enoshima-Fuji-mono.jpg
banneralt: 'Photo of a stormy Enoshima and Mt Fuji, by Rick Cogley.'
date: 2015-06-07T08:11:40.000Z
publishdate: 2015-06-07T08:11:40.000Z
description: 'Avoid git entirely and update your fork right on github, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-git-fork-merge.svg
  - /img/Cogley-Banner-Enoshima-Fuji-mono.jpg
  - 'http://static.cogley.info/img/rick-cogley-avatar-240x240.png'
showauthor: 'true'
showcomment: 'true'
showdate: 'true'
showpaging: 'true'
showreadingtime: 'true'
showsocialsharing: 'true'
showtoc: 'true'
showtotop: 'true'
tags:
  - github
  - update
  - fork
  - pr
  - pull request
topics:
  - Software
  - Tips
---

It's possible to update a forked git repository using the Terminal or one of the many good GUIs for git, but did you know Github gives you a way to update a fork directly in its web interface?

<!--more-->

<figure class="photo-inline-right">
  <img class="photo400 pure-img" src="/img/Cogley-Post-git-fork-merge.svg" alt="Diagram showing git fork merge">
  <figcaption><em>Diagram</em>: git fork merge</figcaption>
</figure>

## How to Update a Fork in Github

1. Access your forked repository on Github.
1. Click "Pull Requests" on the right, then click the "New Pull Request" button.
1. Github first compares the base fork with yours, and will find nothing if you made no changes, so, click "switching the base", which will change your fork to the base, and the original to the head fork. Now you should see changes where your fork needs to play "catch up".
1. Click "Create Pull Request", give it a name, click "Send Pull Request".
1. Click "Merge Pull Request" and "Confirm Merge".

Assuming you had no changes, you can then merge automatically.

## Update a Local Fork at the Terminal

With a locally cloned repository, you can do the same with `git` in your CLI as follows. First change to your repository folder, then confirm:

~~~bash
git remote -v
~~~

Specify a remote _upstream_ repo to sync with your fork:

~~~bash
git remote add upstream https://github.com/OriginalOwner/OriginalProject.git
~~~

Verify:

~~~bash
git remote -v
~~~

Fetch branches and commits from the upstream repo. You'll be storing the commits to `master` in a local branch `upstream/master`:

~~~bash
git fetch upstream
~~~

Checkout your fork's local `master`, then merge changes from `upstream/master` into it.

~~~bash
git checkout master
git merge upstream/master
~~~

Push changes to update your fork on Github.
