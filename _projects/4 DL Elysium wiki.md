---
name: DL:Elysium wiki
tools: [MediaWiki, HTML, CSS, Writing]
image: /assets/img/elysium.png
description: I'm making an entire wiki for a collaborative writing group. This includes skin and widget coding, guide and content writing, and user management.
---

# The Book of DL:Elysium

{% capture list_items %}
Public pages, #if-you-want-to-check-it-out
The hosting site, #the-hosting-site
Theme and CSS, #site-theme-and-commoncss
Templates and widgets, #templates-mediawikis-widgets-and-more
Helping improve the software, #helping-improve-the-software
{% endcapture %}
{% include elements/list.html title="Table of Contents" %}

My current passion project. I have been participating, moderating and managing a collaborative writing (also known as roleplay, or RP) server on Discord for nearly two years.

Recently I set up a **private Wiki site** for members to use. For a little more than a month, I've spent most of my free time tweaking the site's settings and permissions, editing its CSS, coding widgets, writing guides, and helping solve MediaWiki bugs along the way.

{% include elements/figure.html image="/assets/img/elysium1.png" %}
<p style="width:75%;margin-right:auto;margin-left:auto;"> {% include elements/button.html link="https://dlelysium.miraheze.org/wiki/Main_Page" text="Click here to go to the Wiki" style="outline-danger" size="lg" block="true" %} </p>


### If you want to check it out...

Members of the server have decided to keep their writing private. However, I have permission to make its code and guides publicly readable.

* The Main page is public for all wikis.
* The topmost links in the header (FAQ, Help, To do, Requests)
* Nav > All Pages to see a [list of all the pages](https://dlelysium.miraheze.org/wiki/Special:AllPages) of the wiki. This is used to access:
    * [Template pages](https://dlelysium.miraheze.org/wiki/Special:AllPages?from=&to=&namespace=10), where widgets are coded
    * [Module pages](https://dlelysium.miraheze.org/wiki/Special:AllPages?from=&to=&namespace=828), for Lua scripts
    * [MediaWiki pages](https://dlelysium.miraheze.org/wiki/Special:AllPages?from=&to=&namespace=8), configuration files for the whole site
    * [Help pages](https://dlelysium.miraheze.org/wiki/Special:AllPages?from=&to=&namespace=12), the namespace for user guides

<br>

***

## The hosting site

The hosting I chose for the wiki is **Miraheze**. *Fandom* might be a more popular, user-friendly, and ready-to-use solution, but it lacked the main feature we needed: Private wikis. And being free, of course- Miraheze is entirely funded by donations.

It only applies a thin layer of tools over MediaWiki, the open-source software that most Wikis run on. Said tools are only a layer of control over settings (mostly security and permissions) and a handful of optional MediaWiki extensions. The rest is mostly barebones. Each Wiki's admins have to build their own widgets, templates and themes.

<br>

***

## Site theme and Common.css

The software relies on a basic HTML structure that we can't touch, but gives us free reign over its CSS. Starting from one of MediaWiki's approved available 'skins', admins can modify site-wide CSS through the [MediaWiki:Common.css](https://dlelysium.miraheze.org/wiki/MediaWiki:Common.css) page.

{% include elements/figure.html image="/assets/img/elysium2.png" caption="Some sensitive pages like 'Log in' and 'Preferences' disable Common.css, which reverts the wiki to its original state" %}

Even without being able to modify the source files directly, inspecting the site's HTML structure gives us plenty of information to modify the looks of the page with Common.css

{% include elements/wikicss.html %}

<br>

***

## Templates: MediaWiki's widgets and more

The content of MediaWiki pages is usually written in **wikitext**, a markdown language. It shares a lot of similarities with Liquid, as it can parse (a sanitized subset of) HTML elements, call variables and functions, and transclude templates.

Most Wiki editors will use the latter to add content to their pages, as MediaWiki's Visual Editor offers a user-friendly way of adding elaborate widgets with only a few clicks.

Templates are **not** premade, so wiki admins have to *build them themselves.* There are plenty of well-known Template types that most wikis use in one capacity or another- but given the particularities of each site, the majority have to be made manually.

<p style="width:75%;margin-right:auto;margin-left:auto;"> {% include elements/button.html link="https://dlelysium.miraheze.org/wiki/Special:AllPages?from=&to=&namespace=10" text="See a list of all DL:E templates" style="outline-primary" size="lg" block="true" %} </p>

<br><br>

#### Some can be as simple as notice banners...

{% include elements/wikistub.html %}

<br>

#### ...Or as elaborate as information boxes

{% include elements/wikiinfobox.html %}

<br>

***

## Helping improve the software

As I worked on the wiki, I often bumped against the same wall: I was looking to enable features that did not exist.

Before reinventing the wheel, I searched through all available settings and extensions. Finding no results, I wondered if I had to add Lua modules or JS code myself. An extensive search in discussion forums and asking on developer Discord servers told me those features were not only not included- but apparently, no one had implemented them for their own site before. Or barely thought about it...

One was a real overseeing from mediaWiki developers, and was patched up after a bug report and some testing I helped with.

Another one was an application of an extension the developers didn't think of before. I could have coded it myself, but the dev offered to add it to the source code of the extension themselves, to make the improvement available to everyone.

A [third one](https://dlelysium.miraheze.org/wiki/Help:Editing_an_Infobox) is a glaring bug that plagues the Visual Editor- and since most developers use the Source Editor, it has been brushed aside. I plan to code a JS fix myself, but for now, I left instructions for my users on how to avoid it.

The [fourth one](https://dlelysium.miraheze.org/wiki/Template:CategoryGallery) is a completely new feature. I coded it myself and I plan to submit it as an extension once I test it more extensively, and I make sure it's robust.

