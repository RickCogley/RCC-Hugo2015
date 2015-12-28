---
author: Rick Cogley
authorlink: /about
authortwitter: 'https://twitter.com/rickcogley'
title: MediaWiki Tips
subtitle: ... and notes to myself
slug: mediawiki-tips
banner: /img/Cogley-Banner-PSU-1170x350-008-mono.jpg
banneralt: 'Photo of a Power Supply Unit, by Rick Cogley.'
bannercss: bnr-psu-mono
date: 2015-12-17T22:48:00+09:00
publishdate: 2015-12-17T17:52:00+09:00
description: 'Quick list of tips for MediaWiki system administrators, a post by Rick Cogley.'
draft: 'false'
images:
  - /img/Cogley-Post-Mediawiki_Logo.png
  - /img/Cogley-Banner-PSU-1170x350-008-mono.jpg
  - 'http://static.cogley.info/img/rick-cogley-avatar-240x240.png'
showauthor: 'true'
showcomment: 'true'
showdate: 'true'
showpaging: 'true'
showreadingtime: 'true'
showsocialsharing: 'true'
showtoc: 'false'
showtotop: 'true'
lightbox: 'true'
tags:
  - MediaWiki
topics:
  - Tips
  - SysAdmin
  - Software
---

To jog my own memory for the next time I need to do this, I assembled this handy list of tips for setting up a MediaWiki site, as I went along making settings. It might help you, too. 

<!--more-->

## Docs

* General help: [https://meta.wikimedia.org/wiki/Help:Contents](https://meta.wikimedia.org/wiki/Help:Contents)
* Advanced editing syntax: [https://meta.wikimedia.org/wiki/Help:Advanced\_editing](https://meta.wikimedia.org/wiki/Help:Advanced_editing)

## Setup

<figure class="photo-inline-right">
  <a href="/img/Cogley-Post-Mediawiki_Logo.png" title="Logo: WikiMedia" data-lightbox="set1" data-title="Logo: WikiMedia"><img class="photo300 pure-img" src="/img/Cogley-Post-Mediawiki_Logo.png" alt="Logo: WikiMedia" ></a>
  <figcaption><em>Logo</em>: WikiMedia</figcaption>
</figure>

MediaWiki's setup is quite well developed by now, and a lot of settings are done automatically for you. At the end, it creates a ``LocalSettings.php`` which you download, and then place in the root of your site. After you do, refresh your browser and the settings will take hold.

### Change the Site Name

In `LocalSettings.php`, edit this value:

~~~bash
$wgSitename = "Acme Inc. Wiki";
~~~

### Set the Logo

Put the logo in `/resources/assets`, then in `LocalSettings.php`, edit this value:

~~~bash
$wgLogo = "$wgResourceBasePath/resources/assets/mylogo.png";
~~~

### Set the wiki site URL

In `LocalSettings.php`, edit this value:

~~~bash
$wgServer = "http://wiki.mydomain.com";
~~~

### Set the email from: addresses

In `LocalSettings.php`, edit these values:

~~~bash
$wgEmergencyContact = "user@mydomain.com";
$wgPasswordSender = "user@mydomain.com";
~~~

### Set Copyright Text and Suppress Icon

In `LocalSettings.php`, edit these values:

~~~bash
$wgRightsText = "copyright Taro Tanaka, all rights reserved";
unset( $wgFooterIcons['copyright'] );
~~~

### Set Upload Size Limit

In `LocalSettings.php`, edit these values:

~~~bash
$wgFileExtensions = array( 'png', 'gif', 'jpg', 'jpeg', 'doc', 'xls', 'mpp', 'pdf', 'ppt', 'tiff', 'bmp', 'docx', 'xlsx', 'pptx', 'ps', 'mp3', 'odt', 'ods', 'odp', 'ogg', 'odg'
);
$wgMaxUploadSize = array(
	'*' => 1024 * 1024 * 100, // 100 MB
	'url' => 1024 * 1024 * 100, // 100 MB
);
~~~

Make these settings in your `php.ini`:

~~~bash
upload_max_filesize = 100M
post_max_size = 100M
~~~

### Protect "images" folder

In the `images` folder where uploads are stored, there is an `.htaccess` file, to which you can add some lines to protect against security breaches (per the MediaWiki manual). Edit it as follows:

~~~bash
# Protect against bug 28235
	<IfModule rewrite_module>
		RewriteEngine On
		RewriteCond %{QUERY_STRING} \.[^\\/:*?\x22<>|%]+(#|\?|$) [nocase]
		RewriteRule . - [forbidden]
		# Fix for bug T64289
		Options +FollowSymLinks
	</IfModule>
# Serve HTML as plaintext, don't execute SHTML
  AddType text/plain .html .htm .shtml .php .phtml .php5

# Old way of registering php with AddHandler
	RemoveHandler .php

# Recent way of registering php with SetHandler
	<FilesMatch "\.ph(p[345]?s?|tml)$">
	   SetHandler None
	</FilesMatch>
~~~

### Set up Editor

In `LocalSettings.php`, edit these values to control the "WikiEditor" extension:

~~~bash
$wgAllowUserJs = true;
$wgUseSiteJs = true;
$wgDefaultUserOptions['usebetatoolbar'] = 1;
$wgDefaultUserOptions['usebetatoolbar-cgd'] = 1;
$wgDefaultUserOptions['wikieditor-preview'] = 1;
$wgDefaultUserOptions['wikieditor-publish'] = 1;
~~~

You need to add some javascript to get some aspects of the toolbar to work, and you do this by editing a special wiki page in the MediaWiki namespace. Search for this file and edit it to add javascript to load for every user: `MediaWiki:Common.js`

For instance, this will add a strike-through button.

~~~javascript
/* Any JavaScript here will be loaded for all users on every page load. */

	var customizeToolbar = function() {
		/* Your code goes here */

	$('#wpTextbox1').wikiEditor('addToToolbar', {
		section: 'advanced',
		group: 'format',
		tools: {
			"strikethrough": {
				label: 'Strike',
				type: 'button',
				icon: '//upload.wikimedia.org/wikipedia/commons/3/30/Btn_toolbar_rayer.png',
				action: {
					type: 'encapsulate',
					options: {
						pre: "<s>",
						post: "</s>"
					}
				}
			}
		}
	});
	};

	/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar … */
	if ( $.inArray( mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
		mw.loader.using( 'user.options', function () {
			// This can be the string "0" if the user disabled the preference ([[phab:T54542#555387]])
			if ( mw.user.options.get( 'usebetatoolbar' ) == 1 ) {
				$.when(
					mw.loader.using( 'ext.wikiEditor.toolbar' ), $.ready
				).then( customizeToolbar );
			}
		} );
	}
	// Add the customizations to LiquidThreads' edit toolbar, if available
	mw.hook( 'ext.lqt.textareaCreated' ).add( customizeToolbar );
~~~

### Convenient "Special Pages"

MediaWiki admin uses a lot of what are termed "Special Pages", for which there's a link in the left hand menu. In any wiki page, make a link to `[[Special:SpecialPages]]` to access the collection from anywhere.

Each has a unique URL per wiki and here are a few frequently used ones, which you can paste in where you need:

* List all recent changes in the wiki: `[[Special:RecentChanges]]`
* List all media files in the wiki: `[[Special:ListFiles]]`
* Add users: `[[Special:CreateAccount]]`
* Set user permissions / rights: `[[Special:UserRights]]`

### Categories

To enable categories, you need to add the "CategoryTree" extension into the `/extensions` folder in the root of the site. Once enabled, you can add categories to each page by adding this: `[[Category:Procedures]]`

Then, you can display pages in a category by adding this code to an index page: `<categorytree mode=all>Procedures</categorytree> `

### Lists of Pages

You can display lists of pages in the wiki using double curly brackets, and by specifying the namespace.

~~~bash
{{Special:AllPages}}
{{Special:AllPages|namespace=12}}
~~~

To find the namespace number, you can visit `Special:AllPages`, drop the namespace list down, search, and note the namespace number in the URL.

### Custom Titles and Labels

MediaWiki allows you to edit various aspects of its interface, by editing pages under the `MediaWiki` namespace. You search for each of these pages by searching for e.g. `MediaWiki:Search`, and editing and saving that page.

* Advanced Search title: `MediaWiki:Search`
* Browser Page title, for bookmarks: `MediaWiki:Pagetitle`
* Edit tab text: `MediaWiki:Edit`
* Sidebar structure: `MediaWiki:Sidebar`
* Upload text: `MediaWiki:Uploadtext`
* Copyright text: `MediaWiki:Copyright`
* Copyright warning when saving edits: `MediaWiki:Copyrightwarning` and `MediaWiki:Copyrightwarning2`
* Edit summary when reverting: `MediaWiki:Revertpage`
* Place to enter syntax help under edit form: `MediaWiki:Edittools`
* Default text in new articles: `MediaWiki:Newarticletext`
* Text under tabs on all pages: `MediaWiki:Sitenotice`
* Text under page title: `MediaWiki:Tagline` or, for specific languages, `MediaWiki:Tagline/en`
* Home page name: `MediaWiki:Mainpage`

### Variables

MediaWiki has a bunch of variables that are used in various places. Read more: [https://meta.wikimedia.org/wiki/Help:Variable](https://meta.wikimedia.org/wiki/Help:Variable)

## Daily Usage

The below actions may require you to be logged in, especially if your MediaWiki is set to private. Also, obviously you may have to click Save.

### Set up personal Preferences

Click Preferences on the upper right. Set Real Name.

Appearance, set Date Format to preferred, Timezone to Asia/Tokyo.

Editing, set enable section edit via right click, and edit on double click. As well as "show edit toolbar", "enable enhanced editing toolbar" and "enable wizards for inserting links etc".

### Create a Page

Make a page by searching for it (e.g. "Foo"), and clicking "Create the page "Foo" on this wiki!" to create. This creates the page in the "Main" namespace, which is fine for most content.

You can also create a page by linking to it, saving, then clicking the red link to jump to the freshly created page.

### Create a Page in a Namespace

MediaWiki has several namespaces (think of them as folders) built in. To create a page in a namespace, just search for it with the namespace prepended, like: `Help:FAQ`

To see the namespaces, visit `Special:AllPages` and drop down the namespace list.

### Edit a page

Per settings, you can just double click the page, or, click one of the Edit links. See [Advanced Editing](https://meta.wikimedia.org/wiki/Help:Advanced_editing "Advanced Editing") for detail on editing syntax.

Every edit, add a quick summary in the textbox at the bottom, because you can refer to them in the View History.

### Categorize a page

Assuming you've installed the "CategoryTree" extension, add any page to a category by adding code like this somewhere on the page: `[[Category:Procedures]]`

### Discuss a page on Talk pages

MediaWiki has a convention of having a "talk" page for every wiki page, to allow its content to be discussed without messing up the main text.

See the "Discussion" tab at the top of every page? That's the talk page. There is also a talk page for each person.

When you leave a comment on a talk page, the convention is to enter your comment with a signature. Use the signature button in the editor for that.

### Delete, Move or Protect a Page

You can also delete, move or protect a page. Use the "more" menu near the search box.

### Add an Image or file

Click Upload File from the left link list. You can view `[[Special:ListFiles]]` to see all the files in the wiki.

Note the file's filename (just upload it and copy from the screen that appears right after the upload), and use that to embed it in a page: `[[File:MyChart-2015]]`

If you don't want to _embed_ the file in the page, you can _link_ to its description page by including a colon at the beginning, after the opening bracket:  `[[:File:MyChart-2015]]`

### Link or Reference
Learn the difference between entering links using curly and square brackets. For instance, on a test page try:

`[[Special:ListFiles]]`

... versus ...

`{{Special:ListFiles}}`
