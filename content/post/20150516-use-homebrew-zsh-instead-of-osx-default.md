---
title: Use Homebrew zsh Instead of the OS X Default
subtitle: Keep your zsh up to date
slug: use-homebrew-zsh-instead-of-the-osx-default
banner: /img/Cogley-Banner-Hula-Dancers-1170x350-002-mono.jpg
date: 2016-03-22T11:37:01+09:00
publishdate: 2015-05-08T12:33:19+09:00
description: How to use brew to get the latest zsh instead of the one that Mac OS X installs, a post by Rick Cogley.
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
  - shell
  - oh-my-zsh
  - chsh
topics:
  - Tips
  - SysAdmin
  - Upgrades
postsummary: If the zsh shell that Apple provides in OS X is out of date, it's trivial to install the latest version, available on homebrew. Here's a couple of steps you need to do to make that your default. Read on for the how.
postsvg: icon-origami-fish
---

If the [zsh](http://zsh.sourceforge.net/) shell that Apple provides in Mac OS X is out of date, as it has been in Yosemite and El Capitan, it's trivial to install the latest version, available on ``homebrew``. Here's a couple of steps you need to do to make that your default. Read on, for how to do it.

<!--more-->

## Initial Confirmations

Confirm the current active ``zsh`` version:

{{< prism bash command-line >}}zsh --version
zsh 5.0.5 (x86_64-apple-darwin14.0)
{{< /prism >}}

Confirm the location of ``zsh``:

{{< prism bash command-line >}}which zsh
/bin/zsh
{{< /prism >}}

Confirm the shells OS X knows about:

{{< prism bash command-line >}}cat /etc/shells
  # List of acceptable shells for chpass(1).
  # Ftpd will not allow users to connect who are not using
  # one of these shells.
   /bin/bash
   /bin/csh
   /bin/ksh
   /bin/sh
   /bin/tcsh
   /bin/zsh
{{< /prism >}}

## Upgrade zsh with brew

{{< figure1 link="/img/homebrew.png" src="/img/homebrew.png" type="Logo" title="Homebrew" class="" >}}

Assuming you have ``brew`` installed, use `brew install zsh` to install.

{{< prism bash command-line >}}brew install zsh
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
{{< /prism >}}

### Confirm brew's zsh location

Apple provides `/usr/local` for OS X users to install packages to and it's already in your system path, so that's where `brew` installs. Confirm it:

{{< prism bash command-line >}}ls -la /usr/local/bin/zs*
  lrwxr-xr-x  1 rcogley  wheel  27 May 16 10:54 /usr/local/bin/zsh@ -> ../Cellar/zsh/5.0.7/bin/zsh
  lrwxr-xr-x  1 rcogley  wheel  33 May 16 10:54 /usr/local/bin/zsh-5.0.7@ -> ../Cellar/zsh/5.0.7/bin/zsh-5.0.7
{{< /prism >}}

But you can also use `brew` commands to confirm the details about the package:

{{< prism bash command-line >}}brew list
  aspell		automake	enscript	gettext		gsl114		libgpg-error	mtr		rsync
  autoconf	bazaar		gdbm		go		jenv		libksba		pcre		zsh
brew list zsh
  /usr/local/Cellar/zsh/5.0.7/bin/zsh
  /usr/local/Cellar/zsh/5.0.7/bin/zsh-5.0.7
  /usr/local/Cellar/zsh/5.0.7/lib/zsh/ (35 files)
  /usr/local/Cellar/zsh/5.0.7/share/info/ (7 files)
  /usr/local/Cellar/zsh/5.0.7/share/man/ (17 files)
  /usr/local/Cellar/zsh/5.0.7/share/zsh/ (1036 files)
{{< /prism >}}

And...

{{< prism bash command-line >}}brew info zsh
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
{{< /prism >}}

## Use the brew zsh

To use the ``zsh`` that brew installed, you first need to edit `/etc/shells`. It's owned by root, so use sudo to edit it. Here's one way:

{{< prism bash command-line >}}sudo nano /etc/shells
Password: *********
{{< /prism >}}

Add the path to the `brew` zsh at the end, save (ctrl-o, ctrl-x if via nano), then confirm:

{{< prism bash command-line >}}cat /etc/shells
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
{{< /prism >}}

Now use `chsh` (change shell) to change to the `brew` version of ``zsh``:

{{< prism bash command-line >}}chsh -s /usr/local/bin/zsh
  Changing shell for rcogley.
  Password for rcogley: *********
{{< /prism >}}

After that, restart your Terminal to have it take effect.

Now if you run `which` again, you'll see the system is recognizing the one you installed:

{{< prism bash command-line >}}which zsh
  /usr/local/bin/zsh
{{< /prism >}}

And confirming the version again shows:

{{< prism bash command-line >}}zsh --version
  zsh 5.0.7 (x86_64-apple-darwin14.0.0)
{{< /prism >}}

Et voilà! The ``zsh`` that is first in your path is now the upgraded version from ``brew``.

Now you can confirm which shell you are running with a couple of different commands. First try echoing an environment variable (case matters):

{{< prism bash command-line >}}echo $SHELL
    /usr/local/bin/zsh
{{< /prism >}}

Next, you can also check the name of the running process by doing ``echo $0``. It should return ``-zsh``.

## Handling Upgrades

There are a couple of considerations to keep in mind any time you upgrade OS X.

First, the ``/etc/shells`` file might get reset, so check it to be sure.

Secondly, OS X El Capitan (v 10.11) has a new security system called "System Integrity Protection", which is set up to be stricter with the security of ``/usr/local``, among other things. Since this is where ``brew`` keeps its files, you'll likely need to reset security on it by running the following command:

{{< prism bash command-line >}}sudo chown -R $(whoami):admin /usr/local
{{< /prism >}}

If you upgrade ``brew`` using ``brew update`` or ``brew upgrade``, it will inform you if there's a problem with permissions on ``/usr/local``.

## Supercharging Zsh

It's a matter for another post, but if you like ``zsh`` and want some cool tools for it, check out [Oh My Zsh!](http://ohmyz.sh/), an open source framework for managing ``zsh`` config.

## Updates

* **25 Mar 2016** - checked version of ``zsh`` in OS X 10.11.4 El Capitan. It's ``zsh 5.0.8 (x86_64-apple-darwin15.0)``, which is still out of date and in fact, an even more pronounced version lag compared to the ``v5.2`` now being distributed via ``brew``. Added how to check which shell you actually are using, and a couple points about handling upgrades.
* **24 Mar 2016** - cleaned up the post a bit. Added restarting Terminal, per comments (thanks!). Added ack section. Added link to [Oh My Zsh!](http://ohmyz.sh/).

{{% ack1 %}}
The banner photo has nothing to do with zsh. It's a photo I took of hula dancers at Shonan Mall near Fujisawa, a number of years ago. See the original [here](https://www.flickr.com/photos/rickcogley/3580716109).

Thanks to Kirk Beard and Adam in the comments, regarding restarting Terminal to have the ``chsh`` take effect.
{{% /ack1 %}}
