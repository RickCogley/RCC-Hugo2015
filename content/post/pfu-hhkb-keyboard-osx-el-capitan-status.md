---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
title: HHKB Keyboard Driver Status
subtitle: ... on OS X El Capitan 10.11
slug: pfu-hhkb-keyboard-osx-el-capitan-status
banner: /img/Cogley-Banner-Train-Romance-Car-1170x350-003-mono.jpg
banneralt: 'Photo of the Romance Car bound for Hakone, near Yoyogi Koen stop, by Rick Cogley.'
date: 2015-10-30T14:11:15+09:00
publishdate: 2015-10-06T15:20:15+09:00
description: 'Status of PFU Happy Hacking Keyboard HHKB Drivers on OS X El Capitan, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-PFU-HHKB-Pro-JP.jpg
  - /img/Cogley-Banner-Train-Romance-Car-1170x350-003-mono.jpg
  - 'http://static.cogley.info/img/rick-cogley-avatar-240x240.png'
showauthor: 'true'
showcomment: 'true'
showdate: 'true'
showpaging: 'true'
showreadingtime: 'true'
showsocialsharing: 'true'
showtoc: 'true'
showtotop: 'true'
lightbox: 'true'
tags:
  - osx
  - bug
  - HHKB
  - Keyboard
  - 10.11
  - El Capitan
  - PFU
  - driver
  - SIP
topics:
  - Software
  - Tips
  - Troubleshooting
---

If you jumped on the OS X El Capitan upgrade, and you are a user of the PFU HHKB "Happy Hacking" keyboard with its buttery smooth Topre switches, you might have noticed it does not work.

<!--more-->

## HHKB OS X El Capitan Status

I noticed that my HHKB's don't work, after upgrading to OS X El Capitan. I use the Type-S ones with the Japanese layout, and I imagine that due to the new "SIP" System Integrity Protection that Apple has implemented, the old drivers from 2012 are kaput. This is what Apple has to say about that new system:

> **System Integrity Protection** - A new security policy that applies to every running process, including privileged code and code that runs out of the sandbox. The policy extends additional protections to components on disk and at run-time, only allowing system binaries to be modified by the system installer and software updates. Code injection and runtime attachments to system binaries are no longer permitted.

<figure class="photo-inline-right">
  <a href="/img/Cogley-Post-PFU-HHKB-Pro-JP.jpg" title="" data-lightbox="set1" data-title="PFU HHKP Pro JP Type-S keyboard"><img class="photo300 pure-img" src="/img/Cogley-Post-PFU-HHKB-Pro-JP.jpg" alt="Photo showing a PFU HHKP Pro JP Type-S keyboard" ></a>
  <figcaption><em>Photo</em>: Rick's PFU HHKB Pro JP keyboard</figcaption>
</figure>

I speak Japanese so I contacted PFU, only to get some corporate double-speak in reply. After some back-and-forth in which I whined and brayed about the fact that I have to reach my paws all the way up to use my actual laptop keyboard (first world problem, huh?), PFU told me that they are "actively developing it, and expect to complete it soon." I hope that is true.

The tech pointed me at their [Japanese FAQ page](http://www.pfu.fujitsu.com/hhkeyboard/hhkb_support/faq_el_capitan.html), on which he says's they'll publish new info, once they are ready.

So stay tuned, folks.

## Update

### 30 Oct 2015

<figure class="photo-inline-right">
  <a href="/img/Cogley-Post-PFU-HHKB-fixed-on-El-Capitan-by-Seil-20151030.png" title="" data-lightbox="set1" data-title="Use Seil to Fix PFU HHKP Pro JP Type-S keyboard on El Capitan"><img class="photo300 pure-img" src="/img/Cogley-Post-PFU-HHKB-fixed-on-El-Capitan-by-Seil-20151030.png" alt="Photo showing the settings in Seil, to make a PFU HHKP Pro JP Type-S keyboard work in OS X El Capitan" ></a>
  <figcaption><em>Screenshot</em>: Seil Settings for HHKB in El Capitan</figcaption>
</figure>

I've followed up with PFU several times since this post, and although they now say they have a beta available, they won't let me test it. Whatever. I confirm you can fix it using [Seil](https://pqrs.org/osx/karabiner/seil.html.en), though. Just download Seil, mount its ``.dmg``, double click the installer and follow the prompts. Then just run it, and set the three checkboxes you can see in the screenshot. _Click to embiggen >>_.

### 20 Nov 2015

PFU states on their FAQ site that they should be able to release updated drivers for OS X El Capitan near the end of Nov 2015. 
