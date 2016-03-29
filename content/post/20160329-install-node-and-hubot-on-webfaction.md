---
title: Install Hubot Chatbot on Webfaction
subtitle: Get your chatops up and running inexpensively
slug: install-node-and-hubot-on-webfaction
banner: /img/Cogley-Banner-Greeley_Panorama_from_Opportunity_Rover_5th_Martian_Winter.mono.jpg
date: 2016-03-29T13:55:00+09:00
publishdate: 2016-03-29T13:55:00+09:00
description: 'Installing Node.js and Hubot chatbot on Webfaction hosting, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/hubot.png
  - /img/Node.js_logo.svg.png
  - /img/Cogley-Banner-Greeley_Panorama_from_Opportunity_Rover_5th_Martian_Winter.mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - Webfaction
  - Node
  - Hubot
  - Chatbot
  - Chatops
  - Yeoman
  - Hipchat
  - package.json
  - npm
topics:
  - Software
  - Tips
  - Sysadmin
postsummary: If you're looking for a good way to run your Node.js-based Hubot chatbot, you can host it on Webfaction, a rock-solid hosting service. Read this post to find out how to do it.
postsvg: icon-origami-butterfly
---

If you're looking for a good way to run your Node.js-based **Hubot** chatbot, you can host it on [Webfaction](http://www.webfaction.com/?affiliate=rcogley), a rock-solid hosting service. Read this post to find out how to do it.

<!--more-->

## Introduction

[Hubot](https://hubot.github.com/) is a "chatbot" that was written by Github, originally for their internal use and later open sourced so others can use it. Chatbots are programs that you run as a separate server service, to interact with your chat rooms on services like Slack, Flowdock or Hipchat.

They often serve as a kind of digital butler, to respond to searches within chat for images or information, to post about inbound trouble tickets, or to alert staff to server outages.

Besides Hubot, there are many chatbots in various programming languages or for different purposes:

* [Lita](https://www.lita.io/) and [Errbot](http://errbot.io/) are chatbots written in Ruby and Python respectively, similar in function to Hubot.
* [Mitsuku](http://mitsuku.com/), is designed to act like a teenager from Leeds and is famous on Kik.
* Apple's [Siri](https://en.wikipedia.org/wiki/Siri) is a form of voice-activated chatbot for iPhone.
* Tay was a short-lived chatbot by Microsoft, which people manipulated to make it respond in racist and other inappropriate ways. MS soon disabled it, but should have known better than to release Tay without safeguards.

This post is about getting Hubot running on [Webfaction](http://www.webfaction.com/?affiliate=rcogley), and having it interact with your HipChat rooms. It assumes some competence at the Terminal and that you have a Webfaction account. Actually, this should work in a similar environment, in which you can host a Node.js app with its own port.  

## Preparation

Hubot runs on Node.js, and [Webfaction](http://www.webfaction.com/?affiliate=rcogley) has a convenient one-click installer to help you prepare an "application" container based on Node. Prep it this way:

1. Login to your dashboard at [my.webfaction.com](http://my.webfaction.com) as always.
1. Add a Node app, selecting ``nodejs 4`` and keeping the "open port" checkbox unselected, since it's not needed. I use ``hubot_01`` for the purposes of the app name in this tutorial. The web GUI assigns a port for the app to use, and write it down for later use.
1. Open an ``ssh`` connection to your Webfaction server.

Next, cd into your app folder, add ``bin`` to your ``PATH``, verify ``npm`` version, and update ``npm`` itself to get the latest.

{{< prism bash command-line >}}cd webapps/hubot_01
export PATH=$PWD/bin/:$PATH
npm -v
   2.14.2
npm update -g npm
...
npm -v
   3.3.9
{{< /prism >}}

{{< figure1 link="/img/Node.js_logo.svg.png" src="/img/Node.js_logo.svg.png" type="Logo" title="Node.js" class="" >}}

Now you need to make a couple of settings so that Python version 2.7 is used, instead of a later version.

{{< prism bash command-line >}}export PYTHON=python2.7
npm config set python /usr/local/bin/python2.7
{{< /prism >}}

Then install some needed node modules (assuming you're still in ``webapps/hubot_01``):

{{< prism bash command-line >}}npm install -g yo generator-hubot css-select css-what node-gyp pm2 node-xmpp-core
{{< /prism >}}

You'll see something like this if it works:

{{< prism bash >}}Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✔ NODE_PATH matches the npm root
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version

Everything looks all right!
/home/mywebfactionuser/webapps/hubot_01/lib
├─┬ generator-hubot@0.3.1
│ ├─┬ chalk@0.5.1
│ │ ├── ansi-styles@1.1.0
│ │ ├── escape-string-regexp@1.0.3
...
{{< /prism >}}

## Create a Hipchat User

{{< figure1 link="/img/hipchat.png" src="/img/hipchat.thumb.png" type="Logo" title="Atlassian Hipchat" class="" >}}

Create a Hipchat user for your Hubot to use for connecting to Hipchat rooms, in the Hipchat web admin interface. Retrieve its Jabber ID from its user settings, specifically [XMPP/Jabber account settings](https://www.hipchat.com/account/xmpp) (it looks something like ``12345_9876543@chat.hipchat.com``). Also note down the password, because you'll need to store it in an environment variable.

## Install Hubot

{{< figure1 link="/img/hubot.png" src="/img/hubot.thumb.png" type="Logo" title="Github Hubot" class="" >}}

Let's install Hubot now, and we'll assume you want to connect it to Hipchat, so we need to install the Hipchat adapter. Other adapters are a similar setup concept, although, your mileage may vary (because the adapters themselves are open source).

Also, the name you use for the folder, is the name that you'll use to call Hubot inside Hipchat. You installed yeoman above, so we'll use that to install Hubot, again in ``webapps/hubot_01``.

{{< prism bash command-line >}}mkdir myhubot
cd myhubot
yo hubot
{{< /prism >}}

Just accept the defaults that yeoman presents, answering the questions, because you can always update the settings by editing files.

### Edit package.json

Edit ``package.json`` to add the ``hubot-hipchat`` dependency, and remove the ``hubot-heroku-keepalive`` dependency, since we are not running on Heroku. You can confirm the version of ``hubot-hipchat`` on <https://npmjs.org/package/hubot-hipchat>. Also update "author", "description" and "version" settings as you like. The "private" should be set to true, because you are not publishing the package to the node package directory.

{{< prism json >}}{
  "name": "myhubot",
  "version": "0.0.1",
  "private": true,
  "author": "MyHubot <someuser@myco.com>",
  "description": "A simple helpful robot for MyCo",  
  "dependencies": {
    "hubot": "^2.16.0",
    "hubot-scripts": "^2.16.2",
    "hubot-hipchat": ">= 2.12.0 < 3.0.0",
    ...
  },
  ...
}
{{< /prism >}}

You can add the ``hubot-hipchat`` line anywhere, but, mind the commas when you edit the file. You can learn more about Node's ``package.json`` file and its dependency codes such as the ``^`` and ``>=`` [here](https://docs.npmjs.com/files/package.json).

### Edit Procfile

The ``Procfile`` is used when you're running Hubot on Heroku and is not needed for Webfaction. However, change the adapter now to ``hipchat``, just in case of a future migration. For Hipchat, you would edit to look like:

{{< prism yaml >}}web: bin/hubot -a hipchat
{{< /prism >}}

### Edit external-scripts.json

Edit the ``external-scripts.json`` file, to remove the ``hubot-heroku-keepalive`` line, since you're not running on Heroku.

### Set up environment variables

Create the file ``webapps/hubot_01/myhubot/bin/.hubotrc``, and put your environment variables in it. You'll load it in the ``start`` script I mention later in the post. Insert the port you copied from the web GUI setup, into the ``EXPRESS_PORT`` variable (replace the ``12345`` with your actual port number), and other information for the Hipchat login.

{{< prism bash>}}export PATH="/home/mywebfactionuser/webapps/hubot_01/bin/:$PATH"
export PYTHON="python2.7"
export EXPRESS_PORT="12345"
export HUBOT_PATH="/home/mywebfactionuser/webapps/hubot_01/myhubot/bin/hubot"
export HUBOT_NAME="myhubot"
export TZ="Japan"
export HUBOT_AUTH_ADMIN="1"
export HUBOT_ADAPTER="hipchat"

export HUBOT_HIPCHAT_JID="12345_9876543@chat.hipchat.com"
export HUBOT_HIPCHAT_PASSWORD="!!-wareware-UCHUJIN-42"
export HUBOT_HIPCHAT_ROOMS="All"
export HUBOT_HIPCHAT_JOIN_ROOMS_ON_INVITE="true"
export HUBOT_HIPCHAT_JOIN_PUBLIC_ROOMS="false"
{{< /prism >}}

Depending upon the plugin scripts you choose to load later, you may need other variables in this file, such as these:

~~~bash
export HUBOT_BITLY_ACCESS_TOKEN="A_AAAAAAAAAAAAAAAAAAAAAAAAAAA"
export HUBOT_WOLFRAM_APPID="AAAAA-BBBBBBBBB"
export HUBOT_WUNDERGROUND_API_KEY="12345e98765432"
export HUBOT_WUNDERGROUND_USE_METRIC="Yes"
export WOTD_PROVIDER="wordnik"
export WORDNIK_API_KEY="1a2345678bc987654321ab1234"
~~~

When needed, just edit the ``.hubotrc`` file again, and replace the values with your correct ones. Read the docs for the [plugins](https://github.com/hubot-scripts) you want to use, since they may describe the variable the plugin requires.

Now you can "source" (load) the variables like this:

{{< prism lang command-line >}}. bin/.hubotrc
{{< /prism >}}

That's a period, followed by the path to the "rc" file with its ``export`` commands (and sometimes other shell commands). The effect is to load the varibles into your shell manually. Normally, you would "source" such a file in a startup script.

### Install dependencies

{{% aside1 %}}
When you install using npm, I recommend that you always use the _local_ installation mode (without a -g), because you get better isolation between your Node.js apps. The modules get installed in an app-specific ``node_modules`` folder in the root of your Node.js project.
{{% /aside1 %}}

The Node Package Manager or "npm" has an ``install`` command, that checks your ``package.json``, and installs anything listed which is not already installed in ``node_modules``.

Just run:

{{< prism bash command-line >}}npm install
{{< /prism >}}

The ``npm`` will install everything according to your ``package.json``.

### Install Start & Stop Scripts

Create ``start`` and ``stop`` scripts in ``hubot_01/bin`` like these, and edit the ``mywebfactionuser`` to be your own user. Edit ``start`` to contain:

{{< prism bash >}}#!/bin/sh
mkdir -p /home/mywebfactionuser/webapps/hubot_01/run
pid=$(/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
  pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "mywebfactionuser" ]; then
    exit 0
  fi
fi

cd /home/mywebfactionuser/webapps/hubot_01/myhubot/
. /home/mywebfactionuser/webapps/hubot_01/myhubot/bin/.hubotrc
nohup /home/mywebfactionuser/webapps/hubot_01/myhubot/bin/hubot > /dev/null 2>&1 &
sleep 15
/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node > /home/mywebfactionuser/webapps/hubot_01/run/node.pid
{{< /prism >}}

Then edit ``stop`` to contain:

{{< prism bash >}}#!/bin/sh
mkdir -p /home/mywebfactionuser/webapps/hubot_01/run
pid=$(/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
    pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "mywebfactionuser" ]; then
    kill "$pid"
    rm -f /home/mywebfactionuser/webapps/hubot_01/run/node.pid
  fi
fi
{{< /prism >}}

Make the scripts executable by doing ``chmod +x start`` and ``chmod +x stop``. Confirm that they work. You should see the user appear in the Hipchat rooms. You might need to invite the user via its email address.

## Options

You can also enable options like using Redis to act as Hubot's "brain", for persistent storage. Thanks to Stack Overflow user "Akseli" for [this post](http://stackoverflow.com/questions/18622630/setting-up-redis-on-webfaction) on installing Redis on Webfaction.

{{% ack1 %}}
The banner photo is a monochrome of 'Greeley Panorama' from Mars Rover Opportunity's Fifth Martian Winter. I thought a real robot would be appropriate for this post. Original can be found [here](https://commons.wikimedia.org/wiki/File:%27Greeley_Panorama%27_from_Opportunity%27s_Fifth_Martian_Winter.jpeg) on Wikimedia Commons.
{{% /ack1 %}}
