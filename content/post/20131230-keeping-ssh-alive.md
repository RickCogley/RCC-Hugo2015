---
title: "Mac OS X Terminal ssh Connection Keepalive"
subtitle: Don't let ssh kick ya
slug: mac-osx-terminal-ssh-connection-keepalive
publishdate: 2013-12-14T19:33:19+09:00
date: 2013-12-30T15:33:19+09:00
banner: /img/Cogley-Banner-JR-Totsuka-Bridge-2-mono.jpg
images:
  - /img/Cogley-Banner-JR-Totsuka-Bridge-2-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
description: A post on how to keep ssh sessions alive in Mac OS X Terminal, by Rick Cogley.
topics: [Troubleshooting, Software, SysAdmin, Tips]
tags: [osx,mac,sysadmin,ssh,session,keepalive,openssh]
draft: "false"
aliases:
  - /articles/2013/12/14/keeping-ssh-alive/
postsummary: I was getting unceremoniously booted off ssh connections to Webfaction, in Mac OS X. Here's what I did to fix it.
postsvg: icon-origami-fish
---

I was getting unceremoniously booted off ssh connections to Webfaction, in Mac OS X. Here's what I did to fix it.

<!--more-->

If you do any system admin work at all, you'll know this problem: the host you connected to via ssh has disconnected you with a "broken pipe" message. It could be that you left the session open, or that you moved from one network to another, messing with the NAT connection, restarted your system, or various other reasons.

## So How Do You Fix a Disconnecting ssh?

The fix is simple. You just add some keepalive packet settings to your _local_ ssh's config file, located in ``~/.ssh/config``.

~~~bash
Host *
    ServerAliveInterval 30
    ServerAliveCountMax 2
~~~

After I added this and reconnected, problem solved. Hope this helps someone.
