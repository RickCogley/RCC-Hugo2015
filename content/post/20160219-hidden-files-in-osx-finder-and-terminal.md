---
title: Handling Hidden Files in OS X
subtitle: In Finder, in Dialogs, in the Terminal
slug: hidden-files-in-osx-finder-open-dialogs-and-terminal
publishdate: 2016-02-19T18:59:00+09:00
date: 2016-02-20T20:37:00+09:00
banner: /img/Cogley-Banner-Ballpit_in_Joboland-by-Karl-E-Jorgensen-1400x450-mono.jpg
images:
  - /img/Cogley-Post-Finder-Showing-Invisible-Files.png
  - /img/Cogley-Post-Cocktail-Toggle-Hidden-in-Finder.png
  - /img/Cogley-Banner-Ballpit_in_Joboland-by-Karl-E-Jorgensen-1400x450-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
description: Wondering how to handle the hidden files on your Mac? Here is how to handle them in Finder, Terminal and in Open Dialog boxes. A post by Rick Cogley.
topics: [Software, Tips, SysAdmin, Productivity]
tags: [OS X, osx, Apple, Finder, Terminal, hidden, invisible, files, toggle, ls, cocktail, pathfinder, dialog, 10.11, 2016]
draft: "false"
postsummary: Are you stuck, wondering how to deal with hidden files in your Mac Finder? Read on to find out how to handle them in Finder, Terminal and in Open Dialog boxes.
postsvg: icon-origami-fish
---

Are you stuck, wondering how to deal with the invisible files in your Mac Finder? Read on to find out how to handle them in Finder, Terminal and in Open Dialog boxes, as of OS X 10.11.3 "El Capitan".

<!--more-->

## Handling Hidden Files in OS X

Mac OS X is basically a *{{<abbr nix>}} system at its heart, so it has the concept of hidden files, and sometimes you want to see those. These invisibles are things like:

* ``~.bash_history`` your bash history log
* ``.git/`` the special folder in any git repository, that contains all the info about the same

There are several areas in OS X where you might need to display them, so I'll show you how to do that for each.

### Hidden files in Finder

{{< figure1 link="/img/Cogley-Post-Finder-Showing-Invisible-Files.png" src="/img/Cogley-Post-Finder-Showing-Invisible-Files.thumb.png" type="Screenshot" title="Finder set to show invisible files" class="" >}}

The standard way to show hidden files in the Finder, is to issue the command ``defaults write`` in Terminal. (_Scroll the code window to its right to see the rest of the command._)

{{< prism bash command-line >}}defaults write com.apple.finder AppleShowAllFiles TRUE
killall -KILL Finder
{{< /prism >}}

Oddly enough, ``defaults write`` takes "true", "yes" or "1" to mean the same thing.

You can hide the hidden files again like this, therefore:

{{< prism bash command-line >}}defaults write com.apple.finder AppleShowAllFiles FALSE
killall -KILL Finder
{{< /prism >}}

You can read the status of this setting, like this:

{{< prism bash command-line >}}defaults read com.apple.finder AppleShowAllFiles
{{< /prism >}}

Or, get that result to a variable, and then ``echo`` the variable:

{{< prism bash command-line >}}showallfiles=$(defaults read com.apple.finder AppleShowAllFiles); echo $showallfiles
{{< /prism >}}

{{% aside1 %}}
You'll see backticks around commands in examples all over the web (i.e. `` `thecommand` ``), but, this should be considered deprecated. Prefer instead ``$(thecommand)`` because it is the accepted POSIX syntax, is visually clear, is nestable, and is consistent.
{{% /aside1 %}}

The ``$()`` around the ``defaults read`` means, "run this command". The semicolon acts as a command separator. The ``echo`` puts the value assigned to the variable on the terminal output, aka "standard out" or ``std-out``.

#### Bash it into a script

Alright, so let's pop these commands into a ``bash`` script, for convenience, so it can be run easily, any time. Create a text file called, say, ``togglevisible.sh`` in your home folder, using a text editor, and paste the text below into it (or download a zip [from here](https://gist.github.com/RickCogley/fcb96f768423a0273673/archive/914482c83848e1a59dbc69b562dda12a15c53fb9.zip)).

{{< prism bash >}}#!/bin/bash
#
# Author: Rick Cogley
# Created: 19 Feb 2016
#
showallfiles=$(defaults read com.apple.finder AppleShowAllFiles)
case "$showallfiles" in
1|TRUE|True|true|YES|Yes|yes) defaults write com.apple.finder AppleShowAllFiles -boolean false
  echo Hidden files covered
  ;;
*) defaults write com.apple.finder AppleShowAllFiles -boolean true
  echo Hidden files showing
  ;;
esac
killall Finder
{{< /prism >}}

{{% aside1 %}}
If you need a text editor, you can get [Atom](https://atom.io) for free.
{{% /aside1 %}}

The script has the usual "sh-bang" ``#!/bin/bash`` line at the top, which indicates it's a bash script, a bit of commented information, then it grabs the setting and puts it into the variable ``$showallfiles``. Then it uses a ``case`` statement to check the value in the variable against a bunch of possibilities (``1 or TRUE or True`` etc), running ``defaults write`` to set the ``AppleShowAllFiles`` to the opposite of what it is now.  

Now mark the script as executable, and run it. Assuming it's in your home folder, the dance goes like this:

{{< prism bash command-line >}}cd ~
chmod +x togglevisible.sh
./togglevisible.sh
{{< /prism >}}

Just run it again to toggle. The hidden files will appear and disappear, in reaction to running the script.

#### Run it from anywhere

If you'd like to run the script from any path, you can make a symlink to it. Let's say you saved the script in ``~/scripts``. That's not in your path, so you can simply do this:

{{< prism bash command-line >}}cd /usr/local/bin
ln -s ~/scripts/togglehidden.sh
{{< /prism >}}

Now, just enter ``togglehidden.sh`` from any folder and it should run.

#### Alternative GUI methods

{{< figure1 link="/img/Cogley-Post-Cocktail-Toggle-Hidden-in-Finder.png" src="/img/Cogley-Post-Cocktail-Toggle-Hidden-in-Finder.thumb.png" type="Screenshot" title="Toggling Finder invisibles from within Maintain's Cocktail" class="" >}}

There are a couple other methods to show invisible files or folders in Finder:

* If you use CocoaTech's [Path Finder](http://cocoatech.com/pathfinder/), you can toggle invisibles via ``Shift-Cmd-i`` or View, Show Invisible Files. This is for viewing them within Path Finder.
* If you use Maintain's [Cocktail](http://www.maintain.se/cocktail/), you can toggle hidden files via Interface, Finder, Show Invisible Files.
* If you use Finder's "Go" menu, hold down ``option`` when you click it, to display hidden folders inside.

### Hidden files in Open Dialogs

If you want to toggle invisibility in a File, Open dialog, you can press:

``shift-cmd-.``

... while the dialog is open. Just be sure you've switch the view into "list" mode. You can press ``cmd-2`` to do that from within the File, Open dialog, or, from Finder itself. Try ``cmd-1``, ``cmd-2`` and ``cmd-3``.

### Hidden files at the Terminal

Finally, if you're using the Terminal, you can list hidden files in a folder like this:

{{< prism bash command-line >}}cd ~
ls -a
.                                .rnd                             .zshrc-backup2
..                               .spf13-vim-3                     .zshrc-e
.489454.padl                     .ssh                             .zshrc.local
.499167.padl                     .subversion                      .zshrc.pre-oh-my-zsh
.CFUserTextEncoding              .v8flags.4.6.85.31.rcogley.json  Applications
.DS_Store                        .vim                             Creative Cloud Files
.Trash                           .vimbackup                       Desktop
.atom                            .viminfo                         Documents
.bash_history                    .vimrc                           Downloads
.bzr.log                         .vimrc.before                    Dropbox
.cache                           .vimrc.bundles                   Google Drive
...
{{< /prism >}}

That's list all (``-a``) in a compact format. You can also try ``ls -la`` for a long list view.

## In Conclusion

So now you have a couple of techniques for showing invisible files in OS X:

* Use a bash script and some GUI options, to toggle hidden files in Finder.
* Link the bash script into your system ``path``, so it will run from any folder in Terminal.
* Peek at hidden files in File, Open dialogs using a hot-key: ``shift-cmd-.``.
* List hidden files at the Terminal with ``ls -a`` or ``ls -la``.

These are verified to work in OS X 10.11.3 "El Capitan" and probably work fine for earlier versions too. Thanks for dropping by, and please share with others if you found this useful.

{{% ack1 %}}
The banner photo is a cropped version of "_Ballpit in Joboland_" by Karl E. Jorgensen. Original is [here](https://commons.wikimedia.org/wiki/File:Ballpit.jpg) on the Wikimedia commons. Thanks!
{{% /ack1 %}}
