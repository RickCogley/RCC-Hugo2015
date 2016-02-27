---
title: Fix Apple OS X Mail Crashing and Hanging
subtitle: ...by deleting Mail's Envelope Index
slug: fix-apple-osx-mail-crash-and-hang
banner: /img/Cogley-Banner-Hula-Dancers-1170x350-002-mono.jpg
date: 2015-09-25T11:30:15+09:00
publishdate: 2015-09-25T11:30:15+09:00
description: 'Mac users, fix your Mail OS X crashes and hangs, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-Apple-Mail-Message-Import.png
  - /img/Cogley-Banner-Hula-Dancers-1170x350-002-mono.jpg
  - 'http://static.cogley.info/img/rick-cogley-avatar-240x240.png'
tags:
  - osx
  - mac
  - email
  - mail.app
  - crash
  - hang
  - envelope
  - yosemite
  - imap
topics:
  - Software
  - Tips
  - Productivity
  - SysAdmin
postsummary: Have you been frustrated by Mac OS X Mail.app crashing or hanging? This happens to me from time to time, even though I keep OS X updated to the latest version. Well, I found a fix that works for me anyway, and you might try it.
postsvg: icon-origami-fish
---

Have you been frustrated by Mac OS X Mail.app crashing or hanging? This happens to me from time to time, even though I keep OS X updated to the latest version. Well, I found a fix that works for me anyway, and you might try it.

<!--more-->

## Background

Besides the strange bugs that seem to have plagued Mail.app on Apple OS X from time to time over the last several generations of OS X, and, the matter of Gmail's non-standard IMAP implementation, I've found something that seems to work for me, when Mail.app starts showing the spinner, indicating a hang or crash.

## How to Fix a Hung or Crashed Mail.app

{{< figure1 link="/img/Cogley-Post-Apple-Mail-Message-Import.png" src="/img/Cogley-Post-Apple-Mail-Message-Import.png" type="Screenshot" title="OS X Lion Mail Import" >}}

I've found that deleting Mail.app's "envelope" index seems to alleviate crashing or hanging.

I suspect what happens is, a malformed email message is received, and Mail.app hangs on processing that. I've found that one can delete recent messages one by one, sometimes, and this fixes the problem. But other times, just selecting the faulty message will cause a crash, so you need to take measures to fix that.

To delete your "envelope" index: first, shut down Mail.app, using Force Quit if needed.
Then, at the Terminal:

~~~bash
cd ~/Library/Mail/V2/MailData
rm -rf Envelope\ Index*
rm -rf ExternalUpdates.storedata*
~~~

Finally, restart Mail.app and it will show a dialog box, similar to the vintage one shown above. It takes a few minutes, but Mail will rebuild the envelope index, and this generally fixes the problems I have had.

## What if it does not work?

You can also try:

* Shut down Mail, delete all the locally stored mail, by deleting the IMAP folders in ``~/Library/Mail/V2``, and restart Mail. It will re-download all your emails in those accounts.
* Remove and restore the accounts themselves.  

To delete the IMAP folders and all your downloaded mail, the command would be something like:

~~~bash
cd ~/Library/Mail/V2
rm -rf IMAP*
~~~

You can make that re-download process go much faster by setting each account to _not_ download attachments. _N.b._, this is in Mail, Preferences, Accounts (select account), Advanced, uncheck "Automatically Download All Attachments".

I hope this information helps someone with their Mac OS X Mail.app troubles. Enjoy!
