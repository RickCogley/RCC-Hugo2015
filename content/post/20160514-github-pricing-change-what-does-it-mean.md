---
title: Github Pricing Change
subtitle: What does it mean? 
slug: github-pricing-change-what-does-it-mean 
banner: /img/Cogley-Banner-Speeding-Train-mono.jpg  
date: 2016-05-16T14:10:00+09:00
publishdate: 2016-05-16T14:10:00+09:00
description: Github changed their pricing policy, which raises prices for some. Wild speculation on what it means, a post by Rick Cogley.
draft: 'false'
images:
  - /img/Cogley-Banner-Pony_Express_Postmarks-1400x450-mono.jpg
  - /img/rick-cogley-avatar-240x240.png
tags:
  - github
  - pricing
  - microservices
  - per-person
  - reaction
  - bitbucket
  - gitlab
topics:
  - Service
  - Software
  - Business
postsummary: Github recently updated their pricing structure to a model that allows unlimited private repositories, but is based on a per-person pricing model. This increases some users' bills significantly.  
postsvg: icon-origami-fish
---

Github recently updated their pricing structure to a model that allows unlimited private repositories, but is based on a per-person pricing model. This increases some users' bills significantly.  

<!--more-->

## What Happened?

The Internets were up in arms the other day about Github's [pricing change announcement](https://github.com/blog/2164-introducing-unlimited-private-repositories). Regarding this, [Gitlab](https://about.gitlab.com/) posted a good [article](https://about.gitlab.com/2016/05/11/git-repository-pricing/) stating that such repository-based pricing is inevitable, due to the proliferation of microservices.

There was a lot of celebrating: 

{{< tweet 730314156184899585 >}}

... a lot of grousing:

{{< tweet 730523589053554689 >}}

... with some humor thrown in: 

{{< tweet 730331056927203328 >}}


## So What's the Big Deal? 

This is a wonderful announcement for small Dev teams that using a lot of private repositories, as it gives them a fixed low cost. Individuals get a good deal too, also with unlimited private repos, squelching the need to use another service like BitBucket for private repositories. 

For teams with >5 developers, though, it starts to suck as more people are added, especially if there are numbers of what you might call "lightweight" participants–for instance, business users who are producing documentation only, developers who are committing in a minor way only, or if the project has a bunch of inactive contributors. 

The bill for my company [eSolia](http://esolia.com) will go up (net-net, it will almost double), on this new pricing scheme, so it doesn't make sense for us to continue as an "organization" on Github. We need named participants more than we need private repositories.  

## What's this mean? 

Github is the 800 pound gorilla in this space, with big investment behind it, so I suppose they can pretty much do whatever they want. I guess that includes clobbering quite a lot of organizations, I imagine.  

I've been thinking about this, because I'm curious about the real reason they did it. If nothing else changes, it definitely won't work for us. I've already set up a private Gitlab community edition server and migrated our private repos there. What could be the reason?  

* Is Github trying to filter out organizations that are using the service in creative ways, like having business users committing documentation? 
* Are they simply trying to make the change knowing they'll lose a certain swath of customers, but they're willing to take whatever loss to get more of the sort of customers they want?
* Like a restaurant offering "all you can eat" or "all you can drink", is Github banking on people _not_ actually using "unlimited" respositories? Well, of course they are. 
* Do they _want_ customers to leave to competitors, to make the competitors more attractive as a later takeover target? Investors think in that sort of way, so, it's worth monitoring, to my thinking. 
* Do they want customers to move to competitors, if only to show that the competitors' infrastructure is much weaker than Github's? 
* Surely Gihub possesses serious data about all their customers, and have done a lot of calculations, so is this not just purely a greedy play? Could it really be that they "haven't thought it through"? Really doubtful, frankly. 

In their announcement, Github said: 

> We want everyone to have a plan with unlimited private repositories, but don’t worry—you are welcome to stay on your current plan while you evaluate the new cost structure and understand how to best manage your organization members and their private repository access. And while we're currently not enforcing a timeline to move, rest assured that you'll have at least 12 months notice before any mandated change to your plan.

Reading between the lines: 

* you'll have to change to the new plan eventually
* you'll have 12 months' notice when we mandate the change 

Don't get me wrong; I love what Github has done. I think their platform is innovative, truly. I'm always pleasantly surprised by the attention to detail. But we can't afford to pay full fare, for contributors who commit only 1x per year. 

What do you think? I want to hear. Sound off with your ideas in the comments. 

{{% ack1 %}}
The banner is my photo of a train entering the Japan Rail "JR" station at Totsuka, Yokohama, Japan. 
{{% /ack1 %}}
