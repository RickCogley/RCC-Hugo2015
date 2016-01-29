---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
title: Odd SSL Problem caused by Old Open Keychain
subtitle: ... on Apple OS X
slug: osx-sslhandshake-problem-from-an-open-keychain
banner: /img/Cogley-Banner-JR-Totsuka-Bridge-2-mono.jpg
banneralt: Photo of Totsuka near Totsukana, monochrome, cloudy, by Rick Cogley.
date: 2015-10-07T15:20:15+09:00
publishdate: 2015-10-07T15:20:15+09:00
description: 'An odd and esoteric problem with SSL, caused by an old open keychain, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-OSX-Keychain-Add.png
  - /img/Cogley-Banner-JR-Totsuka-Bridge-2-mono.jpg
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
  - ssl
  - sslhandshake
  - 10.11
  - El Capitan
  - Keychain
topics:
  - Software
  - Tips
  - Troubleshooting
  - Security
postsummary: I had a really odd problem, with SSL (``https://``) sites after having upgraded to _OS X El Capitan_. Chrome would not load SSL-protected websites (Safari was fine for the same ones), and then I got a blank screen in the Flowdock Mac app. By chance, I figured out how to fix it, and thought I would share what happened.
postsvg: icon-origami-fish
---

I had a really odd problem, with SSL (``https://``) sites after having upgraded to _OS X El Capitan_. Chrome would not load SSL-protected websites (Safari was fine for the same ones), and then I got a blank screen in the Flowdock Mac app. By chance, I figured out how to fix it, and thought I would share what happened.  

<!--more-->

<figure class="photo-inline-right">
  <a href="/img/Cogley-Post-OSX-Keychain-Add.png" title="" data-lightbox="set1" data-title="Adding a backup keychain in Keychain Access"><img class="photo300 pure-img" src="/img/Cogley-Post-OSX-Keychain-Add.png" alt="Screenshot showing the add keychain in OS X Keychain Access" ></a>
  <figcaption><em>Screenshot</em>: Adding a backup keychain</figcaption>
</figure>

During and after the upgrade to _OS X El Capitan_, I did all the typical things I do, like checking through all the settings to make sure nothing is out of order. One of those includes checking that Time is being automatically set from the local NTS time server, because a mis-set clock will often cause trouble related to encryption.  

## Problem Manifestation

I was getting those "this site is untrusted" errors in Chrome, oddly enough on major sites from Microsoft or Apple, since they certainly can afford to update their SSL certificates. Then I noticed that the [Flowdock](http://www.flowdock.com) Mac app would not display, just showing a grey, blank screen.

I looked at Console.app while following up with Flowdock support, and saw entries like:

~~~bash
10/6/15 5:42:03.505 PM Flowdock[3255]: Failed to connect (goToSettings) outlet from (AppDelegate) to (NSMenuItem): missing setter or instance variable
10/6/15 5:42:04.614 PM Flowdock[3255]: NSURLSession/NSURLConnection HTTP load failed (kCFStreamErrorDomainSSL, -9813)
~~~

... and ...

~~~bash
10/6/15 5:44:02.839 PM Flowdock[3259]: Sparkle Error (continued): The certificate for this server is invalid. You might be connecting to a server that is pretending to be “s3.amazonaws.com” which could put your confidential information at risk.
~~~

... and ...

~~~bash
10/6/15 5:55:39.447 PM Adobe Desktop Service[729]: CFNetwork SSLHandshake failed (-9807)
~~~

Researching a little, all of those errors have some relation to SSL and therefore security.

## Resolving the Problem

Since certificate errors can come from the system clock not being set correctly, or as often from a certificate itself being expired, I checked for cert expiration indicators in the Keychain Access app, and confirmed that the system clock was set correctly in System Preferences, Date & Time.

A few general notes:

* In general, use the "set date and time automatically" in System Preferences, Date & Time, to automatically pull the date and time from the time server, if at all possible.
* You can use the Keychain Access app (in ``/Applications/Utilities``) to set what certificates are trusted by default, to delete expired ones or to run "First Aid" on your keychain in case of corruption.
* You can safely delete the cache files ``crlcache.db`` and ``ocspcache.db`` in ``/var/db/crls/``. These contain a cache of your accepted certificates, and they will be re-created after a system restart.

In the end, I noticed that I had an old keychain added, from a backup of an old system. I had done this to retrieve some stored information, but had forgotten to remove it. When I removed the old keychain, _poof!_, the problems went away. I understand that OS X may have got "confused" by having two keychains open, since one was created on a separate system, with a different time set.

This problem was so esoteric and rare, but it's worth writing down, since the fix was not obvious. I hope the information helps someone, some day.  
