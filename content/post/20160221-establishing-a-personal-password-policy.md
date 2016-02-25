---
title: "Establishing a Personal Password Policy"
subtitle: Do it. Do it right now.
slug: establishing-a-personal-password-policy
publishdate: 2016-02-20T21:00:00+09:00
date: 2016-02-20T21:00:00+09:00
banner: /img/Cogley-Banner-Bletchley_Park_Bombe_by_Antoine_Taveneaux-1400x450-mono.jpg
images:
  - /img/zetetic-codebook-logo-625x625.jpg
  - /img/rick-cogley-avatar-240x240.png
  - /img/Cogley-Banner-Bletchley_Park_Bombe_by_Antoine_Taveneaux-1400x450-mono.jpg
description: A basic personal password security policy, that is easy to implement, by Rick Cogley.
topics: [Security, Tips]
tags: [encryption,password,mnemonic,memory,lastpass,1password,yubico,yubikey,securid,2fa,two-factor,codebook,zetetic,random]
draft: "true"
aliases:
  - /articles/2013/02/18/establishing-a-personal-password-policy/
postsummary: If you are one of those people who uses the same password for every system you use, why would you do that?! With love, stop being such an idiot, and read this post to learn about some reasonable personal security practices.
postsvg: icon-origami-fish
---

If you are one of those people who uses the same password for every system you use, why would you do that?! With all the love in the world, you need to stop being such an idiot, and read this post to learn about some reasonable personal security practices you can implement today.

<!--more-->

## The Tradeoff

One thing is clear: "good security is inversely proportional to convenience and speed." When you begin to increase your awareness of security, this axiom is really driven home. Using different passwords for every system; using strong passwords; encrypting your disk; making sure you have good backups.

All of these things are a bit of a pain. But so is losing your data, or having it stolen or compromised in some way. Nobody's got time for that, so, let's find out how you can take steps to practice better security in your day to day computing life.

## Practical Security Measures

This post lays out a few practical security measures you can and should take in your day to day computing. Let's see where it leads.

### Use strong passwords

{{% aside1 %}}
The topic of password strength is complex, but you can [learn more about it](https://en.wikipedia.org/wiki/Password_strength). Websites such as [this](http://rumkin.com/tools/password/diceware.php) or [this](https://xkpasswd.net/s/) let you generate good passwords, but, change parts of what is generated, for peace of mind in case the site itself has been compromised.
{{% /aside1 %}}

For the myriad of systems you have to connect to these days, you should use a strong password. "Strong" means a password that is long, and has a random mix of capital and lowercase letters, numbers, and symbols. Such passwords are stronger and more resistant to cracking.

For the sake of all that's holy, don't use passwords like ``password``, ``123456``, ``admin``, ``qwerty``, your pet's name, your kid's name, the default password in any system, or any demonstration password from any password generation website, like ``correct horse battery staple``. In fact [here's a list](http://www.whatsmypass.com/the-top-500-worst-passwords-of-all-time) of bad passwords.

For example, this is a strong password:

> ``h#56qbt[S[ceGsNQ_J_(^YaY@]F_tG!z``

Hard to remember and type, though. More on that below.

#### Never the same password for two systems

It's really weak and lazy to use the same password for every system. Even if your _one_ password is strong, the problem is, if someone gets one of your passwords, they get access to all your systems.

They may not _know_ you use the same password everywhere, but a person trying to crack systems would simply test that out. That's why security breaches are such a big deal, because you are in a really weak position once that password is known in public, and, it happens to be the same on all your systems.

You'd need to change it on all systems, just in case. Therefore, set each system to have a different password, for sure. But, you say, having a strong password on _every_ system is nigh impossible to remember.

That's true, so you should use a password manager.

### Use a password manager

{{< figure1 link="/img/zetetic-codebook-logo-625x625.jpg" src="/img/zetetic-codebook-logo-200x200.jpg" type="Logo" title="Zetetic Codebook" class="" >}}

A [password manager](https://en.wikipedia.org/wiki/Password_manager) is a general term for a software application that is used to store your passwords (and sometimes other information) securely, and make it extremely hard to crack.

There are many commercial and open source ones available, but I prefer Zetetic [Codebook](https://www.zetetic.net/codebook/) for my Mac and iOS devices. It is built on particularly [strong security](https://www.zetetic.net/sqlcipher/design/), encrypting the data you store in it fully. From Zetetic's website:

> The encryption used is AES-256 in CBC mode with HMAC page protection and other countermeasures against tampering. Key derivation is 64,000 rounds of PBKDF2 SHA-1 with a unique random salt. The underlying crypto library used depends on platform: OpenSSL's libcrypto on Android and Windows, Common Crypto on iOS and OS X.   

There are password managers like 1Password that use browser plugins, which recognize the website you're visiting and can automatically enter your credentials during the login process. That's convenient, but, it does not let you work with _standard logins_ outside of a website. Codebook gives you a bit more flexibility in this area.

{{< figure1 link="/img/Cogley-Post-Codebook-Secret-Agent-with-PROdb.jpg" src="/img/Cogley-Post-Codebook-Secret-Agent-with-PROdb.thumb.jpg" type="Screenshot" title="Codebook Secret Agent in Use" class="" >}}

You store all your passwords in the flexible & secure Codebook database, and use a key sequence to bring up its "_Secret Agent_". From the Secret Agent, you can easily search, access your credentials and other info, and insert those into the text boxes for, say, your username or password. This works for most login screens, in my experience so far. I like the fact that there _isn't_ a browser plugin, actually. Fewer moving parts.

**So, what's the point?** You can store all your credentials in the vault, which is then opened by a "master password", and then for most passwords, you set them to be really long, random and complex ones. It works because Codebook will enter those for you.

### Strong & easy-to-remember master password

If you decide to use a password manager like Codebook, you should definitely have a strong "master" password. This means, the password you use to unlock your vault, to get access to all your other passwords.

However, using a strong random password like the one cited above, will be quite difficult to remember and type, especially on mobile. Therefore, you can use a password made up of randomly-selected dictionary words as your master password.

For instance, "diceware" is an interesting strong password technique which maps random dice rolls, to words in a word list. If you use 6 or 7 words as the base, with some kind of symbols or numbers between, it works quite well as something memorable for a password manager's master password.

For instance, you can use [this diceware generator site](http://rumkin.com/tools/password/diceware.php) to generate the words for such a password, or [this "xkpassword"](https://xkpasswd.net/s/) site to generator a more ready-made password. Like:

> ``end-shade_DIN=end~Slid:33:apathy``
> ``37=SUMMER~chart_LETTER=ATHENS=PI``

Make it something like that, but something you're comfortable with memorizing.

#### Mnemonic Methods

Speaking of which, you could always use a mnemonic method to remember your password. Say you pick a phrase like "_ring around the rosies, pocketful of posies_"; well, you could pick words that match those words, letting the order jog your memory:

> **r**eal **a**le **t**emp **r**ose **p**atter **o**rgan **p**recious

... then riff off that to create a password you can remember.

### Strong & random master password

If you still feel more comfortable using a strong & random master password for your password manager vault, a couple of tricks are possible.

You can purchase an inexpensive [Yubikey](https://www.yubico.com/products/yubikey-hardware/), and make it work for you. Paraphrasing the Yubico site:

> A YubiKey is a small hardware device that offers two-factor authentication with a simple touch of a button. YubiKeys are built strong enough for the largest enterprises, while remaining simple enough for anyone to use. They support an unlimited number of applications without the need for drivers, client software, or batteries.

{{< figure1 link="/img/Cogley-Post-Yubikey-Personalization-for-Static-Password.jpg" src="/img/Cogley-Post-Yubikey-Personalization-for-Static-Password.thumb.jpg" type="Screenshot" title="How to set the Yubikey's second slot" class="" >}}

One thing that is _not_ immediately apparent, is that Yubikeys come with a second "slot" that you can use for other purposes, including storing a long, static password. You can leverage that fact for storing a strong, random master password for your vault.

Use the YPT, [yubico personalization tool](https://www.yubico.com/products/services-software/personalization-tools/), to program the second slot. View [this video](https://vimeo.com/73619336) to see how, and click the thumbnail to enlarge an annotated screenshot.

Once it's programmed, a "long press" on the Yubikey will trigger it to insert that password. If you want the long press to also emulate pressing the _enter key_ on your keyboard for better automation, with the cursor at the end of your password in the YPT, click the "insert tab" key to add that.

{{% aside1 %}}
**N.b.**: a Yubikey does not detect fingerprints. The metal disc embedded in the Yubikey is a type of capacitive circuit, closed by your touch.
{{% /aside1 %}}

As for entry on mobile, in many password managers, including Codebook, you can also link the entry of the password to the "Touch ID" fingerprint recognition system on your mobile device.

### What if I lose the Yubikey?

Losing your Yubikey is a real issue. One thing you can do is, set your master password to something easy you can remember, followed by a strong random password. It might look like this:

> ``simple/w/nr9h5Gvhmkw>::FSfu&<P=B/aFY"``

You keep the "simple" in your mind, and program the Yubikey to enter the remainder. When you need to enter it on your desktop system, you enter the "simple", then long-press the Yubikey to have it enter the rest. On mobile, you just use the Touch ID system to enter the whole thing with your fingerprint.

If you're concerned about having to enter a password like that somewhere, then perhaps use the technique with one of the easy-to-remember variants. So it might be:

> ``simple!47=army=TEAM=fight=SLOWLY=27!``

Either way, if you lose your Yubikey, you can rest easy, knowing that the whole master password is not contained in it, which gives you a little time window to change the master password as well.

### Setup 2-factor Authentication "2FA"

{{< figure1 link="/img/Cogley-Post-RSA_SecurID_SID800.jpg" src="/img/Cogley-Post-RSA_SecurID_SID800.thumb.jpg" type="Photo" title="RSA SecurID SID800" class="" >}}

The next practical security tip is to always enable two-factor authentication or 2FA. 2FA refers to a technique of combining something you know, your password, with a second factor, for better security. The second factor can involve a few different things, but usually something you possess, like the above Yubikey, an RSA SecurID, or a software program on a mobile phone.

Here are some examples, of what systems might present as the second factor after you enter your username and password:

{{< figure1 link="/img/Cogley-Post-2FA-via-SMS.jpg" src="/img/Cogley-Post-2FA-via-SMS.thumb.jpg" type="Screenshot" title="SMS messages with 2FA codes" class="" >}}

1. **Google, Facebook, Dropbox, Github** - Entry of a [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) one time password, via an app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en), [Authy](https://www.authy.com/) or even [Codebook](https://discuss.zetetic.net/t/generate-2-step-verification-codes/40) itself.
1. **Salesforce.com, and many custom applications** - Entry of a [Yubico OTP](https://www.yubico.com/products/services-software/personalization-tools/yubikey-otp/) code, for apps that support Yubikey, or an RSA code, for apps that support that system.  
1. **Linkedin, Apple, Amazon, Box** - Entry of a code which has been sent to your SMS short-messaging or email.

There are challenges with 2FA, because the 2FA system is not able to be used in all cases. For example, in the case of certain apps that you need to log into, like setting up iOS Mail.app to access your Gmail via IMAP, you need to enter what's called an application-specific password. You can easily generate these on a per-app basis, and enter them instead of your regular password. They signal the 2FA system to allow a bypass.

Most 2FA systems also offer recovery codes, which can be used instead of your 2FA system, in the case that you lose your mobile device or Yubikey. You can copy these to your password manager (Codebook has "note" fields which you can paste them into) and store them in a safe place like a locked safe.

Be sure to look into how 2FA should be disabled or bypassed, whenever you enable it.  

### Use Email Subaddressing

* use subaddressing me+whatever@gmail.com
* change your username

### Keep it Simple

* Avoid browser-stored passwords; keep it simple and just store everything in your trusted password manager.
* no browser storage, unless needed for convenience

### Are you a system developer?

* an aside to system devs - allow unicode in your passwords for pete's sake

### Baton touch after death

* establish a way to let your loved ones take over

New:

* don't send passwords in plaintext - use passlok
* USE EASY TO REMEMBER ONE IF YOU NEED TO FOR MOBILE ENTRY



## In conclusion:

To conclude, do the following at least, to meet a practical minimum standard for password and system security:

* Use a password manager to allow you to use strong passwords for every system or website, and secure it's vault using a strong yet easy-to-remember master password.
* Consider buying a Yubikey to store your master password in its second slot.
* Enable 2FA two-factor authentication in any site that will allow it.
* Never use the same password twice.
* Use email subaddressing so you know where any breach came from.
* Avoid browser-stored passwords; keep it simple and just store everything in your trusted password manager.

If you implement these tips, at least your day to day security will be at the very least, reasonably secure.

## Updates

* **2016 Feb** - Rewritten to capture my latest ideas.  

{{% ack1 %}}
The banner photo is a crop of the "Bletchley Park Bombe" by Antoine Taveneaux, 18 June 2012, a replica of the Bombe that broke the Enigma. Original can be found [here](https://commons.wikimedia.org/wiki/File:Bletchley_Park_Bombe4.jpg) on Wikimedia commons.
{{% /ack1 %}}
