---
author: Rick Cogley
authorlink: /about
authortwitter: https://twitter.com/rickcogley
date: 2015-05-14T18:45:19+09:00
publishdate: 2012-01-10T09:05:19+09:00
description: Colophon page for Rick Cogley Central site.
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
weight: 9999
tags:
- Colophon
- Attributions
- Acknowledgements
- Technical
- Typography
- Hosting
- Semantic Markup
- JSON-LD
- Microdata
- Schema.org
- AWS
- Route53
- Webfaction
- nanoGallery
- Alegreya
- Hugo
- Golang
- Humans.txt
- Markdown
- InstantClick
title: Colophon
type: colophonpage
images:
- /img/hugo-logo.png
- /img/alegreya-sans.png
- /img/webfaction-logo.png
- /img/rick-cogley-avatar-240x240.png
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

As they say, we "[stand on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants "Wikipedia article about etymology of standing on the shoulders of giants")", and this site is certainly no exception. Two previous iterations are still online [here](http://rick3.cogley.info) and [here](http://rick2.cogley.info), having been built in [Octopress 2](http://octopress.org/) (with thanks to [Paul Ser](http://about.me/paul_ser)) and [RapidWeaver](http://www.realmacsoftware.com/rapidweaver), respectively. Ancient history, but my very first blog was on [Radio Userland](http://radio.userland.com)!

## Go Hugo

After some steady use, I got used to the basics of git, but dealing with local Ruby dependencies in Octopress was getting tedious, each time OS X saw an upgrade. Enter [Hugo](http://gohugo.io), where we learn:

> Hugo is written for speed and performance. Great care has been taken to ensure that Hugo build time is as short as possible. We’re talking milliseconds to build your entire site for most setups.

The reason it's so fast is, it's a compiled binary that you run against your folders of content in [Markdown](http://daringfireball.net/projects/markdown/) format, html templates, css and javascript. Let me put it to you this way: it takes far longer to upload the site to your web space, than it does for Hugo to generate it. 

{{< figure src="/img/hugo-logo.png" alt="Hugo Logo" width="300px" class="photo-inline-right pure-img" >}} 

So, big thanks to [Steve Francia](http://spf13.com) ([@spf13](https://github.com/spf13)) and [contributors](https://github.com/spf13/hugo/graphs/contributors) for the giant amount of work in creating Hugo, and to the Go language [team](http://golang.org/CONTRIBUTORS) itself. 

## Site Look

The look of this site is based on [Tom Maiaroto's](http://shift8creative.com) ([@tmaiaroto](https://github.com/tmaiaroto)) "[RedLounge](https://github.com/tmaiaroto/hugo-redlounge)" theme for Hugo, the structure of which is itself based on [a demo](http://purecss.io/layouts/blog) from Yahoo's excellent, responsive css modules set called "[PureCSS](http://purecss.io)". PureCSS lets you easily set up responsive grids, that resize when you resize the browser or view on a mobile device like an iPad or iPhone. 

{{< figure src="/img/alegreya-sans.png" alt="Alegreya Sans Sample" width="300px" class="photo-inline-right pure-img" >}} 

I'm using the "Alegreya" type faces by [Juan Pablo del Peral](http://www.huertatipografica.com/about), served up by Google Web Fonts. You can view and purchase the sans serif [Alegreya Sans HT](http://www.huertatipografica.com/fonts/alegreya-sans-ht) and serif [Alegreya HT Pro](http://www.huertatipografica.com/fonts/alegreya-ht-pro) versions at his site. The icons you see here and there are from the awesome [Font Awesome](http://fortawesome.github.io/Font-Awesome/) library. 

The "carbon fiber" sidebar background is pure css, and was written by [Atle Mo and Sebastien Grosjean](http://lea.verou.me/css3patterns/#carbon). If it does not work, upgrade your browser. If it does work, upgrade anyway. 

The photos on this site are mine, unless otherwise noted. I enjoy photography, and have a whole lot of photos I can use, so I though I would weave them throughout the site, featuring them in banners, accent squares and galleries. My galleries are being displayed by the slick javascript [nanoGALLERY](http://nanogallery.brisbois.fr), and thanks to [Bjørn Erik Pedersen](http://bep.is) ([@bep](https://github.com/bep)) for the guidance on how to integrate it with Hugo (and for his many kindnesses to this newbie on the Hugo [discussion forums](http://discuss.hugo.io)). 

## Hosting

{{< figure src="/img/webfaction-logo.png" alt="Webfaction Logo" width="300px" class="photo-inline-right pure-img" >}} 

This and a few other sites I manage, are hosted at the rock-solid [Webfaction](http://www.webfaction.com/?affiliate=rcogley). Great cost-performance for developers, in my opinion. I have not had trouble in years of use, and they respond very quickly to support requests. 

Comments might be hosted in Discourse or simply Disqus. Not sure as of early May 2015.

DNS is hosted on Amazon Web Services [Route53](https://aws.amazon.com/route53/), a really robust and fast DNS service. 

The [repository](https://github.com/RickCogley/RCC-Hugo2015) for this site is hosted at [Github](https://github.com). I had been hosting elsewhere, but Github is probably here to stay, so I moved everything over.  

## Semantic Markup

Considering [Semantic HTML](http://en.wikipedia.org/wiki/Semantic_HTML "Semantic H.T.M.L. Wikipedia article link"), I'm using some now-well-accepted [Microdata](http://schema.org "Canonical site for Microdata, Schema.org") such as the [Person Schema](http://schema.org/Person "Microdata Person Schema"), and [Microformats 2](http://microformats.org/wiki/microformats2 "V2 of Microformats, improving ease-of-use for authors and implementers") such as [h-card](http://microformats.org/wiki/h-card "Microformats 2 update to hCard") with some others sprinkled in. To mark up my [About](/about) page with the [Person Schema](http://schema.org/Person "Microdata Person Schema"), I'm now using the much-easier [JSON-LD](http://www.w3.org/TR/json-ld/#embedding-json-ld-in-html-documents), because it's officially supported by Google. It lets you put the markup in a script tag, which you can simply include in the page. No more interspersed ``itemscope``, ``itemtype`` or ``itemprop``. 

## TL;DR Thanks!

{{< figure src="/img/humans-txt-large-logo2.png" alt="Humans.txt Logo" width="220px" class="photo-inline-right pure-img" >}} 

I even have a [humans.txt](/humans.txt) file. [Humans.txt](http://humanstxt.org) is an attempt to standardize on a way of making a site colophon, in text format. If you [click](/humans.txt) it, you'll see some of the same information as on this page, in simple form. Anyway, looong story short, thanks to everyone. 

_Now to get down to the content creation!_



