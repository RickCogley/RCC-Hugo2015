---
title: Run a TFTP Server for Network Device Setups
subtitle: ...on Mac OS X or macOS
slug: run-a-tftp-server-on-mac-osx
banner: /img/Cogley-Banner-Switch-2-mono.jpg
date: 2017-02-06T10:50:00+09:00
publishdate: 2016-03-03T19:48:00+09:00
description: 'Running a TFTP server on your Mac OSX or macOS, for network device setups, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-hp-switch-tftp-ui.jpg
  - /img/Cogley-Banner-Switch-2-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - tftp
  - tftpd
  - tftpboot
  - launchctl
  - mac
  - osx
  - netstat
  - daemon
  - sip
  - el-capitan
  - firmware
  - upgrade
  - macos
  - sierra
topics:
  - Software
  - Tips
  - Sysadmin
postsummary: If you're working with networking devices such as switches, routers or firewalls, to upgrade their firmware, you often need a TFTP server. Here's how to use the one included with Mac OS X.
postsvg: icon-origami-fish
---

If you're working with networking devices such as switches, routers or firewalls, to upgrade their firmware, you more often than not need a TFTP server. Here's how to use the one included with Mac OS X or macOS.

<!--more-->

## Preparation

Mac OS X has a ``tftp`` server included, and you just have to start it and do a little configuration.

I found and set it up this way:

### Find appropriate commands

Use the ``apropos`` command to see if there are any commands related to ``tftp``. From Terminal:

{{< prism bash command-line >}}apropos tftp
{{< /prism >}}

The command replies:

{{< prism bash >}}tftp(1) - trivial file transfer program
tftpd(8) - DARPA Internet Trivial File Transfer Protocol server
{{< /prism >}}

Since the commands exist, you can use ``man`` to get more info. We would want the _server_ version of this command, so that is the one with the ``d`` suffix (d is for "daemon").

{{< prism bash command-line >}}man tftpd
{{< /prism >}}

Looking at these results and Apple's [online version](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/tftpd.8.html) of the ``man`` info, we see it says:

> This server should not be started manually; instead, it should be run using launchd(8) using the plist ``/System/Library/LaunchDaemons/tftp.plist``. It may be started using the launchctl(1) load command; refer to the documentation for that utility for more information.

### Start tftpd

The ``man`` file gives you the plist to use, so, you just start it with ``launchctl``:

{{< prism bash command-line >}}sudo launchctl load -F /System/Library/LaunchDaemons/tftp.plist
{{< /prism >}}

... and ``tftpd`` will start. Supply your password when ``sudo`` prompts for it.

You can confirm it's running using ``netstat`` to check what is listening on its port, traditionally port ``69``.

{{< prism bash command-line >}}netstat -na |grep \*.69
{{< /prism >}}

It will show:

{{< prism bash >}}udp6       0      0  *.69                   *.*
udp4       0      0  *.69                   *.*
{{< /prism >}}

## Serve a Firmware File

Now that the ``tftpd`` server is started, you need to put the firmware binary file in a specific location for the ``tftpd`` to be able to serve it to a requesting device. Namely your firmware files should be saved to ``/private/tftpboot``. The ``tftp.plist`` file looks like this:

{{< prism xml >}}&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple Computer//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1&gt;
&lt;plist version=&quot;1.0&quot;&gt;
&lt;dict&gt;
	&lt;key&gt;Disabled&lt;/key&gt;
	&lt;true/&gt;
	&lt;key&gt;Label&lt;/key&gt;
	&lt;string&gt;com.apple.tftpd&lt;/string&gt;
	&lt;key&gt;ProgramArguments&lt;/key&gt;
	&lt;array&gt;
		&lt;string&gt;/usr/libexec/tftpd&lt;/string&gt;
		&lt;string&gt;-i&lt;/string&gt;
		&lt;string&gt;/private/tftpboot&lt;/string&gt;
	&lt;/array&gt;
	&lt;key&gt;inetdCompatibility&lt;/key&gt;
	&lt;dict&gt;
		&lt;key&gt;Wait&lt;/key&gt;
		&lt;true/&gt;
	&lt;/dict&gt;
	&lt;key&gt;InitGroups&lt;/key&gt;
	&lt;true/&gt;
	&lt;key&gt;Sockets&lt;/key&gt;
	&lt;dict&gt;
		&lt;key&gt;Listeners&lt;/key&gt;
		&lt;dict&gt;
			&lt;key&gt;SockServiceName&lt;/key&gt;
			&lt;string&gt;tftp&lt;/string&gt;
			&lt;key&gt;SockType&lt;/key&gt;
			&lt;string&gt;dgram&lt;/string&gt;
		&lt;/dict&gt;
	&lt;/dict&gt;
&lt;/dict&gt;
&lt;/plist&gt;
{{< /prism >}}

### Symlink the tftpboot folder

You used to be able to change the ``tftpboot`` path, but OS X El Capitan and later macOSs have stronger security via their "SIP" system which makes things more difficult. Just symlink the ``tftpboot`` to a folder you have full control over. You can do it like this:

{{< prism bash command-line >}}cd /private/
sudo rm -rf tftpboot
mkdir /Users/myuser/tftpboot
sudo ln -s /Users/myuser/tftpboot tftpboot
sudo launchctl unload -F /System/Library/LaunchDaemons/tftp.plist
sudo launchctl load -F /System/Library/LaunchDaemons/tftp.plist
{{< /prism >}}

_That being said_, please note that I tested a fresh macOS Sierra install directly on ``/private/tftpboot``

{{% aside1 %}}
Japanese Mac keyboards don't handle reverse solidus ``\``. To enter one you can press ``option-¥``.
{{% /aside1 %}}

### Copy firmware file into position

Now let's serve a file. Let's say we download a firmware for an HP switch, and want to upgrade its firmware to that version. The file downloaded is ``F_05_80.swi`` and is saved to our ``Downloads`` folder. Let's move it to the correct folder, and set its permissions.

{{< prism bash command-line >}}cd /Users/myuser/tftpboot
cp ~/Downloads/hp/F_05_80.swi .
ls
chmod 766 F_05_80.swi
{{< /prism >}}

### Get firmware file from tftpd

{{< figure1 link="/img/Cogley-Post-hp-switch-tftp-ui.jpg" src="/img/Cogley-Post-hp-switch-tftp-ui.thumb.jpg" type="Screenshot" title="HP Switch Firmware Upgrade UI" class="" >}}

It differs by each device you're upgrading, but typically you would set these:

* Method of upgrade: select ``tftp`` usually.
* IP address of ``tftpd`` server. This is the IP of your mac.
* Name of firmware file. Enter the exact name, getting the case exactly right.

Then there is usually a way to "execute" the transfer by a command or menu. Once the firmware is transferred and loaded, your device will usually restart.

Click the screenshot to see what it looks like on an HP switch.

## Put a file from a device to tftpd

Sometimes you want to save a file _from_ the device, _to_ your ``tftp`` server. The ``tftp`` protocol is dumb and requires no authentication, so you need to specify in advance what the received filename will be. Use ``touch`` to do that.

{{% aside1 %}}
Be sure to get the name exactly right, as mis-spellings are a common cause of errors here.
{{% /aside1 %}}

{{< prism bash command-line >}}touch ~/tftpboot/catalyst.conf
chmod 766 ~/tftpboot/catalyst.conf
{{< /prism >}}

Now you have a blank file that will be overwritten, when you specify it from your remote device. Make sure you specify exactly the same filename.

## Stop tftpd

Be sure to unload the service when you're not using it:

{{< prism bash command-line >}}sudo launchctl unload -F /System/Library/LaunchDaemons/tftp.plist
netstat -na |grep \*.69
{{< /prism >}}

The aforementioned ``netstat`` command should return nothing.

## Alternatives

There are a couple of GUI alternatives you can try, though I have not done so myself:

* [PumpKIN](http://kin.klever.net/pumpkin#.VtgDI5N95lc)
* [TFTP Server](http://ww2.unime.it/flr/tftpserver/)

I hope this information helps someone.

{{% ack1 %}}
The banner photo is a photo I took of a Cisco Catalyst switch my company [eSolia](http://esolia.com) installed for a client. It probably needs upgraded!
{{% /ack1 %}}
