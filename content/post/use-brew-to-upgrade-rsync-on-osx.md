---
author: Rick Cogley
authorlink: /about
authortwitter: https://twitter.com/rickcogley
banner: /img/Cogley-Banner-JR_Totsuka_Near_Totsukana-Mono2.jpg
banneralt: Photo of Totsuka near Totsukana, monochrome, cloudy, by Rick Cogley. 
date: 2015-05-09T09:05:19+09:00
publishdate: 2015-05-08T12:33:19+09:00
description: The rsync that Apple provides in OS X Yosemite is out of date, but you can easily upgrade it using the homebrew package manager - a post by Rick Cogley.
draft: "false"
showauthor: "true"
showcomment: "true"
showdate: "true"
showpaging: "true"
showreadingtime: "true"
showsocialsharing: "true"
showtoc: "true"
showtotop: "true"
slug: upgrade-outdated-rsync-on-osx
subtitle: Homebrew to the rescue
tags:
- brew
- tap
- rsync
- homebrew
- upgrade
- osx
- mac
title: Old rsync on OS X?
topics:
- Tips
- SysAdmin
- Upgrades
news_keywords:
- brew
- tap
- rsync
- homebrew
- upgrade
- mac
- osx
images:
- /img/homebrew.png
- http://static.cogley.info/img/rick-cogley-avatar-900x900.jpg
- /img/Cogley-Banner-JR_Totsuka_Near_Totsukana-Mono2.jpg
videos:
- https://www.youtube.com/watch?v=WeON54DhMW4
---

The rsync that Apple provides in OS X Yosemite is out of date, as of May 2015. That Apple's packages are out-dated is nothing new, really, but readers might be pleased to know that you can easily upgrade it using the ``homebrew`` package manager. See below for how. 

<!--more-->

## Rsync is old, even in OS X Yosemite

Confirm your rsync version like this: 

~~~bash
rsync --version
~~~

You'll see that OSX provides version 2.2 or something like that, whereas rsync is at 3.1.1.

### How to upgrade rsync on OS X

{{< figure src="/img/homebrew.png" alt="Homebrew Logo" class="photo-inline-right pure-img"  >}} 

I myself have standardized on [homebrew](http://brew.sh "Homebrew or brew home page"), and upgrading could not be simpler. 

There's a repository for "[system duplicate formulae](https://github.com/Homebrew/homebrew-dupes)", or, formulae to install programs which are already provided in OS X by default, or, at least via installing X Code. 

To use one of these apps, you need to ``tap`` the repository, then do the install as normal. 

~~~bash
brew tap homebrew/dupes
brew install rsync
~~~

Or, you can do: 

~~~bash
brew install homebrew/dupes/rsync
~~~

## Use the new rsync

Now you can use the latest rsync, but before you do, restart terminal. Then test with the ``--version`` flag again, to confirm it worked.

## N.b.: Don't mix with other package managers

Package managers have a way of getting into each other's hair in the system. It's recommendable to have only one installed. 