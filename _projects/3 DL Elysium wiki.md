---
name: DL:Elysium wiki
tools: [MediaWiki, HTML, CSS, Writing]
image: https://dlelysium.miraheze.org/w/thumb_handler.php/b/ba/Demon_emblems.png/300px-Demon_emblems.png
description: I'm making an entire wiki for a collaborative writing group. This includes skin and widget coding, guide and content writing, and user management.
external-url: https://dlelysium.miraheze.org/wiki/Main_Page
---

# The Book of DL:Elysium

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

#### With things as simple as changing the main header...

{%- highlight css -%}
#header #p-banner.mw-wiki-title {
	font-family: Cinzel Decorative, serif;
	font-size: 200%;
	text-transform: lowercase;
	font-weight: 500;
	margin-left: -20px; 
    padding-left: 0 !important; 
    z-index:9;
    position: relative; 
    text-shadow:-1px 0 1px #fff, 0 0 1px #fff, 0 3px 1px #000, 0 3px 7px #000;
    filter:drop-shadow(0 0 15px #FFFFFFAA);
}

#header #p-banner:hover {
        text-shadow: -1px 0 2px #fff,0 -1px 1px #fff,0 3px 1px #000,0 3px 10px #fff, 3px 0 10px #fff;
    }

@media (max-width: 700px) {
    .mw-wiki-title {
		margin-left:0;
    }
{%- endhighlight -%}

#### ...to removing elements for both aesthetics and usability

<details>
    <summary class="text-monospace">Click here to see the code, it's long~</summary>
 {%- highlight css -%}
/* Hide the namespaces in some titles*/
[class*="page-Category_"] .mw-page-title-namespace,
[class*="page-Category_"] .mw-page-title-separator,
[class*="page-Elysium_"] .mw-page-title-namespace,
[class*="page-Elysium_"] .mw-page-title-separator,
[class*="page-Help_"] .mw-page-title-namespace,
[class*="page-Help_"] .mw-page-title-separator {
	display: none;
}

/* Delete those mysterious <p> under the main title */
#contentSub > p {
	margin:0;
}

/* Apply flexbox layout to the h2 element to let us move the 'Edit source' */
.mw-body-content h1,
.mw-body-content h2,
.mw-body-content h3,
.mw-body-content h4,
.mw-body-content h5,
.mw-body-content h6 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Ensure ::after is positioned correctly */
}

/* Use ::after pseudo-element to maintain the background image */
.mw-body-content h1::after, .mw-body-content h2::after {
  content: '';
  background-image: url(/1.41/skins/Splash/resources/images/hr.svg?30829);
  background-repeat: no-repeat;
  background-position: 0 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .125em; /* Adjust the height to match the image height */
}

/* Ensure mw-headline takes the remaining space */
.mw-body-content .mw-headline {
    text-align: left;
    flex-grow: 1;
}

/* Move 'Edit source' in article sections to the right */
.mw-body-content .mw-editsection {
  font-size: 12px;
  margin-left: auto;
  margin-right: -1em /* Pushes mw-editsection even more to the right */
}

/* Make the lower levels of headers have normal lowercase */
.mw-body-content h5 .mw-headline,
.mw-body-content h6 .mw-headline {
	font-variant-caps: normal;
}

/* Not letting people edit only tiny sections, because what for? Plus it looks ugly */
.mw-body-content h4 .mw-editsection,
.mw-body-content h5 .mw-editsection,
.mw-body-content h6 .mw-editsection {
	display: none;
}

/* Changing header links from color to underline */
.mw-body-content .mw-headline a {
	color: var(--header-color);
	text-decoration: underline var(--header-color);
}
{%- endhighlight -%}
</details>

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