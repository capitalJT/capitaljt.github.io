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

Default.settings.php

https://api.drupal.org/api/drupal/sites!default!default.settings.php/7

Drupal theming
[https://www.drupal.org/theming](https://www.drupal.org/theming)


6.18.15 - 2:30pm

Moving entire Dupal site with databases

https://www.drupal.org/node/46389#comment-3812070


 Migrating a site

https://www.drupal.org/node/776864


 File permissions - chmod

http://www.linux.org/threads/file-permissions-chmod.4094/

tar -cvzf drupal7.tar.gz ./drupal7



**6-19-20**  

This is how I did a mysql dump  
`mysqldump drupal7 -ujabal -psocialma1 --host localhost > drupal7.sql`  

I originally got permission errors so the following gave me one-time access  
`mysqldump --opt --single-transaction -u jabal -p drupal7 > dump.sql`  

This is how to connect to my personal server with ssh:  
`ssh jabaltorres@23.229.174.73`  

This is where I'm going to be working from on my local server:  
`/home/jabaltorres/public_html/drupal-test`  

This was the command that I used to copy the sql(tar) file from my local machine to the live server:  
`scp drupal7-dump.sql.tar.gz jabaltorres@23.229.174.73:/home/jabaltorres/public_html/drupal-test`  

Copy the drupal directory(tar) file from my local machine to the live server:  
`scp drupal7.tar.gz jabaltorres@23.229.174.73:/home/jabaltorres/public_html/drupal-test`  

Another way (shorter) of doing this would be:  
`scp drupal7.tar.gz jabaltorres@23.229.174.73:~/public_html/drupal-test`  

Expand the directory tree (unpackage) -  I personally didn’t need the “sudo”  
`sudo tar -xzf drupal7.tar.gz`  

Extracting the tar file  
`tar -xzvf drupal-7.38.tar.gz`  
`sudo tar -xzf drupal7-dump.sql.tar.gz`  


 ====================================================================



 I'm getting denied permission for a few files (the following are the current permission)

 - default/._default.settings.php  -rw-r--r--  (644)

- default/default.settings.php    -rw-r--r--  (644)

- default/files/                  drwxrwxr-x  (775)

- default/settings.php            -r--r--r--  (444)


 - sites/default/                  dr-xr-xr-x@ (555)


 I think the errors are being caused because of permissions to the above files. It would probably be a good idea to give all permissions to the parent directory (default).


 Basically, this threw me right back to square one because of the permission. My server currently has the tar files but I think that I'm going to have to remove them and update them.


 this is the working directory for prep for sex

/home/bwaweb333/www/prepforsex.org


 I need to copy the directory from my local machine to the live server.


 How to make a tar ball

tar -cvzf drupal7.tar.gz ./drupal7



 Success!!!


 so what did I do?

gave full permissions to the problem files above

I got all of the database info from
drupal7/sites/default/settings.php

used GoDaddy’s cPanel to create the database to reflect the settings.php

used GoDaddy’s cPanel to create the user to reflect the settings.php

used GoDaddy’s cPanel to assign the new user to the newly created database

used GoDaddy’s cPanel to assign permissions to the new user






7-1-15




 





7-2-15



In order for Drupal and Codekit play nice together I had to create a “Preview Subpath” . I had to do this because I found that when I clicked on the links Drupal appended “drupal7/” to the url.



 Customizing the Node Template


 I started off by copying the node template file from:

drupal7/modules/node/node.tpl.php


 and placing it into my new custom theme directory. If Drupal recognizes that there is a node template file within my directory it will use this one over the one that was provided by Drupla. (very similar to WordPress)





This was for Shen Designs  
`scp -r dbz_300x250_availnow jabaltorres@23.229.174.73:/home/jabaltorres/public_html/ dbz/dbz_300x250_availnow_lowres`  

`scp -r dbz_300x250_availnow jabaltorres@23.229.174.73:/~/www/dbz/dbz_300x250_availnow_lowres` 