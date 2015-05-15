---
title: "Resetting a Crashed OS X Menubar, Finder or Dock"
slug: resetting-os-x-menubar-finder-or-dock
publishdate: 2013-05-22T12:33:19+09:00
date: 2015-01-12T09:33:19+09:00
author: Rick Cogley
authorlink: /about
authortwitter: https://twitter.com/rickcogley
banner: /img/Cogley-Banner-Green-LEDs-1170x350-004-mono.jpg
banneralt: Photo of JR Green Car Suica Lights, by Rick Cogley.
showauthor: "true"
showcomment: "true"
showdate: "true"
showpaging: "true"
showreadingtime: "true"
showsocialsharing: "true"
showtoc: "true"
showtotop: "true"
subtitle: killall -KILL, baby
images:
- /img/Cogley-Post-Mac-Force-Quit-Finder.png
- /img/Cogley-Banner-Green-LEDs-1170x350-004-mono.jpg
- /img/rick-cogley-avatar-240x240.png
description: OS X Menubar, Dock or Finder crashed? Read this post by Rick Cogley on how to reset it.
topics: [Software, Tips, SysAdmin]
tags: [OS X, osx, hung, crashed, menubar, killall, dock, finder, apple, 10.10, 2015]
draft: "false"
aliases:
- /articles/2013/05/22/resetting-os-x-menubar/
---

Has your OS X menubar, Dock or Finder crashed? These very simple Terminal commands should do the trick, at least in version 10.10.3 as of 1 May 2015.

<!--more--> 

## What to do when OSX's Menubar, Finder or Dock Crashes

If you find yourself with a hung Menu-bar, Finder or Dock, just start up Terminal (hint: just type "Terminal" in Spotlight and press Enter), and issue the appropriate command. 

### Menubar restart

~~~bash
myuser@myhost % killall -KILL SystemUIServer
~~~

### Dock or Spaces restart

~~~bash
myuser@myhost % killall -KILL Dock
~~~

### Finder restart

~~~bash
myuser@myhost % killall -KILL Finder
~~~

... or, _Ctrl-Option-Click_ the Finder icon in the Dock. 

<figure class="photo-inline-right">
<img class="photo400 pure-img" src="/img/Cogley-Post-Mac-Force-Quit-Finder.png" alt="Screenshot showing GUI version of force quit, accessible by command-option-esc.">
<figcaption><em>Screenshot</em>: You can also use the GUI to force quit applications</figcaption>
</figure>

### Or, try the GUI method

You can also try the GUI method for applications including the Finder. It does not work for the menubar or dock. Press `control-option-escape` to bring up the "force quit" window.

So try these methods if you're running OS X and find yourself with a crashed Finder, Dock or Menubar, so you can get started again quickly without a reboot. 

## Updates

* _1 May 2015_ - original post referred to osx 10.8.3, and it's confirmed to work in 10.10.3.

