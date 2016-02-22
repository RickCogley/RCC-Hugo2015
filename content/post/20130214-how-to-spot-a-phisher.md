---
title: "How to Spot a Phisher"
subtitle: ...true scum of the Internet
slug: how-to-spot-a-phisher
publishdate: 2013-02-14T12:33:19+09:00
date: 2016-02-22T14:30:19+09:00
banner: /img/Cogley-Banner-Japan-Fishing-Boat-1400x520.jpg
images:
  - /img/Cogley-Post-Phishing-Annotated.jpg
  - /img/Cogley-Post-Paypal-SSL-Certificate-Verification.jpg
  - /img/rick-cogley-avatar-240x240.png
  - /img/Cogley-Banner-Japan-Fishing-Boat-1400x520.jpg
description: I got a Twitter DM from a friend, which turned out to be a phishing link and not a legit message. How to avoid and report phishing scams, by Rick Cogley.
topics: [Tips, Security]
tags: [twitter,phishing,secure,scam,bitcoin,ransomware,fake,torrentlocker]
draft: "true"
aliases:
  - /articles/2013/02/14/how-to-spot-a-phisher/
postsummary: Phishing is a problem you hear about in the news, that "happens to other people". I like to think of myself as aware and immune, but I clicked a link that came in from a friend, and it was phishing site. Luckily I noticed in time. Here's some things you can look out for.
postsvg: icon-origami-butterfly
---

Phishing is a problem you hear about in the news, that "happens to other people". I like to think of myself as aware and immune, but I clicked a link that came in from a friend, and it was phishing site. Luckily I noticed in time. Here's some things you can look out for.

<!--more-->

## What's phishing?

{{< figure1 link="/img/Cogley-Post-Phishing-Annotated.jpg" src="/img/Cogley-Post-Phishing-Annotated.thumb.jpg" type="Screenshot" title="Phishing Annotated, how to spot a phishing site" class="" >}}

I have no patience for the small-minded wastrel "phisher" scum criminals, who sit there developing all manner of ways to scam people. To _phish_ is to "fish" for information from unsuspecting people, by presenting a website that looks exactly like that of your bank website, or social network site such as Twitter, LinkedIn, Facebook, Google+ and so on.

You see a link in an email, click on it, and are presented with a login website. You might then proceed to enter your login and password credentials, but in the case of a phishing site, you are simply passing your name and password to the phisher who set the site up.

### What happened?

This happened to me this past weekend. I got a "check this photo of you out" email, indicating a direct message via Twitter, but it was from a friend, so I went and clicked the link in it. A couple of things I observed after that, told me it was not right -

1. the browser refreshed multiple times
1. the domain was a misspelling of twitter
1. I was already logged into Twitter so why would it be asking me to log in again?

The second is obvious. Why would Twitter mis-spell their own domain. The first, not so obvious, but it indicates that the shortened link in the email message was linked to another shortcut link, linking to another shortcut link, and so on. A sign someone is trying to cover their tracks. The third made me sit up and take notice.

I made a few checks -

* took at look at the web page source (`ctrl-option-u`), and sure enough there were misspellings and odd links in there - very unofficial looking.
* checked my Twitter, but I had no such DM from my friend in my Twitter account, which should have been there, if it was legitimate.

So I deleted the mail after taking a screenshot, and gave my friend a heads-up alert to change his password right away.

### Various Phishing Scams

This sort of scam is pretty rampant these days. Here's a couple more examples:

* "[Spear Phishing](http://us.norton.com/spear-phishing-scam-not-sport/article)", where a friend asks for passwords or other credentials. Similarly, "Whaling" is Spear Phishing against high-value targets such as C-level executives or Government Officials.  "[TorrentLocker](https://blogs.sophos.com/2015/12/23/the-current-state-of-ransomware-torrentlocker/)" phishing scam combines phishing via official-looking email from the Royal Mail, with ransomware, where your files get locked, and you must pay a ransom with bitcoin.
* You might receive a call from "tech support" from your Internet provider, telling you they need to connect to your computer, asking for your credit card info, or asking you to change your password for security reasons. Never comply with unsolicited tech support requests.
* The "ore ore" scam in Japan. This is not even an online scam, but it involves your "son" calling, saying "it's me, it's me" and asking for money. A surprising number of elderly in Japan fall for this.

## How can you avoid phishing scams?

{{< figure1 link="/img/Cogley-Post-Paypal-SSL-Certificate-Verification.jpg" src="/img/Cogley-Post-Paypal-SSL-Certificate-Verification.thumb.jpg" type="Screenshot" title="Paypal browser SSL being verified" class="" >}}

There are a number of things you can do, to avoid falling prey to these sorts of scams:

* never comply with _any_ urgent requests for info via email, and always check. If it looks like your bank, call them and ask about status (but call using the number on your bank book or checkbook, that you know is good, rather than using a number that is _presented_ to you in the phishing email itself). Along the same lines, use your _own_ bookmarks to navigate to the banking site, and not any that have come in via email.
* be aware phishers leverage typically upsetting news, saying things like "your account is closed due to non-payment" or "you must respond to this subpoena" and things of that nature. Your default stance needs to be one of disbelief. Confirm before you believe.
* watch for mis-spellings in the URL or in the body of the site itself. Most organizations are very careful about releasing poorly worded emails or web pages. In fact, you might want to view your email in plain text only. If it seems off, check for it on [Snopes](http://www.snopes.com); maybe someone has fallen for it before.
* don't click, hover your mouse over any links in email, and see if the popup "tooltip" shows some different web address from what is shown in the email.
* are you already logged into the related website? If so, think: why are they asking you again so soon; is that normal? If you are using the same browser, that typically does _not_ happen.
* learn how to confirm an SSL certificate. Generally, B2C business sites will purchase an SSL certificate, which proves to you that they are who they say they are. See the screenshot for what it looks like in Chrome, but other browsers have a similar lock icon for any ``https`` site you visit.
* be aware of legitimate messages from banks and other organizations, telling you what their behavior will be in cases your account is going to be closed or the link. I have received several, like: "we will never request your password via email".
* watch out for variations of an electronic phishing scam, in that a caller identifying themselves as an officer of the organization, "calling just to confirm something; could you please give me your PIN number?" A bank would never give its staff such an absurd directive.
* use hard-to-guess passwords which are different from system to system - your Twitter, Flickr, and Google+ passwords _must_ all be different from one another.

## Reporting Phishing Scams

Most countries have task forces against phishing. If you discover a phishing attempt, you should report it to the relevant authority. For instance:

* Japan - [Phishing #110](http://www.npa.go.jp/cyber/policy/phishing/phishing110.htm) (110 is the number for the police in Japan)
* US - [CERT](https://www.us-cert.gov/report-phishing) Computer Emergency Readiness Team
* US - [Federal Trade Commission](https://www.ftccomplaintassistant.gov/)
* UK - [ActionFraud](http://www.actionfraud.police.uk/report_fraud)

Actually, the best thing would be for you to search for the anti-fraud agencies yourself, and _not_ trust this blog post!

Anyway, perhaps this information will help someone stay a little more secure, in the future.

## Updates

* **22 Feb 2016** - some typo and wording fixes; added some info on recent phishing, and hotline urls.
