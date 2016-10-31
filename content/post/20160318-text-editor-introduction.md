---
title: So, What's a Text Editor?
subtitle: ...an introduction for newbies
slug: text-editor-introduction
banner: /img/Cogley-Banner-19th_century_work_bench-by-Jorge_Royan-1400x450-mono.jpg
date: 2016-11-01T07:19:00+09:00
publishdate: 2016-03-24T15:54:00+09:00
description: 'Learn about text editors and get some ideas for further research and learning, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-Atom-Keyboard-Shortcuts.jpg
  - /img/Cogley-Post-BBEdit-Folding-and-Syntax-Highlighting.jpg
  - /img/Cogley-Post-Github-Markdown-Editing.jpg
  - /img/editor-config-logo.png
  - /img/Cogley-Banner-19th_century_work_bench-by-Jorge_Royan-1400x450-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - text
  - editor
  - atom
  - bbedit
  - programmer
  - developer
  - vim
  - emacs
  - editorconfig
  - brackets
  - edit
  - espresso
  - caret
  - notepad
  - eclipse
  - dash
  - utf-8
topics:
  - Software
  - Tips
  - Sysadmin
postsummary: Have you just become aware of text editors and are starting to understand why you'd need one? This article is intended for readers who need a text editor, and a helpful basic overview about them to get started.
postsvg: icon-origami-butterfly
---

Have you just become aware of text editors and are starting to understand why you'd need one? This article is intended for readers who need a text editor, and a helpful basic overview about them to get started.

<!--more-->

## What's a Text Editor?

A text editor is an application used for editing text files, having no function for adding visual formatting such as **bold** or _italics_, to the edited text. If your editor application allows you to set formatting on text, as you can do with an app like MS Word, Apple Pages or Mellel, it's not a text editor specifically, but rather what might be termed a "word processor".

You might be looking for a text editor if you're in the following categories:

* those just getting started in coding and programming
* those who have been told to find and use one
* those who want to edit in text, a future-proof format (_c.f._ MS Word's proprietary format)
* those who need to edit text-based markdown content files

You'll probably find this out anyway, but Mac, Windows and *{{<abbr nix>}} have text editors built in. In the case of Mac, it's "Text Edit" in the GUI (which ironically defaults to saving _rich_ text) and ``ed`` or ``vi`` in the Terminal.

{{% aside1 %}}
The ``ed`` editor is probably the prototypical editor, since it was used to build much of the software unix is based on to begin with. Try it out if you have a chance, and muse upon how hard core it was to build so much software using just this tool.
{{% /aside1 %}}

On Windows, you have "Notepad" and on *{{<abbr nix>}}, you usually have a default in the GUI, and various ones in the Terminal such as ``ed``, ``vi``, ``vim``, ``emacs`` or ``nano``. Since Macs are based on *{{<abbr nix>}}, there's a wide range of stuff available in the Terminal, which you can install via ``homebrew``.

## Common Editor Features

Text editors almost always feature certain common aspects that you'll observe in one form or another, such as these:

* Save text files in a specific encoding, such as {{<abbr UTF-8>}} (preferred) or Japanese "Shift JIS".
* Control which line endings are used in a file, such as {{<abbr LF>}} which works for *{{<abbr nix>}}, or, {{<abbr CRLF>}} for Windows.
* Display line numbers, and wrap each line at a certain number of spaces, in addition to giving feedback about file stats like number of words, line, characters and so on.
* Replace tab characters with spaces, which is useful when the project you're working on requires that.
* Search and replace in a file or folder of files, on some text string, or using regular expressions.
* Organize your files and folders in "projects", and display multiple open files in tabs, whether vertically- or horizontally-oriented.
* Control display of the file with a split-screen view or text "folding", making it easier to jump back and forth and see what you're doing, especially in a large file.
* Autocompletion during editing, to allow you to type the beginning of an often-used code fragment, having it automatically replaced by the full expression.
* Tools for text manipulation, like:
   * quick switching between lowercase, title case or upper case
   * straighten quotes or make quotes "smart"
   * sort lines and remove duplicate lines
   * commenting and un-commmenting in a language-sensitive manner

{{< figure1 link="/img/Cogley-Post-BBEdit-Folding-and-Syntax-Highlighting.jpg" src="/img/Cogley-Post-BBEdit-Folding-and-Syntax-Highlighting.thumb.jpg" type="Screenshot" title="BBEdit Section Folding and Syntax Highlighting" class="" >}}

* Syntax highlighting, to colorize your code in a way that makes sense for the type of file you're editing, whether it's html, javascript, css, markdown, c, go or whatever language.
* Some kind of automation or macro feature, to let you repeat sets of oft-used commands.
* A "scratch pad" to let you store snippets of code you often use.
* Some level of customization, perhaps via a plugin system, which allows you to tweak the features to your liking.

### Other key points

There are a few other important matters to consider as well:  

* Is the editor cross-platform? Is there a version for Mac, Windows and/or Linux?
* Is the editor open source or closed source?
* Large file handling. Will the editor choke when you try to open a multi-gigabyte log file?
* How big is the team that is working on it? Are they going to be around for the future?
* What is the support forum like, and are there complaints that tell you a specific story?
* Does the editor support [Editor Config](http://editorconfig.org/)? It's a great way to stay consistent from project to project or even editor to editor.
* Can you back up the editor's settings? Is it easy to restore?  
* Is it like what you're used to? This is not so relevant at the beginning, but if you switch editors later, your productivity will dip while you get used to new keyboard shortcuts and ways of doing things. If you have time, try ``vim`` for a couple days, then switch to ``emacs`` for a couple days, to see what I mean.

## Editors to consider

Here's a list of a few editors I've tried either briefly, or in production for months or years:

### Cross Platform Editors

* [Atom.io](https://atom.io/), Github's editor for the 21st century.
* [Sublime Text](http://www.sublimetext.com/)
* [VIM](http://www.vim.org)
* [Emacs](http://www.gnu.org/software/emacs/)
* [Visual Studio Code](https://www.visualstudio.com/products/code-vs)
* [UltraEdit](http://www.ultraedit.com)
* [Brackets](http://brackets.io), Adobe's editor for web dev.
* [Caret](http://thomaswilburn.net/caret/), a free Chrome app available on the [Chrome Web Store](https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml). Support wiki is [here](https://github.com/thomaswilburn/Caret/wiki). Caret's settings are saved to Chrome's sync storage, meaning that your configuration will be synchronized across multiple computers wherever you're logged into your Google account.

### Mac Editors

* [BBEdit](http://www.barebones.com)
* [Panic Coda](http://www.panic.com/coda/)
* [Mac Rabbit Espresso](http://macrabbit.com/espresso/)
* [Jedit X Plus (Japanese)](http://www.artman21.com/en/jedit_x/)

There's also a special editor for cleaning up text, called [TextSoap](https://www.unmarked.com/textsoap/). It's not really a programmer's editor, but is really useful nevertheless, as a part of, say, an article editing workflow.

### Windows Editors

* [Notepad++](http://notepad-plus-plus.org)
* [Visual Studio Code](https://www.visualstudio.com/products/code-vs)
* [Terapad (Japanese)](http://www5f.biglobe.ne.jp/~t-susumu/library/tpad.html)
* [HideMaru (Japanese)](http://hide.maruo.co.jp/)
* [Peggy (Japanese)](http://www.anchorsystems.jp/anchor/ashp/peggy/pegindex.html)

### Linux Editors

* [Kate](http://kate-editor.org/about-kate/)
* [Gedit](https://wiki.gnome.org/Apps/Gedit)

### Markdown Editors

{{< figure1 link="/img/Cogley-Post-Github-Markdown-Editing.jpg" src="/img/Cogley-Post-Github-Markdown-Editing.thumb.jpg" type="Screenshot" title="Markdown Editing in the Github Web Interfact" class="" >}}

These are editors specifically optimized or built for editing markdown files:

**Platform** | **Editor**
------- | ------
_Cross-platform_ | Github's [Atom.io](https://atom.io/) editor handles markdown via plugins.
_Mac_ | [Macdown](http://macdown.uranusjr.com/)
_Mac_ | [Byword](http://metaclassy.com)
_Mac_ | [MultiMarkdown Composer](http://multimarkdown.com)
_Mac_ | [Marked (previewer)](http://marked2app.com)
_Windows_ | [Writemonkey](http://writemonkey.com/index.php)
_Windows_ | [Markdown Pad 2](http://markdownpad.com/)
_Windows_ | [Gonzo](http://savagelook.com/blog/actionscript3/gonzo-an-open-source-markdown-editor)
_Online_ | [Github](http://www.github.com)
_Online_ | [Dillinger Online](http://dillinger.io/)
_Online_ | [Markable](http://markable.in/)
_Online_ | [Stack Edit](https://stackedit.io/editor)

### Integrated Development Environments

Is your Editor part of an IDE? Sometimes an editor is at the center of a full {{<abbr IDE>}}, which often includes more tools that allow you to handle all the tasks needed in a software development life cycle:  

* Integration with git or other source control systems.
* Integration with syntax checkers (aka "linters") to check your source code, or tools to output a "minimized" version of a file.
* Integration with compilers.
* Integration with a Terminal app.

Some editors don't really bill themselves as an {{<abbr IDE>}}, but they attempt to allow you to set up something close or equivalent, via plugins.

Here are a few IDEs to possibly consider:

**Platform** | **IDE**
------- | ------
_Cross-platform_ | [Eclipse](https://eclipse.org), for Java and C/C++ dev.
_Cross-platform_ | [NetBeans](https://netbeans.org), for Java, JavaScript, HTML5, PHP, C/C++ dev.
_Cross-platform_ | [Visual Studio](https://www.visualstudio.com), for Windows dev originally, but more flexible as of 2016.
_Mac_ | [XCode](https://developer.apple.com/xcode/), for Cocoa, Cocoa Touch and Swift dev.

#### Online IDEs

You might also look into "cloud {{<abbr IDE>}}" services such as the following:

* [Codio](https://codio.com/)
* [Codebox](https://www.codebox.io/)
* [Koding](https://koding.com/)
* [Codiad](http://codiad.com/)
* [Cloud9](https://c9.io/)

These provide an integrated development environment in a web browser, so that you can get started quickly, without worrying about what's on your machine. Some of these services offer free options.

## Master the Basics

{{< figure1 link="/img/Cogley-Post-Atom-Keyboard-Shortcuts.jpg" src="/img/Cogley-Post-Atom-Keyboard-Shortcuts.thumb.jpg" type="Screenshot" title="Atom Keyboard Shortcuts" class="" >}}

Once you decide on an editor, you should master its basics.

Besides the features you can access by hunt and peck through the menus, take the time to learn the keyboard shortcuts it provides. You can also learn using cheat sheets like [this one](http://blog.bugsnag.com/atom-editor-cheat-sheet) for Atom (more are out there; just search), or simply looking at the menu and practicing the shortcut the next time you use that feature.

If you're on Mac, do check out ["Cheatsheet"](https://www.mediaatelier.com/CheatSheet/). Once you install it, just press and hold the cmd key, to have a Cheatsheet pop up for that application (assuming it knows about the app). Another great one is [Kapeli Dash](https://kapeli.com/dash), which is a _tour de force_ collection of developer documentation.

Besides the basics of how to use whatever text editor you choose, there are a few guidelines to keep in mind:

{{< figure1 link="/img/editor-config-logo.png" src="/img/editor-config-logo.png" type="Logo" title="Editor Config" class="" >}}

* Use [Editor Config](http://editorconfig.org/) for editor setting consistency. Not all editors support it, but it's really useful, so you should use one that does.
* Use [Linters](http://stackoverflow.com/questions/8503559/what-is-linting) to check your code for errors.
* Save files in plain text, utf-8 encoding only.
* Set your editor to use only unix-style LF (``\n``) line endings.
* Use 2 spaces per indent, to show structure. Don't use tabs.
* Use line length of 80 or less.

If you're not sure why, just use the above parameters as a starting point. You can adjust as you learn more or, work on other projects as a team member.

I hope this information helps someone.

## Reference

* See a massive [editor comparison](http://en.wikipedia.org/wiki/Comparison_of_text_editors) list on Wikipedia.

## Updates

* 1 Nov 2016 - Nitrous is closing, so I've removed the link to their service.
* **27 Mar 2016** - _Vihan Bhargava_ on Google+ pointed out that {{<abbr ASCII>}} is not an encoding. Thank you Vihan for pointing this out. I was thinking {{<abbr ANSI>}} while typing {{<abbr ASCII>}}. But it is more proper to mention an encoding like ISO 8859-1 or Shift JIS, I think. Duly edited.

{{% ack1 %}}
The banner photo is a cropped, monochrome version of [19th century work bench with many tools, Auckland](https://commons.wikimedia.org/wiki/File:19th_century_work_bench_with_many_tools,_Auckland_-_0866.jpg) on Wikimedia Commons, by Jorge Royan.
{{% /ack1 %}}
