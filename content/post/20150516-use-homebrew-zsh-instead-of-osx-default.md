---
title: Use Homebrew zsh Instead of the OSX Default
subtitle: Keep your zsh up to date
slug: use-homebrew-zsh-instead-of-the-osx-default
banner: /img/Cogley-Banner-Hula-Dancers-1170x350-002-mono.jpg
date: 2015-05-16T10:37:01+09:00
publishdate: 2015-05-08T12:33:19+09:00
description: How to use brew to get the latest zsh instead of the one that OS X installs, a post by Rick Cogley.
draft: "false"
images:
  - /img/homebrew.png
  - /img/rick-cogley-avatar-240x240.png
publishdate: 2015-05-08T12:33:19+09:00
tags:
  - brew
  - zsh
  - homebrew
  - upgrade
  - osx
  - mac
topics:
  - Tips
  - SysAdmin
  - Upgrades
postsummary: The zsh shell that Apple provides in OS Yosemite is out of date, as of the time of this article in May 2015. It's trivial to install the latest version, available on homebrew, and here's a couple of steps you need to do to make that your default. Read on for the how.
postsvg: icon-origami-fish
---

The [zsh](http://zsh.sourceforge.net/) shell that Apple provides in OS Yosemite is out of date, as of the time of this article in May 2015. It's trivial to install the latest version, available on ``homebrew``, and here's a couple of steps you need to do to make that your default. Read on for how to do it.

<!--more-->

## Initial Confirmations

Confirm the current zsh version:

~~~bash
me@mysys ~ % zsh --version
zsh 5.0.5 (x86_64-apple-darwin14.0)
~~~

Confirm the location of zsh:

~~~bash
me@mysys ~ % which zsh
/bin/zsh
~~~

Confirm the shells OS X knows about:

~~~bash
me@mysys ~ % cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
~~~

## Upgrade zsh with brew

Use `brew install zsh` to install.

~~~bash
rcogley@RickMBP ~ % brew install zsh
==> Installing zsh dependency: gdbm
==> Downloading https://homebrew.bintray.com/bottles/gdbm-1.11.yosemite.bottle.2.tar.gz
######################################################################## 100.0%
==> Pouring gdbm-1.11.yosemite.bottle.2.tar.gz
🍺  /usr/local/Cellar/gdbm/1.11: 17 files, 532K
==> Installing zsh
==> Downloading https://homebrew.bintray.com/bottles/zsh-5.0.7.yosemite.bottle.tar.gz
######################################################################## 100.0%
==> Pouring zsh-5.0.7.yosemite.bottle.tar.gz
==> Caveats
Add the following to your zshrc to access the online help:
  unalias run-help
  autoload run-help
  HELPDIR=/usr/local/share/zsh/help
==> Summary
🍺  /usr/local/Cellar/zsh/5.0.7: 1084 files, 11M
brew install zsh  3.27s user 2.47s system 43% cpu 13.173 total
~~~

### Confirm brew's zsh location

Apple provides `/usr/local` for OS X users to install packages to and it's already in your system path, so that's where `brew` installs. Confirm:

~~~bash
me@mysys ~ % ls -la /usr/local/bin/zs*
lrwxr-xr-x  1 rcogley  wheel  27 May 16 10:54 /usr/local/bin/zsh@ -> ../Cellar/zsh/5.0.7/bin/zsh
lrwxr-xr-x  1 rcogley  wheel  33 May 16 10:54 /usr/local/bin/zsh-5.0.7@ -> ../Cellar/zsh/5.0.7/bin/zsh-5.0.7
~~~

But you can also use `brew` commands to confirm the details about the package:

~~~bash
me@mysys ~ % brew list
aspell		automake	enscript	gettext		gsl114		libgpg-error	mtr		rsync
autoconf	bazaar		gdbm		go		jenv		libksba		pcre		zsh
me@mysys ~ % brew list zsh
/usr/local/Cellar/zsh/5.0.7/bin/zsh
/usr/local/Cellar/zsh/5.0.7/bin/zsh-5.0.7
/usr/local/Cellar/zsh/5.0.7/lib/zsh/ (35 files)
/usr/local/Cellar/zsh/5.0.7/share/info/ (7 files)
/usr/local/Cellar/zsh/5.0.7/share/man/ (17 files)
/usr/local/Cellar/zsh/5.0.7/share/zsh/ (1036 files)
~~~

And...

~~~bash
me@mysys ~ % brew info zsh
zsh: stable 5.0.7 (bottled)
http://www.zsh.org/
/usr/local/Cellar/zsh/5.0.7 (1084 files, 11M) *
  Poured from bottle
From: https://github.com/Homebrew/homebrew/blob/master/Library/Formula/zsh.rb
==> Dependencies
Required: gdbm ✔, pcre ✔
==> Options
--disable-etcdir
	Disable the reading of Zsh rc files in /etc
==> Caveats
Add the following to your zshrc to access the online help:
  unalias run-help
  autoload run-help
  HELPDIR=/usr/local/share/zsh/help
~~~

## Use the brew zsh

To use the zsh brew installed, you need to edit `/etc/shells`. It's owned by root, so use sudo to edit it. Here's one way:

~~~bash
me@mysys ~ % sudo nano /etc/shells
Password:
~~~

Add the path to the `brew` zsh at the end, save (ctrl-o, ctrl-x), then confirm:

~~~bash
me@mysys ~ % cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/zsh
~~~

Now use `chsh` (change shell) to change to the `brew` zsh:

~~~bash
me@mysys ~ % chsh -s /usr/local/bin/zsh
Changing shell for rcogley.
Password for rcogley:
~~~

If you run `which` again, you'll see the system is recognizing the one you installed:

~~~bash
me@mysys ~ % which zsh
/usr/local/bin/zsh
~~~

And confirming the version shows:

~~~bash
me@mysys ~ % zsh --version
zsh 5.0.7 (x86_64-apple-darwin14.0.0)
~~~

Et voilà!

{{< figure src="/img/homebrew.png" alt="Homebrew Logo" class="pure-img"  >}}
