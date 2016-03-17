---
title: Install Node, Hubot and Redis
subtitle: ...on Webfaction Hosting
slug: install-hubot-and-redis-on-node-on-webfaction
banner: /img/Cogley-Banner-Greeley_Panorama_from_Opportunity_Rover_5th_Martian_Winter.mono.jpg
date: 2016-02-29T13:00:00+09:00
publishdate: 2016-02-29T13:00:00+09:00
description: 'Installing Node.js, Hubot, and Redis for its brain, on Webfaction, a post by Rick Cogley.'
draft: 'true'
images:
  - /img/hubot.png
  - /img/Node.js_logo.svg.png
  - /img/Cogley-Banner-Greeley_Panorama_from_Opportunity_Rover_5th_Martian_Winter.mono.jpg
  - 'http://static.cogley.info/img/rick-cogley-avatar-240x240.png'
tags:
  - Webfaction
  - Node
  - Redis
  - Hubot
  - Chatbot
topics:
  - Software
  - Tips
  - Sysadmin
postsummary: If you're looking for a good way to run your Node.js-based Hubot chatbot, you can host it on Webfaction, a rock-solid hosting service, complete with Redis to act as its "brain". Read this post to find out how to do it.
postsvg: icon-origami-butterfly
---

If you're looking for a good way to run your Node.js-based Hubot chatbot, you can host it on Webfaction, a rock-solid hosting service, complete with Redis to act as its "brain". Read this post to find out how to do it.

<!--more-->

## Preparation

Hubot runs on Node.js, and Webfaction has a convenient one-click installer to help you prepare an "application" container based on Node. Prep it this way:

1. Login to your dashboard at [my.webfaction.com](http://my.webfaction.com) as always.
1. Add a Node app, selecting ``nodejs 4`` and keeping the "open port" checkbox unselected, since it's not needed. I use ``hubot_01`` for the purposes of the app name in this tutorial. The web GUI assigns a port for the app to use, and you can use this later, so write it down.
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

Let's install Hubot now, and we'll assume you want to connect it to Hipchat, so we need to install the Hipchat adapter. Other adapters are a similar setup concept, although, your mileage may very. Also, the name you use for the folder, is the name that you'll use to call Hubot inside Hipchat. You installed yeoman above, so we'll use that to install Hubot, again in ``webapps/hubot_01``.

{{< prism bash command-line >}}mkdir myhubot
cd myhubot
yo hubot
{{< /prism >}}

Just accept the defaults that yeoman presents, answering the questions, because you can always update the settings by editing the files.

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

The ``Procfile`` is for when you're running Hubot on Heroku, but change the adapter now to ``hipchat``, just in case of a future migration. For Hipchat, you would edit to look like:

{{< prism yaml >}}web: bin/hubot -a hipchat
{{< /prism >}}

### Edit external-scripts.json

Edit the ``external-scripts.json`` file, to remove the ``hubot-heroku-keepalive`` line, since you're not running on Heroku.

### Set up environment variables

Create the file ``webapps/hubot_01/myhubot/bin/.hubotrc``, and put your environment variables in it. You'll load it in the ``start`` script I mention later in the post. Put the port you copied from the web GUI setup, into the ``EXPRESS_PORT`` variable (replace the ``12345`` with your actual port number).

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

When needed, just edit the ``.hubotrc`` file again, and replace the values with your correct ones. Read the docs for the plugins you want to use, since they may describe the variable the plugin requires.

Now you can "source" (load) the variables like this:

{{< prism lang command-line >}}. bin/.hubotrc
{{< /prism >}}

That's a period, followed by the path to the "rc" file with its ``export`` commands (and sometimes other shell commands). The effect is to load the varibles into your shell manually. Normally, you would "source" such a file in a startup script.

### Install dependencies

The Node Package Manager or "npm" has an ``install`` command, that checks your ``package.json``, and installs anything listed which is not already installed in ``node_modules``.

Just run:

{{< prism bash command-line >}}npm install
{{< /prism >}}

# START and stop

~~~bash
#!/bin/sh
mkdir -p /home/mywebfactionuser/webapps/hubot_01/run
pid=$(/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
  pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "sai" ]; then
    exit 0
  fi
fi

cd /home/mywebfactionuser/webapps/hubot_01/myhubot/
. /home/mywebfactionuser/webapps/hubot_01/myhubot/bin/.hubotrc
nohup /home/mywebfactionuser/webapps/hubot_01/myhubot/bin/hubot > /dev/null 2>&1 &
sleep 15
/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node > /home/mywebfactionuser/webapps/hubot_01/run/node.pid
~~~

stop

~~~bash
#!/bin/sh
mkdir -p /home/mywebfactionuser/webapps/hubot_01/run
pid=$(/sbin/pidof /home/mywebfactionuser/webapps/hubot_01/bin/node)
if echo "$pid" | grep -q " "; then
    pid=""
fi
if [ -n "$pid" ]; then
  user=$(ps -p $pid -o user | tail -n 1)
  if [ $user = "sai" ]; then
    kill "$pid"
    rm -f /home/mywebfactionuser/webapps/hubot_01/run/node.pid
  fi
fi
~~~



You can install easily on mac with yo. There aren't really any permission issues to worry about like on linux. The only Heroku specific item I have seen is a keepalive script that you can easily uninstall with npm npm uninstall hubot-heroku-keepalive --save I use the local hubot CLI to test my work first then I start it up with my slack adapter to test there.

May have to remove as follows:
[sai@web322 saiborg]$ rm -rf /home/sai/.npm/hubot-hipchat



===================== THE ACTUAL END ==================





DONE
Login to my.webfaction.com
Add app hubot_01, with nodejs 4, no open port
Note the assigned port
[rcogley@web307 hubot_01]$ export PATH=$PWD/bin/:$PATH
[rcogley@web307 hubot_01]$ npm install -g yo generator-hubot
npm install -g node-gyp
npm install -g pm2
[rcogley@web307 hubot_01]$ npm config set python /usr/local/bin/python2.7
DONE

[rcogley@web307 hubot_01]$ mkdir hubot
[rcogley@web307 hubot_01]$ cd hubot
[rcogley@web307 hubot]$ yo hubot
answer questions
add hubot and adapter
edit externalscript to remove heroku  
DONE

PORT=80 bin/hubot --adapter slack > hubot.log 2>&1 &
16501


Problem? symlink to webapp node
in ~/bin
lrwxrwxrwx 1 rcogley rcogley    40 Dec 14  2013 node -> /home/rcogley/webapps/es_node01/bin/node
lrwxrwxrwx 1 rcogley rcogley    38 Dec 14  2013 npm -> ../lib/node_modules/npm/bin/npm-cli.js




## Install Redis

Now install Redis to act as Hubot's "brain". Login to your Webfaction shell.

{{< prism bash command-line >}}ssh myuser@myuser.webfactional.com
{{< /prism >}}

Then download latest Redis their download site. Here's what it looks like for Redis version ``2.6.16``.

{{< prism bash command-line >}}cd ~
mkdir -p ~/src/
cd ~/src/
wget http://download.redis.io/releases/redis-2.6.16.tar.gz
tar -xzf redis-2.6.16.tar.gz
cd redis-2.6.16/
{{< /prism >}}

Assuming your Webfaction server is a 64-bit server (the command ``uname -m`` should return ``x86_64``), you then just run ``make`` from within the ``redis-2.6.16`` folder.



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




{{% ack1 %}}
The banner photo is a monochrome of 'Greeley Panorama' from Mars Rover Opportunity's Fifth Martian Winter. I thought a real robot would be appropriate for this post. Original can be found [here](https://commons.wikimedia.org/wiki/File:%27Greeley_Panorama%27_from_Opportunity%27s_Fifth_Martian_Winter.jpeg) on Wikimedia Commons.

Thanks to Stack Overflow user "Akseli" for [this](http://stackoverflow.com/questions/18622630/setting-up-redis-on-webfaction) post on installing Redis on Webfaction.
{{% /ack1 %}}
