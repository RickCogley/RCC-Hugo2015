---
title: "Establishing a Personal Password Policy"
subtitle: The effort is worth it
slug: establishing-a-personal-password-policy
publishdate: 2016-02-27T10:50:00+09:00
date: 2016-03-01T10:05:00+09:00
banner: /img/Cogley-Banner-Bletchley_Park_Bombe_by_Antoine_Taveneaux-1400x450-mono.jpg
images:
  - /img/zetetic-codebook-logo-625x625.jpg
  - /img/rick-cogley-avatar-240x240.png
  - /img/Cogley-Banner-Bletchley_Park_Bombe_by_Antoine_Taveneaux-1400x450-mono.jpg
description: A basic personal password security policy, that is easy to implement, by Rick Cogley.
topics: [Security, Tips]
tags: [encryption,password,mnemonic,memory,diceware,aes,passlok,yubico,yubikey,securid,2fa,two-factor,codebook,zetetic,random,mfa,pgp,subaddressing,ssh,rsa]
draft: "false"
aliases:
  - /articles/2013/02/18/establishing-a-personal-password-policy/
postsummary: If you are one of those people who uses the same password for every system you use, for your own sake, stop that risky practice. There's a bit of a learning curve, but, read this post to learn about some reasonable personal security practices you can put into place right now.
postsvg: icon-origami-fish
---

If you are one of those people who uses the same password for every system you use, for your own sake, stop that risky practice. There's a bit of a learning curve, but, read this post to learn about some reasonable personal security practices you can put into place right now.

<!--more-->

## The Tradeoff

One thing is clear: "_good security is inversely proportional to convenience and speed_." When you begin to increase your awareness of security, this axiom is really driven home. Especially these days, when bad actors are trying everything in their power to weaken security and privacy for Joe average.

_Using different passwords for every system; using strong passwords; encrypting your disk; making sure you have good backups_. All of these things are a bit of a pain. But so is losing your data, or having it stolen or compromised in some way. Nobody's got time for that, so, let's find out how you can take steps to practice better security in your day to day computing life.

## Practical Security Measures

This post lays out a few practical security measures you can and should take in your day to day computing. Let's see where it leads.

### Use strong passwords

{{% aside1 %}}
The topic of password strength is complex, but you can [learn more about it](https://en.wikipedia.org/wiki/Password_strength). Websites such as [this](http://rumkin.com/tools/password/diceware.php) or [this](https://xkpasswd.net/s/) let you generate good passwords, but, change parts of what is generated, for peace of mind in case the site itself has been compromised.
{{% /aside1 %}}

For the myriad of systems you have to connect to these days, each should be set up to use a strong password. "Strong" means a password that is long, and has a random mix of capital and lowercase letters, numbers, and symbols. Such passwords are more resistant to cracking.

For the sake of all that's holy, don't use passwords like ``password``, ``123456``, ``admin``, ``qwerty``, your pet's name, your kid's name, the default password in any system, or any demonstration password from any password generation website, like ``correct horse battery staple``. In fact [here's a list](http://www.whatsmypass.com/the-top-500-worst-passwords-of-all-time) of bad passwords.

For example, meet a strong password:

> ``h#56qbt[S[ceGsNQ_J_(^YaY@]F_tG!z``

Hard to remember and type, though. More on that below.

#### Never the same password for two systems

It's really weak and lazy to use the same password for every system. Even if your _one_ password is strong, the problem is, if someone gets one of your passwords, they get access to all your systems.

They may not _know_ you use the same password everywhere, but a person trying to crack systems would simply test that out. That's one reason that security breaches are such a big deal, because you are in a really weak position once that password is known in public, and, it happens to be the same on all your systems.

You'd need to change it on all systems, just in case. Therefore, set each system to have a different password, for sure. But, you say, having a strong password on _every_ system is nigh impossible to remember.

That's true, but _password managers_ make short work of it.

### Use a password manager

{{< figure1 link="/img/zetetic-codebook-logo-625x625.jpg" src="/img/zetetic-codebook-logo-200x200.jpg" type="Logo" title="Zetetic Codebook" class="" >}}

A [password manager](https://en.wikipedia.org/wiki/Password_manager) is a general term for a software application that is used to store your passwords (and sometimes other information) securely, and make it extremely hard to crack.

There are many commercial and open source ones available, but I prefer Zetetic [Codebook](https://www.zetetic.net/codebook/) for my Mac and iOS devices. It is built on particularly [strong security](https://www.zetetic.net/sqlcipher/design/), encrypting the data you store in it fully. From Zetetic's website:

> The encryption used is {{<abbr AES>}}-256 in {{<abbr CBC>}} mode with {{<abbr HMAC>}} page protection and other countermeasures against tampering. Key derivation is 64,000 rounds of {{<abbr PBKDF2>}} {{<abbr SHA>}}-1 with a unique random salt. The underlying crypto library used depends on platform: OpenSSL's libcrypto on Android and Windows, Common Crypto on iOS and OS X.   

There are password managers like 1Password that use browser plugins, which recognize the website you're visiting and can automatically enter your credentials during the login process. That's convenient, but, it does not let you work with _standard logins_ outside of a website. Codebook gives you a bit more flexibility in this area.

{{< figure1 link="/img/Cogley-Post-Codebook-Secret-Agent-with-PROdb.jpg" src="/img/Cogley-Post-Codebook-Secret-Agent-with-PROdb.thumb.jpg" type="Screenshot" title="Codebook Secret Agent in Use" class="" >}}

You store all your passwords in the flexible & secure Codebook database, and use a key sequence to bring up its "_Secret Agent_". From the Secret Agent, you can easily search, access your credentials and other info, and insert those into the text boxes for, say, your username or password. This works for most login screens, in my experience so far. I like the fact that there _isn't_ a browser plugin, actually. Fewer moving parts.

**So, what's the point?** You can store all your credentials in the vault, which is then opened by a "master password", and then for most passwords, you set them to be really long, random and complex ones. It works because Codebook will enter those for you.

#### Keep it Simple, Silly!

Follow the famous "KISS" method here, and keep things simple. I mean, don't store your passwords all over the place, in your browser's password storage system, or if you're on a Mac, in the system keychain (don't click those "store in keychain" checkboxes). Just stick to the one system, but make sure you're protecting it well.

### Strong & easy-to-remember master password

If you decide to use a password manager like Codebook, set a strong "master" password; the password you use to unlock your vault, to get access to all your _other_ passwords.

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

{{< figure1 link="/img/Cogley-Post-YubiKey_Neo_and_Nano.jpg" src="/img/Cogley-Post-YubiKey_Neo_and_Nano.thumb.jpg" type="Photo" title="Yubikey Neo and Nano" class="" >}}

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

Losing your Yubikey could be a real issue, and you'll need to change that master password immediately. One thing you can do to mitigate the risk in this case, is set your master password to something easy you can remember, followed by a strong random password. It might look like this:

> ``simple/w/nr9h5Gvhmkw>::FSfu&<P=B/aFY"``

You keep the "simple" piece in your mind, and program the Yubikey to enter the remainder. When you need to enter it on your desktop system, you enter the "simple", then long-press the Yubikey to have it enter the rest. On mobile, you just use the Touch ID system to enter the whole thing with your fingerprint.

If you're concerned about having to enter a password like that somewhere, then perhaps use the technique with one of the easy-to-remember variants of a strong password. So it might be:

> ``simple!47=army=TE@M=fight=SLOWLY=27!``

Either way, if you lose your Yubikey, you can rest easy, knowing that the _whole_ master password is not contained in it, which gives you a little time window to change the master password as well. You should still do that immediately if you lose your Yubikey.

### Setup 2-factor Authentication "2FA"

{{< figure1 link="/img/Cogley-Post-RSA_SecurID_SID800.jpg" src="/img/Cogley-Post-RSA_SecurID_SID800.thumb.jpg" type="Photo" title="RSA SecurID SID800" class="" >}}

The next practical security tip is to _always enable_ [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) or {{<abbr MFA>}}, whenever it is made available by a service. These days, it's likely to be the variant {{<abbr 2FA>}}, that refers to an authentication technique of combining something you know, your password, with a _second_ factor, for better security. The second factor can involve a few different things, but usually something you possess, like the above Yubikey, an {{<abbr RSA>}} SecurID, or a software program on a mobile phone.

Here are some examples, of what systems might present as the second factor after you enter your username and password:

{{< figure1 link="/img/Cogley-Post-2FA-via-SMS.jpg" src="/img/Cogley-Post-2FA-via-SMS.thumb.jpg" type="Screenshot" title="SMS messages with 2FA codes" class="" >}}

1. **Google, Facebook, Dropbox, Github** - Entry of a {{<abbr TOTP>}}, or [Time-based one-time password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) one time password, via an app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en), [Authy](https://www.authy.com/) or even [Codebook](https://discuss.zetetic.net/t/generate-2-step-verification-codes/40) itself.
1. **Salesforce.com, and many custom applications** - Entry of a [Yubico OTP](https://www.yubico.com/products/services-software/personalization-tools/yubikey-otp/) code, for apps that support Yubikey, or an {{<abbr RSA>}} code, for apps that support that system.  
1. **Linkedin, Apple, Amazon, Box** - Entry of a code which has been sent to your {{<abbr SMS>}} short-messaging or email. This style is weaker, because the {{<abbr SMS>}} message could be intercepted.

There are challenges with {{<abbr 2FA>}}, because the {{<abbr 2FA>}} system is not able to be used in all cases. For example, in the case of certain apps that you need to log into, like setting up iOS Mail.app to access your Gmail via {{<abbr IMAP>}}, you need to enter what's called an application-specific password. You can easily generate these on a per-app basis, and enter them instead of your regular password. They signal the {{<abbr 2FA>}} system to allow a bypass.

{{% aside1 %}}
_Three famous sister factors:_ something you **know** (a password), something you **have** (a keyfob), something you **are** (your fingerprint or retina scan).  
{{% /aside1 %}}

Most {{<abbr 2FA>}} systems also offer recovery codes, which can be used instead of your {{<abbr 2FA>}} system, in the case that you lose your mobile device or Yubikey. You can copy these to your password manager (Codebook has "note" fields which you can paste them into), and also print and store them in a secure place like a locked safe.

Be sure to look into how {{<abbr 2FA>}} should be disabled or bypassed, whenever you enable it.  

### Unique All The Things Shall Be

{{< figure1 link="/img/Cogley-Post-Codebook-Entry-Sample-System-X.jpg" src="/img/Cogley-Post-Codebook-Entry-Sample-System-X.thumb.jpg" type="Screenshot" title="Extra Uniqueness in a Codebook Entry" class="" >}}

Now, if you're starting to do the right thing, and setting a different strong password for all your systems, congrats, that's great! But do realize, you can also make your _username_ unique in many cases. Because your password manager can remember those as well, you might as well enter something unique per site.

Some sites use your email as the login, but either way, check if your email system supports what's called "[subaddressing](https://en.wikipedia.org/wiki/Email_address#Sub-addressing)". This concept is sometimes called "[disposable email addressing](https://en.wikipedia.org/wiki/Disposable_email_address)". Gmail does for sure. Sub-addressing is when you add a character (often a ``+`` sign) followed by some string. For example, ``mygoogle+fb@gmail.com`` could be what you use for your Facebook email address.

What this is good for is, detecting leaks and better filtering. Since you have provided a unique email address per website or cloud system, if you start receiving mail to that email from some unknown 3rd party, it could indicate some kind of security breach. This technique also allows you to search or filter more precisely, in your favorite email program.

#### Use Unique Security Questions

A corollary to this is to use unique and strong passwords in the answers to your security questions. When you're allowed to make up security questions, you can set the _question_ to a random string, too.

> What is your childhood best friend's name?
> ``7ZCvc]E@8N]2H.&zbA:XDn3#7KTG$u}%``

### Use Your Words

Use the feedback system for any website you use, and make sure the developers hear your voice about security, now that you've got some arrows in your quiver:

* Why can't I use a mix of characters, numbers symbols in my password?
* Why the password length restriction? I should be able to set my password to longer than 12 characters.
* Why haven't you implemented two-factor authentication?
* Why is the "change password" page so hard to find on your site?

I'm always unpleasantly surprised when I discover systems with weak standards, but a lot of sites are still guilty.

### Spousal Information Relay after Death

In the end, you need to create some kind of "death kit", which in the event of your death, the right people can be given access to and instructions regarding all your critical online information.

Don't underestimate the importance; do it and discuss it while you're both still of sound mind and body.

### Other Important Matters

There's a lot more you can do, to increase your security and privacy, but this post is already too long, so let me give you a little homework:

* always use the ``https`` version of any website, where it's available, and learn how to look at the ``ssl`` certificate to confirm its validity.
* given a choice, use the secure "ssh" option for your smtp server, which you set up for sending email. The ports required are often 143 or 993, so ask about it.
* encrypt your hard drive (but don't forget or lose the passphrase!). On Mac, you do it with FileVault. On Windows, it's called BitLocker.
* learn how to make an encrypted volume to use on a USB stick, using something like [VeraCrypt](https://veracrypt.codeplex.com).
* learn how to send encrypted messages, using {{<abbr PGP>}} or [Passlok](https://passlok.com).
* if you're transferring files via ftp, always connect using the secure ``sftp`` option. Plain ``ftp`` is a risk.

## In conclusion:

Employ the following at least, to set and maintain a practical minimum standard for password and system security:

* Use a password manager like Zetetic Codebook to allow you to use strong passwords for every system or website, and secure it's vault using a strong master password. Protect that master password by all means available.
* Consider buying a Yubikey to store part of your strong master password in its second slot.
* Enable {{<abbr 2FA>}} two-factor authentication in any site that will allow it.
* Never use the same password twice.
* Use email subaddressing for better tracking.
* Use strong passwords as answers to "security questions".
* Avoid browser-stored passwords; keep it simple and just store everything in your trusted password manager.
* Use secure connections to access websites (i.e. ``https``), for your {{<abbr SMTP>}} email sending (i.e. ``ssh``), and for your ``ftp`` (i.e. ``sftp``).

If you made it this far in this long post, kudos. There is indeed a learning curve to doing the above, but if you implement these tips, you'll improve your work-a-day security by leaps and bounds. Give it a try! You know you want to.

## Updates

* **2016 Mar 1** - Add MFA, and an aside about something you know, have and are.
* **2016 Feb** - Rewritten to capture my latest ideas.  

{{% ack1 %}}
The banner photo is a crop of the "Bletchley Park Bombe" by Antoine Taveneaux, 18 June 2012, a replica of the Bombe that broke the Enigma. Original can be found [here](https://commons.wikimedia.org/wiki/File:Bletchley_Park_Bombe4.jpg) on Wikimedia commons.
{{% /ack1 %}}
