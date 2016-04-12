---
title: Setup a SmartHost in Linux Sendmail
subtitle: Using Google Gmail
slug: setup-smarthost-in-linux-sendmail
banner: /img/Cogley-Banner-Pony_Express_Postmarks-1400x450-mono.jpg
date: 2016-04-12T17:50:00+09:00
publishdate: 2016-04-12T17:50:00+09:00
description: How to set up sendmail on Linux, to use a smarthost, namely for gmail, a post by Rick Cogley.
draft: 'false'
images:
  - /img/sendmail_logo.gif
  - /img/Cogley-Banner-Pony_Express_Postmarks-1400x450-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - sendmail
  - linux
  - gmail
  - smtp
  - geek
  - spf
  - dns
  - sipxecs
  - hosts
  - spf
  - dkim
  - relay
  - m4
topics:
  - SysAdmin
  - Software
  - Tips
postsummary: Sendmail is a notoriously finicky piece of software, with an arcane settings syntax and methodology. Here's a problem I ran into, and what I did to fix it. 
postsvg: icon-origami-butterfly
---

Sendmail is a notoriously finicky piece of software, with an arcane settings syntax and methodology. Here's a problem I ran into, and what I did to fix it. 

<!--more-->

## Introduction

When I was setting up our [sipXecs](https://www.sipfoundry.org/new-version/) phone system on Centos 6, one problem that I ran into was the fact that I could not get voicemail to automatically send out. The voicemail feature was indeed working, judging from the logs and ``.wav`` files' presence in the web GUI. However, no amount of cajoling could get ``sendmail`` to cooperate, and just email users their voicemails. 

## What Happened

I noticed a lot of messages in ``/var/mail/maillog`` regarding delays and timeouts. This generally means that something is not working, but, depending upon the recipient, mail was sending out sometimes, albeit after a long delay. The most important recipients would be my company colleagues, and that is what was not working, so that had priority. 

I took a bunch of time searching for solutions, based on the exact log messages, which ended up being pretty useless. Here's a typical log entry:

{{< prism bash >}}
Apr 12 11:21:36 sipserver1 sendmail[7889]: u3B84xT9931967: to=<me@ourtest.com>, ctladdr=<root@sipserver1.ourtest.com> (0/0), delay=18:16:37, xdelay=00:00:00, mailer=esmtp, pri=43710276, relay=ourtest.com., dsn=4.0.0, stat=Deferred: Connection timed out with ourtest.com.
{{< /prism >}}

Not really specific information, except to say there's a timeout and the message has been Deferred (you can view the queued ones with ``mailq``).

## Here's what I did to Resolve it

A bunch of trial and error and fits and starts later, here's basically what I did in a nice, neat order: 

1. Ensure ``/etc/hosts`` has your hostname right.
1. Add the sipXecs server's public host IP to DNS "[SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)" entry for our domain. If you don't have {{<abbr SPF>}} enabled for your domain, you should get it set up. It's one standard besides {{<abbr DKIM>}}, and really helps with email security. Here's [a wizard](http://www.spfwizard.net/) for creating an entry that you can then cut and paste into your DNS TXT record.
1. Enabled smtp relay in Google Apps admin console, setting it to allow the specific IP of our sipXecs server. 
1. Added Google's specified smtp server hostname ``smtp-relay.gmail.com``, as a "smart host" in sendmail on the sipXecs server, then recompiled the configs as you need to do with sendmail. 
1. Flushed the sendmail queue.

And boom, all of a sudden, email is flowing and we've got (a lot) of mail. 

Let's loop back a sec:

### What should /etc/hosts look like

Basically, like this, assuming a hostname of ``sipserver1`` and a domain name of ``ourtest.com``: 

{{< prism bash command-line >}}cat /etc/hosts
    192.168.10.10 sipserver1.ourtest.com sipserver1
    127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4 sipserver1
    127.0.1.1   sipserver1
    ::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
{{< /prism >}}

SipXecs does fill in the hosts file for you, but this one you can edit, without sipXecs overwriting it automatically. Just make sure the information matches what's represented in your sipXecs settings. 

### Edit and recompile Sendmail config

{{< figure1 link="/img/sendmail_logo.gif" src="/img/sendmail_logo.gif" type="Logo" title="Sendmail.org" class="" >}}

Sendmail's a beast, but basically here's what I did this time.

First, change into the ``/etc/mail`` directory (I'm using Centos 6.2 for this), and edit the ``sendmail.mc``.

{{< prism bash command-line >}}cd /etc/mail
vim sendmail.mc
{{< /prism >}}

Search for the line with ``SMART_HOST`` near the top, uncomment it (remove the dnl #), and add the Gmail smart host hostname. 

{{< prism bash >}}define(`SMART_HOST', `smtp-relay.gmail.com')dnl
{{< /prism >}}

{{% aside1 %}}
**Note** - see the odd way of using a combination of backticks and single straight quotes? Careful! Here's Michael Breen's [reference](http://mbreen.com/m4.html) on the M4 macro language. 
{{% /aside1 %}}

Now you need to recompile the sendmail.mc file, do a ``make`` in the mail folder, and then restart the ``sendmail`` service.

{{< prism bash command-line >}}cd /etc/mail
m4 sendmail.mc > sendmail.cf
make
service sendmail restart
{{< /prism >}}

Finally, while checking your ``maillog`` and sendmail queue, enter the queue flush command:

{{< prism bash command-line >}}tail -n 100 /var/log/maillog
mailq
sendmail -OTimeout.hoststatus=0m -q -v
{{< /prism >}}

For me, mail started to flow after I flushed the queue, after the configuration step. 

_I hope this post saves someone some time. Stay safe out there, kids._

{{% ack1 %}}
The banner photo is a monochrome version of some Pony Express postmarks, in keeping with the "postal" theme. You can view the original [here](https://commons.wikimedia.org/wiki/File:Postmarks_Pony_Express.jpg).
{{% /ack1 %}}
