---
layout: post
title:  "Bash & Terminal Resources"
date:   2016-10-11 09:49:20 -0700
author: Shit stick
categories: blog post
---

### Bash Resources

Opening Sublime Text on command line as subl on Mac OS?  
[http://stackoverflow.com/questions/16199581/opening-sublime-text-on-command-line-as-subl-on-mac-os](http://stackoverflow.com/questions/16199581/opening-sublime-text-on-command-line-as-subl-on-mac-os)  

---

### Terminal Resources

Customizing your terminal  
[http://dobsondev.com/2014/02/21/customizing-your-terminal/](http://dobsondev.com/2014/02/21/customizing-your-terminal/)  

rsync commands  
[http://www.computerhope.com/unix/rsync.htm](http://www.computerhope.com/unix/rsync.htm)  

deploy with rsync
[https://laracasts.com/discuss/channels/servers/deploy-with-rsync](https://laracasts.com/discuss/channels/servers/deploy-with-rsync)  

---

### Aliases

From video “Setting up Bash Aliases” - Drupalize.me  

- Aliases created in Terminal on a Mac are stored in .bash_profile
- Always remember to start a new session after creating a new alias
- good idea would be to create aliases for commonly misspelled commands (typos)
- another good idea would be to create shortcuts to certain directories

---

### SCP Examples:

This was for Shen Designs  
`scp -r dbz_300x250_availnow jabaltorres@23.229.174.73:/home/jabaltorres/public_html/ dbz/dbz_300x250_availnow_lowres`  

`scp -r dbz_300x250_availnow jabaltorres@23.229.174.73:/~/www/dbz/dbz_300x250_availnow_lowres` 

---

### Kill Apache:
`sudo apachectl stop`
