---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
title: Node, Hubot and Redis
subtitle: ... on Webfaction
slug: install-hubot-and-redis-on-node-on-webfaction
banner: /img/Cogley-Banner-Train-Romance-Car-1170x350-003-mono.jpg
banneralt: 'Photo of the Romance Car bound for Hakone, near Yoyogi Koen stop, by Rick Cogley.'
date: 2015-11-20T13:00:00+09:00
publishdate: 2015-11-20T13:00:00+09:00
description: 'Installing Node, Hubot and Redis for its brain, on Webfaction, a post by Rick Cogley.'
draft: 'true'
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
  - Webfaction
  - Node
  - Redis
  - Hubot
topics:
  - Software
  - Tips
---

===================== THE ACTUAL START ==================
Wondering if you can install Hubot with Redis on Webfaction? Here's one way to do it.

<!--more-->

## Preparation

Hubot runs on Node.js, and fortunately Webfaction has a one-click installer for that. Prep it this way:

1. Login to [my.webfaction.com](http://my.webfaction.com).
1. Add a Node app, selecting ``nodejs 4`` and keeping the "open port" checkbox unselected, since it's not needed. I use ``hubot_01`` for the purposes of the app name in this tutorial. The web GUI assigns a port for the app to use, and you can use this later, so write it down.
1. Open an ``ssh`` connection to your Webfaction server.

Now, cd into your app folder, add ``bin`` to your ``PATH``, verify ``npm`` version, and update ``npm`` itself to get the latest.

~~~bash
[me@myhost ~]$ cd webapps/hubot_01
[me@myhost hubot_01]$ export PATH=$PWD/bin/:$PATH
[me@myhost hubot_01]$ npm -v
    2.14.2
[me@myhost hubot_01]$ npm update -g npm
[me@myhost hubot_01]$ npm -v
    3.3.9
~~~

Now you need to set a couple things so Python 2.7 is used, instead of a later version.

~~~bash
[me@myhost hubot_01]$ export PYTHON=python2.7
[me@myhost hubot_01]$ npm config set python /usr/local/bin/python2.7
~~~

Then install some needed modules:

~~~bash
[me@myhost hubot_01]$ npm install -g yo generator-hubot css-select css-what node-gyp pm2 node-xmpp-core
~~~

You'll see something like this if it works:

~~~bash
Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✔ NODE_PATH matches the npm root
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version

Everything looks all right!
/home/me/webapps/hubot_01/lib
├─┬ generator-hubot@0.3.1
│ ├─┬ chalk@0.5.1
│ │ ├── ansi-styles@1.1.0
│ │ ├── escape-string-regexp@1.0.3
...
~~~

## Create a Hipchat User

Create a Hipchat user for your Hubot to use for connecting to Hipchat rooms, in the Hipchat web admin interface. Retrieve its Jabber ID from its user settings, specifically [XMPP/Jabber account settings](https://www.hipchat.com/account/xmpp) (it looks something like ``12345_9876543@chat.hipchat.com``). Also note down the password, because you'll nee to put it in an environment variable.

## Install Hubot

Let's install hubot now, and we'll assume you want to connect it to Hipchat, so we need to install the Hipchat adapter. Other adapters are a similar setup concept. Also, the name you use for the folder, is the name that you'll use to call Hubot inside Hipchat. You installed yeoman above, so we'll use that to install Hubot.

~~~bash
[me@myhost hubot_01]$ mkdir myhubot
[me@myhost hubot_01]$ cd myhubot
[me@myhost hubot_01/myhubot]$ yo hubot
~~~

Just accept the defaults that yeoman presents, because we can update them next.

### Edit package.json

Edit "package.json", add the ``hubot-hipchat`` dependency, and remove the ``hubot-heroku-keepalive`` dependency, since we are not running on Heroku. You can confirm the version of ``hubot-hipchat`` on <https://npmjs.org/package/hubot-hipchat>. Also update "author" and "description" settings.  

~~~bash
{
  "name": "myhubot",
  "version": "0.0.0",
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
~~~

You can add the ``hubot-hipchat`` line anywhere, but, mind the commas when you edit the file. You can learn more about Node's ``package.json`` file and its dependency codes such as the "^" and ">=" [here](https://docs.npmjs.com/files/package.json).

### Edit Procfile

The ``Procfile`` is for running on heroku, but change the adapter now to ``hipchat``, just in case of a future migration.

~~~bash
web: bin/hubot -a hipchat
~~~

### Edit external-scripts.json

Remove the ``hubot-heroku-keepalive`` line from the ``external-scripts.json`` file, since you're not running on Heroku.

### Set up environment variables

Create an rc file in ``webapps/hubot_01/myhubot/bin/.hubotrc``, and put your environment variables in it. You'll source it in the ``start`` file. Put the port you copied from the web GUI setup, into the ``EXPRESS_PORT`` variable.

~~~bash
export PATH="/home/me/webapps/hubot_01/bin/:$PATH"
export PYTHON="python2.7"
export EXPRESS_PORT="12345"
export HUBOT_PATH="/home/me/webapps/hubot_01/myhubot/bin/hubot"
export HUBOT_NAME="myhubot"
export TZ="Japan"
export HUBOT_AUTH_ADMIN="1"
export HUBOT_ADAPTER="hipchat"

export HUBOT_HIPCHAT_JID="12345_9876543@chat.hipchat.com"
export HUBOT_HIPCHAT_PASSWORD="!!-wareware-UCHUJIN-42"
export HUBOT_HIPCHAT_ROOMS="All"
export HUBOT_HIPCHAT_JOIN_ROOMS_ON_INVITE="true"
export HUBOT_HIPCHAT_JOIN_PUBLIC_ROOMS="false"
~~~

Depending upon the scripts you choose to load later, you may need other variables, like these:

~~~bash
export HUBOT_BITLY_ACCESS_TOKEN="A_AAAAAAAAAAAAAAAAAAAAAAAAAAA"
export HUBOT_WOLFRAM_APPID="AAAAA-BBBBBBBBB"
export HUBOT_WUNDERGROUND_API_KEY="12345e98765432"
export HUBOT_WUNDERGROUND_USE_METRIC="Yes"
export WOTD_PROVIDER="wordnik"
export WORDNIK_API_KEY="1a2345678bc987654321ab1234"
~~~

When needed, just edit the ``.hubotrc`` file again, and Replace the values with your correct ones.

Now "source" (load) the variables like this:

~~~bash
[me@myhost hubot_01/myhubot]$ . bin/.hubotrc
~~~

The initial dot is just shorthand for loading the rc file, running all the commands within it.

### Install dependencies

Npm lets you run a check to see if everything in your ``package.json`` is already loaded, and load it if not.

Just run:

~~~bash
[me@myhost hubot_01/myhubot]$ npm install
~~~

# START and stop

~~~bash
#!/bin/sh
mkdir -p /home/me/webapps/hubot_01/run
pid=$(/sbin/pidof /home/me/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
  pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "sai" ]; then
    exit 0
  fi
fi

cd /home/me/webapps/hubot_01/myhubot/
. /home/me/webapps/hubot_01/myhubot/bin/.hubotrc
nohup /home/me/webapps/hubot_01/myhubot/bin/hubot > /dev/null 2>&1 &
sleep 15
/sbin/pidof /home/me/webapps/hubot_01/bin/node > /home/me/webapps/hubot_01/run/node.pid
~~~

stop

~~~bash
#!/bin/sh
mkdir -p /home/me/webapps/hubot_01/run
pid=$(/sbin/pidof /home/me/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
    pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "sai" ]; then
    kill "$pid"
    rm -f /home/me/webapps/hubot_01/run/node.pid
  fi
fi
~~~



You can install easily on mac with yo. There aren't really any permission issues to worry about like on linux. The only Heroku specific item I have seen is a keepalive script that you can easily uninstall with npm npm uninstall hubot-heroku-keepalive --save I use the local hubot CLI to test my work first then I start it up with my slack adapter to test there.

May have to remove as follows:
[sai@web322 saiborg]$ rm -rf /home/sai/.npm/hubot-hipchat



===================== THE ACTUAL END ==================






Login to my.webfaction.com
Add app hubot_01, with nodejs 4, no open port
Note the assigned port
[rcogley@web307 hubot_01]$ export PATH=$PWD/bin/:$PATH
[rcogley@web307 hubot_01]$ npm install -g yo generator-hubot
npm install -g node-gyp
npm install -g pm2
[rcogley@web307 hubot_01]$ npm config set python /usr/local/bin/python2.7

[rcogley@web307 hubot_01]$ mkdir hubot
[rcogley@web307 hubot_01]$ cd hubot
[rcogley@web307 hubot]$ yo hubot
answer questions
add hubot and adapter
edit externalscript to remove heroku  

PORT=80 bin/hubot --adapter slack > hubot.log 2>&1 &
16501


Problem? symlink to webapp node
in ~/bin
lrwxrwxrwx 1 rcogley rcogley    40 Dec 14  2013 node -> /home/rcogley/webapps/es_node01/bin/node
lrwxrwxrwx 1 rcogley rcogley    38 Dec 14  2013 npm -> ../lib/node_modules/npm/bin/npm-cli.js




Install Redis

Login to your Webfaction shell

ssh foouser@foouser.webfactional.com
Download latest Redis from Redis download site.

> mkdir -p ~/src/
> cd ~/src/
> wget http://download.redis.io/releases/redis-2.6.16.tar.gz
> tar -xzf redis-2.6.16.tar.gz
> cd redis-2.6.16/
Before the make, see is your server Linux 32 or 64 bit. The installation script does not handle 32 bit environments well, at least on Webfaction's CentOS 5 machines. The command for bits is uname -m. If Linux is 32 bit the result will be i686, if 64 bit then x86_64. See this answer for details.

> uname -m
i686
If your server is 64 bit (x86_64) then just simply make.

> make
But if your server is 32 bit (i686) then you must do little extra stuff. There is a command make 32bit but it produces an error. Edit a line in the installation script to make make 32bit to work.

> nano ~/src/redis-2.6.16/src/Makefile
Change the line 214 from this

$(MAKE) CFLAGS="-m32" LDFLAGS="-m32"
to this

$(MAKE) CFLAGS="-m32 -march=i686" LDFLAGS="-m32 -march=i686"
and save. Then run the make with 32bit flag.

> cd ~/src/redis-2.6.16/  ## Note the dir, no trailing src/
> make 32bit
The executables were created into directory ~/src/redis-2.6.16/src/. The executables include redis-cli, redis-server, redis-benchmark and redis-sentinel.

Install Hubot
Having done all our preparation the final step is relatively easy. First off we're going to install hubot as a global Node.js module

npm install -g hubot
Then pick where you want your new bot to reside. I've used my home directory for this guide. Move into that location and create a new hubot and install it.

cd
hubot --create hubot
cd hubot
npm install
The final command above installs the bot with its dependencies and the standard package of scripts that you can use with hubot.

Once this has completed, run the following command to check everything is working

./bin/hubot
Your new bot should start up and you can have a chat with it.

Hubot> hubot ping
Hubot> PONG
Hubot> hubot image me success
Hubot> http://www.drsunil.com/wp/wp-content/uploads/2013/06/success-on-mountain-top-shutterstock_115642099.jpg#.png
Hubot>


..but if I were you, I would *always* use "local" installation mode (without the -g) because it provides better isolation between your web apps.  Node's module search algorithm is very convenient for local, app-specific module installs (basically just put them inside a node_modules directory next to your .js file).



<figure class="photo-inline-right">
  <a href="/img/Cogley-Post-PFU-HHKB-Pro-JP.jpg" title="" data-lightbox="set1" data-title="PFU HHKP Pro JP Type-S keyboard"><img class="photo300 pure-img" src="/img/Cogley-Post-PFU-HHKB-Pro-JP.jpg" alt="Photo showing a PFU HHKP Pro JP Type-S keyboard" ></a>
  <figcaption><em>Photo</em>: Rick's PFU HHKB Pro JP keyboard</figcaption>
</figure>
