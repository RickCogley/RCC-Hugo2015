---
author: Rick Cogley
authorlink: /about
authortwitter: https://twitter.com/rickcogley
date: 1966-01-01T17:24:37+09:00
description: RCC site colophon
draft: false
showauthor: "true"
showcomment: "true"
showdate: "false"
showpaging: "true"
showreadingtime: "true"
showsocialsharing: "true"
showtoc: "true"
showtotop: "true"
slug: colophon
subtitle: On the shoulders of giants.
tags:
- Colophon
- Attributions
- Technical
title: Colophon
topics:
- Web
- Design
- Process
menu:
  footer:
    Name: "Colophon"
    Weight: -20
    Identifier: "colophon"
    Url: "/colophon"
---

## History

As they say, we "stand on the shoulders of giants", and this site is certainly no exception. Two previous iterations are still online [here](http://rick3.cogley.info) and [here](http://rick2.cogley.info), having been built in [Octopress 2](http://octopress.org/) (with thanks to [Paul Ser](http://about.me/paul_ser)) and [RapidWeaver](http://www.realmacsoftware.com/rapidweaver), respectively. Ancient history, but my very first blog was on [Radio Userland](http://radio.userland.com)!

## Go Hugo

After some steady use, I got used to the basics of git, but dealing with local Ruby dependencies in Octopress was getting tedious, each time OS X saw an upgrade. Enter [Hugo](http://gohugo.io), where we learn:

> Hugo is written for speed and performance. Great care has been taken to ensure that Hugo build time is as short as possible. We’re talking milliseconds to build your entire site for most setups.

The reason it's so fast is, it's a compiled binary that you run against your folders of content in [Markdown](Markdown) format, html templates, css and javascript. Let me put it to you this way: it takes far longer to upload the site to your web space, than it does for Hugo to generate it. 

So, big thanks to [Steve Francia](http://spf13.com) (@spf13) and [contributors](https://github.com/spf13/hugo/graphs/contributors) for the giant amount of work in creating Hugo, and to the Go language [team](http://golang.org/CONTRIBUTORS) itself. 

## Site Look

The look of this site is based on [Tom Maiaroto's](http://shift8creative.com) (@tmaiaroto) "[RedLounge](https://github.com/tmaiaroto/hugo-redlounge)" theme for Hugo, the structure of which is itself based on [a demo](http://purecss.io/layouts/blog) from Yahoo's excellent, responsive css modules set called "[PureCSS](http://purecss.io)". PureCSS lets you easily set up responsive grids, that resize when you resize the browser or view on a mobile device like an iPad or iPhone. 

I'm using the "Alegreya" type faces by [Juan Pablo del Peral](http://www.huertatipografica.com/about), served up by Google Web Fonts. You can view and purchase the sans serif [Alegreya Sans HT](http://www.huertatipografica.com/fonts/alegreya-sans-ht) and serif [Alegreya HT Pro](http://www.huertatipografica.com/fonts/alegreya-ht-pro) versions at his site. The icons you see here and there are from the awesome [Font Awesome](http://fortawesome.github.io/Font-Awesome/) library. 

The "carbon fiber" sidebar background is pure css, and was written by [Atle Mo and Sebastien Grosjean](http://lea.verou.me/css3patterns/#carbon). If it does not work, upgrade your browser. If it does work, upgrade anyway. 

My photos are being displayed by the slick javascript [nanoGALLERY](http://nanogallery.brisbois.fr), and thanks to [Bjørn Erik Pedersen](http://bep.is) (@bep) for the guidance on how to integrate it with Hugo (and for his many kindnesses to this newbie on the Hugo [discussion forums](http://discuss.hugo.io)). 

## Hosting

This and a few other sites I manage, are hosted at the rock-solid [Webfaction](http://www.webfaction.com/?affiliate=rcogley). Great cost-performance for developers, in my opinion. I have not had trouble in years of use, and they respond very quickly to support requests. 

Comments are probably going to be hosted in Discourse or simply Disqus. Not sure as of early May 2015.

## Semantic Markup

Considering [Semantic HTML](http://en.wikipedia.org/wiki/Semantic_HTML "Semantic H.T.M.L. Wikipedia article link"), I'm using some now-well-accepted [Microdata](http://schema.org "Canonical site for Microdata, Schema.org") such as the [Person Schema](http://schema.org/Person "Microdata Person Schema"), and [Microformats 2](http://microformats.org/wiki/microformats2 "V2 of Microformats, improving ease-of-use for authors and implementers") such as [h-card](http://microformats.org/wiki/h-card "Microformats 2 update to hCard") with some others sprinkled in. To mark up my [About](/about) page with the [Person Schema](http://schema.org/Person "Microdata Person Schema"), I'm now using the much-easier [JSON-LD](http://www.w3.org/TR/json-ld/#embedding-json-ld-in-html-documents), because it's officially supported by Google. It lets you put the markup in a script tag, which you can simply include in the page. No more interspersed ``itemscope``, ``itemtype`` or ``itemprop``. 

## TL;DR Thanks!

Anyway, looong story short, thanks to everyone. _Now to get down to the content creation!_



