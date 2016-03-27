---
title: "View Source in Mail.app"
subtitle: Get technical information about emails quickly.
slug: view-source-in-mail-dot-app
publishdate: 2016-03-27T09:30:00+09:00
date: 2016-03-27T09:30:00+09:00
banner: /img/Cogley-Banner-JR_Totsuka_Near_Totsukana-Mono2.jpg
images:
  - /img/Cogley-Post-Show-Mail-app-Headers.jpg
  - /img/Cogley-Banner-JR_Totsuka_Near_Totsukana-Mono2.jpg
  - /img/rick-cogley-avatar-240x240.png
description: Post about the keyboard shortcut you can use to view headers of emails in OS X Mail.app, and how this is the same as view-source in Safari, by Rick Cogley.
topics: [Tips,Software]
tags: [Mail.app, keyboard shortcut, view source, email, headers, scam, phishing, trace, osx]
draft: "false"
postsummary: Want an easy way to see mail headers in Mail.app? Try this trick and they'll pop right up. I promise you'll like it.
postsvg: icon-origami-butterfly
aliases:
  - /articles/2013/01/30/view-source-in-mail-dot-app/
---

Want an easy way to see mail headers in Mail.app? Try this. They'll pop right up, and I promise you'll like it.

<!--more-->

I discovered this keyboard shortcut for viewing a message's headers by accident, and it is useful so I thought I would share it.

## View a Mail Message's Headers

I was context-switched to Mail.app the other day when I tried viewing source on a web page, and what do you know? A window popped up with the full html source of the selected email message, including its headers.

My fingers are used to pressing ``command-option-u`` to "view source" in browsers on my Mac, and it just so happens, that that is also the command for "view source" for messages in Mail.app.

{{< figure1 link="/img/Cogley-Post-Show-Mail-app-Headers.jpg" src="/img/Cogley-Post-Show-Mail-app-Headers.thumb.jpg" type="Screenshot" title="Mail.app view source on a selected message" class="" >}}

You can also view the headers _in situ_ in the mail message, by pressing ``command-shift-h`` if that is your preference.

## Why View Headers?

No idea what this is all about or why you'd need it? Here's some ideas of when you might need to view a message's headers:

* to see the path of how an email was delivered from source to destination
* to get information about an email if you believe it's a phishing or other type of scam email
* to help your IT support figure out a problem with your email
* to learn more about how email works

The below paste is the somewhat-edited headers of a scummy phishing email, by the way. The attachment on the email was an attachment that included "ransomware". If you get infected by it, you have to pay the scammer for a key to unlock your system. Email headers are in reverse chronological order, so you are listed at the top, while the sender is listed at the bottom, with all the steps between.  

{{% aside1 %}}
Try **``cmd-option-u``** in Mail.app, Safari and Chrome.
{{% /aside1 %}}

Normally, you would not need to look at them, but when you need to, the shortcuts above will help you get it done quickly, in Mail.app on OS X. You can also use this keyboard shortcut if you're curious about how a specific web page is put together, by doing "view source" on some web page.

Good to know, good to know.

{{< prism processing >}}Delivered-To: someuser@ourco.com
Received: by 10.76.28.129 with SMTP id b1...h;
        Wed, 23 Mar 2016 12:58:50 -0700 (PDT)
X-Received: by 10.194.60.200 with SMTP id j8...3;
        Wed, 23 Mar 2016 12:58:50 -0700 (PDT)
Return-Path: <admgroup+bn...Y@ourco.com>
Received: from mail-wm0-x246.google.com (mail-wm0-x246.google.com. [2a00:1450:400c:c09::246])
        by mx.google.com with ESMTPS id c1...jr.29.2016.03.23.12.58.50
        for <someuser@ourco.com>
        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);
        Wed, 23 Mar 2016 12:58:50 -0700 (PDT)
Received-SPF: pass (google.com: domain of admgroup+bn...Y@ourco.com designates 2a00:1450:400c:c09::246 as permitted sender) client-ip=2a00:1450:400c:c09::246;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@ourco.com;
       spf=pass (google.com: domain of admgroup+bn...Y@ourco.com designates 2a00:1450:400c:c09::246 as permitted sender) smtp.mailfrom=admgroup+bn...Y@ourco.com
Received: by mail-wm0-x246.google.com with SMTP id u125sf10817292wmg.0
        for <someuser@ourco.com>; Wed, 23 Mar 2016 12:58:50 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=ourco.com; s=google;
        h=sender:from:to:subject:mime-version:message-id:date
         :x-original-sender:x-original-authentication-results:precedence
         :mailing-list:list-id:list-post:list-help:list-archive
         :list-unsubscribe:reply-to;
        bh=TXh//y6RAZ1tDstDzN20K...
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20130820;
        h=sender:x-gm-message-state:from:to:subject:mime-version:message-id
         :date:x-original-sender:x-original-authentication-results:precedence
         :mailing-list:list-id:list-post:list-help:list-archive
         :list-unsubscribe:reply-to;
        bh...
Sender: admgroup@ourco.com
X-Gm-Message-State: AD...pPw==
X-Received: by 10.112.141.33 with SMTP id rl...4;
        Wed, 23 Mar 2016 12:58:49 -0700 (PDT)
X-BeenThere: admgroup@ourco.com
Received: by 10.25.127.3 with SMTP id a3...3.gmail; Wed, 23 Mar 2016
 12:58:49 -0700 (PDT)
X-Received: by 10.25.34.213 with SMTP id i2...47;
        Wed, 23 Mar 2016 12:58:49 -0700 (PDT)
Received: from 84-255-239-156.static.t-2.net (84-255-239-156.static.t-2.net. [84.255.239.156])
        by mx.google.com with ESMTP id m2...08
        for <admgroup@ourco.com>;
        Wed, 23 Mar 2016 12:58:49 -0700 (PDT)
Received-SPF: fail (google.com: domain of LeachJimmie5698@t-2.net does not designate 84.255.239.156 as permitted sender) client-ip=84.255.239.156;
From: "'Jimmie Leach' via ! Ourco Admin" <admgroup@ourco.com>
To: admgroup <admgroup@ourco.com>
Subject: FW: Payment Details - [541994]
MIME-Version: 1.0
Message-Id: <34...E0@ourco.com>
Date: Wed, 23 Mar 2016 20:57:03 +0200
Content-Type: multipart/mixed;
	boundary="----==--bound.01464.a37cb2fe.ourco.com"
X-Original-Sender: leachjimmie5698@t-2.net
X-Original-Authentication-Results: mx.google.com;       spf=fail (google.com:
 domain of LeachJimmie5698@t-2.net does not designate 84.255.239.156 as
 permitted sender) smtp.mailfrom=LeachJimmie5698@t-2.net;       dmarc=fail
 (p=QUARANTINE dis=QUARANTINE) header.from=t-2.net
Precedence: list
Mailing-list: list admgroup@ourco.com; contact admgroup+owners@ourco.com
List-ID: <admgroup.ourco.com>
X-Google-Group-Id: 68...45
List-Post: <https://groups.google.com/a/ourco.com/group/admgroup/post>,
 <mailto:admgroup@ourco.com>
List-Help: <https://support.google.com/a/ourco.com/bin/topic.py?topic=25838>,
 <mailto:admgroup+help@ourco.com>
List-Archive: <https://groups.google.com/a/ourco.com/group/admgroup/>
List-Unsubscribe: <mailto:googlegroups-manage+68...5+unsubscribe@googlegroups.com>,
 <https://groups.google.com/a/ourco.com/group/admgroup/subscribe>
X-Original-From: Jimmie Leach <LeachJimmie5698@t-2.net>
Reply-To: Jimmie Leach <LeachJimmie5698@t-2.net>

------==--bound.01464.a37cb2fe.ourco.com
Content-Transfer-Encoding: 8bit
Content-Type: text/plain
{{< /prism >}}


{{% ack1 %}}
The banner photo is a photo I took at Totsuka station, on the bridge between the station and the Totsukana shopping mall. You can see the original [here](https://www.flickr.com/photos/rickcogley/5135448447).
{{% /ack1 %}}
