---
layout: post
title:  "Drupal Notes"
date:   2016-10-08 09:06:57 -0700
categories: bash
---

http://www.appnovation.com/blogs/drupal
https://drupalize.me/

LevelUp Tuts - Drupal Video Playlist
https://www.youtube.com/playlist?list=PL15BE2E8313A4E809

- http://nodeone.se/en
- http://tutr.tv/
- http://dannyenglander.com/

Useful Unix/Linux commands for Drupal  
https://www.drupal.org/taxonomy/term/32638  

Restoring a database backup (command line)  
https://www.drupal.org/node/345225  

Drupal theming
[https://www.drupal.org/theming](https://www.drupal.org/theming)


**6.18.15 - 2:30pm**

Moving entire Dupal site with databases
https://www.drupal.org/node/46389#comment-3812070


Migrating a site
https://www.drupal.org/node/776864


File permissions - chmod
http://www.linux.org/threads/file-permissions-chmod.4094/

`tar -cvzf drupal7.tar.gz ./drupal7`

---

This is the working directory for prep for sex

`/home/bwaweb333/www/prepforsex.org`

---

How to make a tar ball

`tar -cvzf drupal7.tar.gz ./drupal7`

---

Success!!!

so what did I do?

gave full permissions to the problem files above

I got all of the database info from
drupal7/sites/default/settings.php

used GoDaddy’s cPanel to create the database to reflect the settings.php

used GoDaddy’s cPanel to create the user to reflect the settings.php

used GoDaddy’s cPanel to assign the new user to the newly created database

used GoDaddy’s cPanel to assign permissions to the new user

---

7-2-15

In order for Drupal and Codekit play nice together I had to create a “Preview Subpath” . I had to do this because I found that when I clicked on the links Drupal appended “drupal7/” to the url.

Customizing the Node Template

I started off by copying the node template file from:
drupal7/modules/node/node.tpl.php

and placing it into my new custom theme directory. If Drupal recognizes that there is a node template file within my directory it will use this one over the one that was provided by Drupla. (very similar to WordPress)


---

### Drupal Security Update

// These are notes that are arising when looking into how to install security updates for Drupal.

Run - http://yoursite.com/update.php
For me that would be http://localhost/drupal7/update.php

- Back up your database.
- Back up your code.
- Put site into Maintenance Mode.
- Install new files

Upgrading Handbook
https://www.drupal.org/upgrade

Update Procedure (Minor Version Change)
https://www.drupal.org/node/1223018

Enable / Disable Maintenance Mode
http://localhost/drupal7/admin/config/development/maintenance


### Drupal Theming Notes

https://drupalize.me/videos/introduction-advanced-theming-drupal-7?p=1146

Note:
- Don’t put complicated code / logic into your .tpl.php file
- Template.php - the theming ninja’s weapon of choice.

- .tpl.php files are for markup
- theme_functions in template.php are for PHP heavy code.
- Whenever possible, modules should provide .tpl.php files.
- Complex logic will be distilled into a variable for the tpl.php file.

- markup lives in .tpl.php files
- functions live in template.php files
- it is Drupal coding standards for php files to only have opening php tags.

- variable substitution and translating variables: https://api.drupal.org/api/drupal/includes%21bootstrap.inc/function/t/7
- global $user variables: https://api.drupal.org/api/drupal/developer!globals.php/global/user/7

- its not a good id to use the krumo / kpr debugging function when the the Themer module is activated

Add CSS Stylesheet through a function:
https://api.drupal.org/api/drupal/includes%21common.inc/function/drupal_add_css/7

Add JavaScript file through a function:  
https://api.drupal.org/api/drupal/includes%21common.inc/function/drupal_add_js/7  

-  Any time you add a theme override function to the template.php file you will need to clear the cache

From: Overriding Theme Functions
https://drupalize.me/videos/overriding-theme-functions-0?p=1146

Basic theming concepts
- Find the object on the page that you would like to theme
- Find the theme function that is used to generate that element on the page
- Copy & paste the code for that function into your template.php file
- Rename the function to use the name of your theme (in our case it would ninesixtyrobots_breadcrumbs)
- Make any changes that I want to that function
- Flush the cache

A list of drupal_get functions
https://api.drupal.org/api/drupal/7/search/drupal_get

