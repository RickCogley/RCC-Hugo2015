---
title: Resetting a Crashed OS X Menubar, Finder, Dock or Notifications System
subtitle: killall -KILL, baby
slug: resetting-os-x-menubar-finder-notifications-or-dock
publishdate: 2013-05-22T12:33:19+09:00
date: 2016-02-18T23:22:00+09:00
banner: /img/Cogley-Banner-Green-LEDs-1170x350-004-mono.jpg
images:
  - /img/Cogley-Post-Mac-Force-Quit-Finder.png
  - /img/Cogley-Banner-Green-LEDs-1170x350-004-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
description: OS X Menubar, Notification Center, Dock or Finder crashed? Read this post by Rick Cogley on how to reset each from the Terminal.
topics: [Software, Tips, SysAdmin]
tags: [OS X, osx, hung, crashed, menubar, notifications, killall, dock, finder, apple, 10.8, 10.9, 10.10, 10.11, 2016]
draft: "false"
aliases:
  - /articles/2013/05/22/resetting-os-x-menubar/
  - /post/resetting-os-x-menubar-finder-or-dock/
postsummary: Has your Mac OS X menubar, Dock, Finder or notifications system crashed? These very simple Terminal commands let you restart each, tested OK from OS X version 10.8.3 through 10.11.3 as of 18 Feb 2016.
postsvg: icon-origami-butterfly
---

Has your Mac OS X menubar, Dock, Finder or notifications system crashed? These very simple Terminal commands let you restart each, tested OK from OS X version 10.8.3 through 10.11.3 as of 18 Feb 2016.

<!--more-->

## What to do when OSX's Menubar, Finder or Dock Crashes

If you find yourself with a hung Mac Notifications system, Menu-bar, Finder or Dock, just start up Terminal (hint: just type "Terminal" in Spotlight and press Enter), and issue the appropriate command.

### Notifications System restart

{{< prism bash command-line >}}killall -KILL NotificationCenter
{{< /prism >}}

### Menubar restart

{{< prism bash command-line >}}killall -KILL SystemUIServer
{{< /prism >}}

### Dock or Spaces restart

{{< prism bash command-line >}}killall -KILL Dock
{{< /prism >}}

### Finder restart

{{< prism bash command-line >}}killall -KILL Finder
{{< /prism >}}

... or, _Ctrl-Option-Click_ the Finder icon in the Dock.

{{< figure1 link="/img/Cogley-Post-Mac-Force-Quit-Finder.png" src="/img/Cogley-Post-Mac-Force-Quit-Finder.png" type="Screenshot" title="You can also use the GUI to force quit applications" class="" >}}

### Or, try the GUI method

You can also try the GUI method for applications including the Finder. It does not work for the menubar or dock. Press `control-option-escape` to bring up the "force quit" window.

So try these methods if you're running OS X and find yourself with a crashed Finder, Dock or Menubar, so you can get started again quickly without a reboot.

## Updates

* _18 Feb 2016_ - discovered the method for restarting Notification Center, and so I re-tested them all in OS X El Capitan. All still work fine.
* _1 May 2015_ - original post referred to osx 10.8.3, and it's confirmed to work in 10.10.3.
