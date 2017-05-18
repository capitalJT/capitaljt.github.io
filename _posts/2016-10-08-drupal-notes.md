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