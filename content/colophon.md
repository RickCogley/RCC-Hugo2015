---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
date: 2016-02-01T18:42:00+09:00
publishdate: 2012-01-10T08:40:00+09:00
description: Colophon page for Rick Cogley Central site.
banner: /img/Cogley-Banner-Hashioki-1170x350-001-mono.JPG
draft: false
slug: colophon
subtitle: On the shoulders of giants.
weight: 9999
lightbox: 'true'
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
  - Calluna
  - Freight Sans Pro
  - Hugo
  - Golang
  - Humans.txt
  - Markdown
title: Colophon
type: colophonpage
images:
  - /img/hugo-logo.png
  - /img/exljbris-calluna.png
  - /img/webfaction-logo.png
  - /img/rick-cogley-avatar-240x240.png
topics:
  - Web
  - Design
  - Process
menu:
  footer:
    Name: Colophon
    Weight: -20
    Identifier: colophon
    Url: /colophon
---

As they say, we "[stand on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants "Wikipedia article about etymology of standing on the shoulders of giants")", and this site is certainly no exception.

Two previous iterations are still online [here](http://rick3.cogley.info) and [here](http://rick2.cogley.info), having been built in [Octopress 2](http://octopress.org/) (with thanks to [Paul Ser](http://about.me/paul_ser)) and [RapidWeaver](http://www.realmacsoftware.com/rapidweaver), respectively. Ancient history, but my very first blog was on [Radio Userland](http://radio.userland.com)!

## Latest release

This release represents a major upgrade to my process and site. After a couple of years of getting used to the basics of git, github and front-end development, I finally took steps to implement a workflow based on node and npm, using ``gulp.js`` to optimize, minify and bundle my css and javascript, for use by Hugo.

### Go Hugo

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/hugo-logo.png" title="Hugo Logo" data-lightbox="set1" data-title="Hugo Logo"><img class="rounded border border-darken-1" src="/img/hugo-logo.png" alt="Logo of Hugo Static Site Generator"></a>
  <figcaption><em>Logo</em>: Hugo SSG</figcaption>
</figure>
<figure class="sm-hide col-12 fit">
  <a href="/img/hugo-logo.png" title="Hugo Logo" data-title="Hugo Logo"><img class="rounded border border-darken-1" src="/img/hugo-logo.png" alt="Logo of Hugo Static Site Generator" ></a>
  <figcaption><em>Logo</em>: Hugo SSG</figcaption>
</figure>

[Hugo](http://gohugo.io) is a Static Site Generator, which makes it simple to use html "templates" to merge your css, javascript, images and content written in the [Markdown](http://daringfireball.net/projects/markdown/) format, into a publishable website.

About Hugo, we learn:

> Hugo is written for speed and performance. Great care has been taken to ensure that Hugo build time is as short as possible. We're talking milliseconds to build your entire site for most setups.

In fact, it takes far longer to upload the site to your web space, than it does for Hugo to generate it.

Hugo is downloadable as a single binary file, written in Go, which means it will run on just about any platform, just by running the file. There are no complex installations and dependencies to deal with.

### Site Look

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/basscss.png" title="Basscss Logo" data-lightbox="set1" data-title="Basscss Logo"><img class="rounded border border-darken-1 bg-rice-paper-light" src="/img/basscss.png" alt="Logo of Basscss"></a>
  <figcaption><em>Logo</em>: Basscss</figcaption>
</figure>
<figure class="sm-hide col-12 fit bg-white">
  <a href="/img/basscss.png" title="Basscss Logo" data-title="Basscss Logo"><img class="rounded border border-darken-1 bg-rice-paper-light" src="/img/basscss.png" alt="Logo of Basscss" ></a>
  <figcaption><em>Logo</em>: Basscss</figcaption>
</figure>

The look of this site comes from a couple of different components.

First, the stylistic base of the site comes from a fantastic and comprehensive css library called ["Basscss"](http://www.basscss.com/). **Basscss** is:

> A lightweight collection of base element styles and immutable utilities designed for speed, clarity, performance, and scalability.

It allows you to have consistency in your basic styles, responsiveness to support mobile users, and acts as a great starting point for any site.

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/exljbris-calluna.png" title="Exljbris Calluna" data-lightbox="set1" data-title="Exljbris Calluna"><img class="rounded border border-darken-1" src="/img/exljbris-calluna.png" alt="Logo of Exljbris Calluna"></a>
  <figcaption><em>Screenshot</em>: Exljbris Calluna</figcaption>
</figure>
<figure class="sm-hide col-12 fit">
  <a href="/img/exljbris-calluna.png" title="Exljbris Calluna" data-title="Hugo Logo"><img class="rounded border border-darken-1" src="/img/exljbris-calluna.png" alt="Logo of Exljbris Calluna" ></a>
  <figcaption><em>Screenshot</em>: Exljbris Calluna</figcaption>
</figure>

As for **Type Faces**, I had been using the excellent and beautiful [Alegreya](http://www.huertatipografica.com/about), but changed to the _Calluna Family_ and _Freight Sans_ faces, because they support more of the OpenType features I wanted to take advantage of. They're served via Adobe Typekit, and you can see the [Adobe Auto-generated Colophon](https://typekit.com/colophons/ihk8ryw) for more info on these.

Custom styles for typography were implemented using Adobe's recommendations for OpenType, some techniques from [Web Typography](http://webtypography.net) and, some css from [Typeplate](http://typeplate.com/).

The **icons** you see here and there are from sets purchased via [Icomoon](https://icomoon.io) library, and from [Agne Alesiute](https://thenounproject.com/grrrauf/)'s [Origami Animals](https://thenounproject.com/grrrauf/collection/origami-animals/) collection at [The Noun Project](https://thenounproject.com). This time, I tried using all SVG icons. We'll see how that goes.

The **photos** on this site are mine, unless otherwise noted. I enjoy photography, and have a whole lot of photos I can use, so I though I would weave them throughout the site, featuring them in banners, accent squares and galleries. My galleries are being displayed by the slick javascript [nanoGALLERY](http://nanogallery.brisbois.fr).

## Hosting

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/webfaction-logo.png" title="Webfaction" data-lightbox="set1" data-title="Webfaction"><img class="rounded border border-darken-1 bg-white" src="/img/webfaction-logo.png" alt="Logo of Webfaction"></a>
  <figcaption><em>Logo</em>: Webfaction</figcaption>
</figure>
<figure class="sm-hide col-12 fit">
  <a href="/img/webfaction-logo.png" title="Webfaction" data-title="Webfaction Logo"><img class="rounded border border-darken-1 bg-white" src="/img/webfaction-logo.png" alt="Logo of Webfaction" ></a>
  <figcaption><em>Logo</em>: Webfaction</figcaption>
</figure>

This and a few other sites I manage, are hosted at the rock-solid [Webfaction](http://www.webfaction.com/?affiliate=rcogley). Great cost-performance for developers, in my opinion. I have not had trouble in years of use, and they respond very quickly to support requests.

Comments are hosted on Disqus.

DNS is hosted on Amazon Web Services [Route53](https://aws.amazon.com/route53/), a really robust and fast DNS service.

The [repository](https://github.com/RickCogley/RCC-Hugo2015) for this site is hosted at [Github](https://github.com).

## Semantic Markup

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/json-ld-logo.png" title="JSON-LD Logo" data-lightbox="set1" data-title="JSON-LD Logo"><img class="rounded border border-darken-1 bg-white" src="/img/json-ld-logo.png" alt="Logo of JSON-LD"></a>
  <figcaption><em>Logo</em>: JSON-LD</figcaption>
</figure>
<figure class="sm-hide col-12 fit">
  <a href="/img/json-ld-logo.png" title="JSON-LD Logo" data-title="JSON-LD Logo"><img class="rounded border border-darken-1 bg-white" src="/img/json-ld-logo.png" alt="Logo of JSON-LD" ></a>
  <figcaption><em>Logo</em>: JSON-LD</figcaption>
</figure>

Considering [Semantic HTML](http://en.wikipedia.org/wiki/Semantic_HTML "Semantic H.T.M.L. Wikipedia article link"), I'm using some now-well-accepted [Microdata](http://schema.org "Canonical site for Microdata, Schema.org") such as the [Person Schema](http://schema.org/Person "Microdata Person Schema"), and [Microformats 2](http://microformats.org/wiki/microformats2 "V2 of Microformats, improving ease-of-use for authors and implementers") such as [h-card](http://microformats.org/wiki/h-card "Microformats 2 update to hCard") with some others sprinkled in.

To mark up my [About](/about) page with the [Person Schema](http://schema.org/Person "Microdata Person Schema"), I'm now using the much-easier [JSON-LD](http://www.w3.org/TR/json-ld/#embedding-json-ld-in-html-documents), because it's officially supported by Google. It lets you put the markup in a script tag, which you can simply include in the page. No more headaches from interspersed `itemscope`, `itemtype` or `itemprop`.

## TL;DR Thanks!

_Warm thanks and regards to:_

[Steve Francia](http://spf13.com) ([@spf13](https://github.com/spf13)) and [contributors](https://github.com/spf13/hugo/graphs/contributors) for the giant amount of work in creating Hugo, and to the Go language [team](http://golang.org/CONTRIBUTORS) itself. [Bjørn Erik Pedersen](http://bep.is) ([@bep](https://github.com/bep)) has been a great help on the Hugo [discussion forums](http://discuss.hugo.io)).

[@jaydenseric](https://github.com/jaydenseric) for ["barebones"](https://github.com/jaydenseric/Barebones) which taught me a skillful way to organize a site, and helped me modernize my front-end dev workflow.

[@ai](https://github.com/ai), [@ben-eb](https://github.com/ben-eb), [@moox](https://github.com/moox) and many others for the massive and important work on ["postcss"](https://github.com/postcss/postcss), ["postcss-cssnext"](https://github.com/MoOx/postcss-cssnext), ["cssnano"](https://github.com/ben-eb/cssnano) and other various modules, helping me to use the latest css, and get that transformed and bundled, ready for production.

[@jxnblk](https://github.com/jxnblk) for the wonderful ["basscss"](http://www.basscss.com/) css foundation library.  

[Jos Buivenga / Exljbris](https://exljbris.wordpress.com/about/) and [Joshua Darden / Darden Studio](https://www.dardenstudio.com/studio), for the beautiful type faces.

<figure class="sm-show col-4 mxn12 left fit">
  <a href="/img/humans-txt-large-logo2.png" title="Humans.txt Logo" data-lightbox="set1" data-title="Humans.txt Logo"><img class="rounded border border-darken-1 bg-white" src="/img/humans-txt-large-logo2.png" alt="Logo of Humans.txt"></a>
  <figcaption><em>Logo</em>: Humans.txt</figcaption>
</figure>
<figure class="sm-hide col-12 fit">
  <a href="/img/humans-txt-large-logo2.png" title="Humans.txt Logo" data-title="Humans.txt Logo"><img class="rounded border border-darken-1 bg-white" src="/img/humans-txt-large-logo2.png" alt="Logo of Humans.txt" ></a>
  <figcaption><em>Logo</em>: Humans.txt</figcaption>
</figure>

Lastly, I even have a [humans.txt](/humans.txt) file. [Humans.txt](http://humanstxt.org) is an attempt to standardize on a way of making a site colophon, in text format. If you [click](/humans.txt) it, you'll see some of the same information as on this page, in a simple text format.

_Now to get down to the content creation!_
