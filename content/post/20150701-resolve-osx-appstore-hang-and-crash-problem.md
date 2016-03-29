---
title: Resolve Mac OS X AppStore Hanging and Crashing Problem
subtitle: ...by deleting the Apple Appstore Cache
slug: resolve-osx-appstore-hang-and-crash-problem
banner: /img/Cogley-Banner-Daibutsu-Shop-mono.jpg
date: 2015-07-01T03:48:40.000Z
publishdate: 2015-07-01T03:48:40.000Z
description: 'If your AppStore in OS X is hanging or crashing, resolve it this way, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-AppStore-Crash.png
  - /img/Cogley-Banner-Daibutsu-Shop-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - osx
  - mac
  - AppStore
  - crash
  - bug
  - hang
  - 10.10.4
  - Yosemite
  - cache
  - frozen
topics:
  - Software
  - Tips
  - Troubleshooting
postsummary: I hope Apple pours some of their riches into better Software QA some day, but if you are attempting to update to Mac OS X Yosemite 10.10.4 and your AppStore is crashing and hanging, here is how to fix it.
postsvg: icon-origami-butterfly
---

I hope Apple pours some of their riches into better Software QA some day, but if you are attempting to update to Mac OS X Yosemite 10.10.4 and your AppStore is crashing and hanging, here is how to fix it.

<!--more-->

## The Problem

You're just going along minding your own business, trying to update to the latest shiny release of Apple OS X (10.10.4 in this case), and alas, the only vehicle to do this is Apple's AppStore. But it's crashing. Left and right.

Of course it is possible that Apple's servers are simply slammed right now, but this is a gigantic company that can afford bandwidth. In the case of updating to OS X 10.10.4, it appears to be some battle between the AppStore servers themselves and the AppStore app on your Mac.

What we observe is the AppStore app showing a spinning beachball "forever", even between force quitting and restoring the AppStore app. When you click on the "Update" buttons, nothing happens. It just hangs.

## How to Fix a Frozen App Store

<figure class="photo-inline-right">
  <img class="photo400 pure-img" src="/img/Cogley-Post-AppStore-Crash.png" alt="Screenshot showing Activity Monitor Quit Dialog">
  <figcaption><em>Screenshot</em>: Using Activity Monitor to Force Quit</figcaption>
</figure>

You can fix this by deleting AppStore's cache. Here's how:

### Force quit AppStore

By whatever means, force quit AppStore. The screenshot above shows using Activity Monitor to do it, but you can also do it via Terminal, or by pressing and holding the icon in the Dock while pressing the Opt key, then using the popup menu's "Force Quit" command.

### Kill the "softwareupdated" process

Open Activity Monitor, find the "softwareupdated" process and kill it. The convenient search function makes it easy to find.

### Delete the AppStore app's cache

Next delete the AppStore's cache. You need to use Terminal to find it, so, open Terminal, then do:

~~~bash
me@mymac:~ open $TMPDIR../C/
~~~

That will open a Finder window with the correct folder displayed.

Find ``com.apple.appstore`` in there and delete it. This is your AppStore cache, and the AppStore will simply re-create it, if it is not there when it starts up.

### Empty the Trash

Empty the trash in the usual way.

### Open AppStore and Try again

Finally you can open AppStore and it will probably work now. I had to re-do these steps once, but the second time around it worked. So, retry if it does not work the first time.

Good luck.
