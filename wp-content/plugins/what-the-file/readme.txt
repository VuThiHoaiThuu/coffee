=== What The File ===
Contributors: never5, barrykooij
Donate link: http://www.barrykooij.com/donate/
Tags: toolbar, development, file, template, template editing, Template Hierarchy, theme, themes, php, php file, template part
Requires at least: 3.1
Requires PHP: 5.3
Tested up to: 6.3
Stable tag: 1.6.0
License: GPL v3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

What The File is the best tool to find out what template parts are used to display the page you're currently viewing!

== Description ==

What The File adds an option to your toolbar showing what file and template parts are used to display the page you're currently viewing.

You can click the file name to directly edit it through the theme editor, though I don't recommend this for bigger changes.

What The File supports BuddyPress and Roots Theme based themes.

More information can be found <a href='http://www.barrykooij.com/what-the-file/'>here</a>.

= Looking for a great related posts plugin for WordPress? =
Another plugin I've built, that I'm very proud of is Related Posts for WordPress. Related Posts for WordPress offers you the ability to link related posts to each other with just 1 click! And it's 100% free! [Check it out on the WordPress repository.](https://wordpress.org/plugins/related-posts-for-wp/)

== Installation ==

1. Upload `what-the-file` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently asked questions ==

= Where can I see what template file is used? =

In the toolbar you will find the "What The File" option. Hovering this option will display the currently used template file, clicking the template file name will allow you to edit the template file with the WordPress file editor. Please note that some BuddyPress files can't be edited in the WordPress editor.

= I can't find the "What The File" option in the toolbar =

You have to be an Administrator to see the "What The File" option.

= What PHP version are supported / tested? =

What The File works supports starts at PHP 5.3 and is tested on every major release up until PHP 8.1.

= Does What The File supports BuddyPress =

Yes it does.

= Does What The File supports Roots Theme =

Yes it does.

= You saved me so much time, is there any way I can thank you? =

Glad to hear I could help you! You can thank me in various ways, please see [my donation page](http://www.barrykooij.com/donate/) to find out more.

== Screenshots ==

1. What The File shows you what template file is used.

== Changelog ==

= 1.6.0: September 19, 2022 =
* Feature: Now correctly working with the wp_body_open tag. Full template part support is back.
* Tweak: Used proper add_site_option argument count. props @szepeviktor
* Tweak: Optimized file editing allowed function. props @szepeviktor
* Tweak: Change template_include priority from 1000 to PHP_INT_MAX for wider support. props @greenshady
* Tweak: Version and meta update.

= 1.5.4: October 8, 2017 =
* Version and meta update.

= 1.5.3: May 2, 2016 =
* Appended an extra check for the Sage starter theme, props [remyvv](https://github.com/remyvv).

= 1.5.2 =
* Fixed a CSS bug with admin bar.

= 1.5.1 =
* Fixed a bug where some themes make _all_ images display block.

= 1.5.0 =
* Only add edit link if direct file editing is allowed. Props szepeviktor
* Wrapped initiation in hooks and split frontend and admin code.
* Removed use of create_function.
* Various code optimizations.

= 1.4.1 =
* Fixed wrongly aligned arrow in MP6 - props [remyvv](https://github.com/remyvv).
* Template parts are now correctly shown in child themes - props [remyvv](https://github.com/remyvv).
* Code style change.

= 1.4.0 =
* Fixed a template part bug, props remyvv
* Code style change

= 1.3.2 =
* Plugin now check if file exists in child theme or parent theme.

= 1.3.1 =
* Editing files directly through the theme editor now supports child themes.

= 1.3.0 =
* Added template part support.

= 1.2.1 =
* Improved the admin panel and administrator role check.

= 1.2.0 =
* Added BuddyPress support.
* Added WordPress.org review notice.
* Fixed admin check.
* Small code changes and refactoring.
* Extended GPL license.

= 1.1.2 =
* Fixed admin url bug caused when WordPress is installed in a subdirectory.

= 1.1.1 =
* Small meta information changes.

= 1.1.0 =
* Added Roots Theme support.
* Added WordPress 3.5.1 support.
* Meta information changed.

= 1.0.3 =
* Added WordPress 3.5 support.
* Small meta information changes.

= 1.0.2 =
* Fixed incorrect url when theme directory name differs from theme name.

= 1.0.1 =
* Changed the way the plugin initializes.
* Moved CSS from file to inline CSS.
