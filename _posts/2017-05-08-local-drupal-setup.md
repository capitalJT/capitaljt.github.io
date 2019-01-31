---
layout: post
title:  "Local Drupal Setup"
date:   2017-05-08 12:16:01 -0600
---

Note: All links open in a new browser tab. Click the link, complete the task, close the tab, then move to the next task.

## Every time you pull down the database be sure to:  

1) Pull code from SmartGit from Dev

2) Complete a database download using the Acquia Dev Desktop tool

3) When complete - login to your local <a href="http://adaptive.dev.dd:8083/user" target="_blank">adaptive.dev.dd:8083/user</a>.  

4) Go to the <a href="http://adaptive.dev.dd:8083/admin/config/media/file-system" target="_blank">media files system configuration options</a> and change the media settings for **Temporary directory** to `sites/default/files`  

5) Go to the <a href="http://adaptive.dev.dd:8083/admin/modules" target="_blank">Modules List</a> and search "acq".
- Disable **Acquia Site Profile Information**  
- Disable **Acquia Purge**  
- Save configuration  
- Your environment should look like <a href="http://adaptivecommunity.com/documentation-assets/images/wiki-screenshots/local-dev-setup-00.png" target="_blank">this</a>.  

6) Go to the <a href="http://adaptive.dev.dd:8083/admin/config/development/performance" target="_blank">Performance Options</a> and turn off all system caching and bandwidth optimization. Save configuration.  

7) From `docroot` Run `drush rr` and make sure it runs clean with no errors

If you return the following message:

		The drush command 'rr' could not be found.  Run `drush cache-clear   [error]
		drush` to clear the commandfile cache if you have installed new
		extensions.

You need to rebuild the registry with `drush @none dl registry_rebuild-7.x`. Then run `drush rr`. More info here: <a href="https://www.drupal.org/project/registry_rebuild" target="_blank">https://www.drupal.org/project/registry_rebuild</a>.

8) Run `drush cron`.

9) Run `drush cc all`.

10) Render all of your <a href="http://adaptive.dev.dd:8083/admin/structure/features" target="_blank">Features</a> to default state (See Bob if you don't know how to revert a feature properly/safely)