---
layout: post
title:  "Splash Theme Notes"
date:   2017-05-17 17:53:20 -0700
author: Jaballest
categories: blog post
---

## Gulp.js

The following instructions have been tested on a freshly wiped MacBook Air 13'.

---

### Installation

- [iTerm](https://www.iterm2.com/)  
- Show hidden files
	- From the terminal run `defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app`
- Update your `.bash_profile` with my [bash profile](https://gist.github.com/capitalJT/2a66ecc9c447c7a67daf#file-bash_profile)
- [Command Line Tools](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) - this process takes a few mins.
- [Homebrew](https://brew.sh/)  
	- I followed this tutorial to install Homebrew and Ruby [Rails installation tutorial](https://gorails.com/setup/osx/10.12-sierra) - Installing ruby with rbenv took about 5 mins
- Ruby
	- [How to update Ruby Version 2.0.0 to the latest version in Mac OSX Yosemite?](http://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite)
	- [Installing Ruby & Jekyll on Mac OSX](https://andytaylor.me/2012/11/03/installing-ruby-and-jekyll/) 

- [Node.js](https://nodejs.org/en/)
	- Make sure that /usr/local/bin is in your $PATH - [Stackoverflow Link](http://stackoverflow.com/questions/11025980/how-to-add-usr-local-bin-in-path-on-mac)

- Install Gulp's command line interface (CLI) globally - [link](https://gruntjs.com/getting-started)  
	`npm install gulp-cli -g`  
	- Some info on [working with and existing grunt project](https://gruntjs.com/getting-started#working-with-an-existing-grunt-project)  
- Install text editor
	- [Sublime Text](https://www.sublimetext.com/3) or [Atom](https://atom.io/)
- [Acquia Dev Desktop](https://dev.acquia.com/downloads)
	- Log into your account
	- Checkout DEV branch from codebase - this can take forever
	- Make sure you have your Acquia private key handy!
- [Smartgit](http://www.syntevo.com/smartgit/)
	- Make sure you have the codebase checked out from Acquia first
	- Add the repository from its cloned location  
	~~~~
	~/Users/<yourname>/Sites/devdesktop/adaptive-dev
	~~~~
	- Follow the [Drupal configuration notes](https://github.com/AdaptivePlanning/adaptive-docs/wiki/Drupal-Configuration-Notes) if this is your initial setup.
		- after a fresh new install I found the `drush rr` command didn't work for me.
		- `cd` to the splash theme run `npm install`
			- We might want to consider installing phantomjs globally. Here's [link](http://stackoverflow.com/questions/18218134/warning-phantomjs-not-found) how to.
		- After all the node modules and dev dependencies have loaded run `gulp`. 
			- This will start a chain of gulp functions:
				`sass`
				`watch`
				`browser-sync`
				`default`
			- More importantly the `gulp` task will proxy `http://adaptive.dev.dd:8083` and create a couple access urls; local: `http://localhost:3000` and UI: `http://localhost:3001`. 
		- The default gulp command runs `browser-sync` and `watch`
			- `watch` watches for changes to any scss files, if so fires the gulp `sass` function and reloads the browser by firing `browserSync.reload`

		- Most theme development happens at `http://localhost:3000`

---

## Gulp Tasks
(Insert brief description below task name)

- `gulp sprites`
- `gulp sass`
- `gulp scripts`
- `gulp lint`
- `gulp clearcache`
- `gulp reload`
- `gulp watch`
- `gulp browser-sync`
- `gulp default`

---

### SVG sprites 

**Requirments:** svg2png uses the latest in ES2015 features, and as such requires a recent version of Node.js. Only the 6.x series onward is supported.  

![alt text][gulp-sprites]

[gulp-sprites]: http://adaptivecommunity.com/documentation-assets/images/docs-screenshots/gulp-sprites.png "gulp sprites screenshot"

This image is for reference for when I have to break down each step of the function.

- Line about how to create svg icons with Sketch
	- Workflow
	- Layers
	- Naming conventions
- When do we run this function?
- Where are the icons located?
- Include code snippet on how to use with codebase

The `sprites` task requires: 

- `svgSprite`
- `filter`
- `svg2png`

1. gulp sources the svgs
2. svgSprite function runs, taking arguments
	- List arguments resources here
3. svgSprite uses the `baseSize` argument to help with sass spacing values
4. name and location of the sass sprite partial
5. svg sprite name and destination
5. destination of preview html page

---

## Gulp Notes
- Gulp commands run at the root of the theme.

--

### Favorite Gulp Packages
- [Gulp Uglify](https://www.npmjs.com/package/gulp-uglify)

--

### Gulp Resources
- [http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/)
- [Drupal 101: Theming Drupal 7 with gulp](https://www.chenhuijing.com/blog/drupal-101-theming-with-gulp/)  
- [Getting started with Gulp and Sass](http://ryanchristiani.com/getting-started-with-gulp-and-sass/)  
- [Getting started with gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
- [BrowserSync Documentation](https://www.browsersync.io/docs/gulp)
- [Concatenate & Minify Javascript with Gulp, Improve Site Performance](http://codehangar.io/concatenate-and-minify-javascript-with-gulp/)  
- [Gulp - remove local plugin](http://stackoverflow.com/questions/33814009/gulp-remove-local-plugin)  
- [Node streams handbook](https://github.com/substack/stream-handbook)  
- [Gulp-jshint Tutorial](http://javascriptplayground.com/blog/2014/02/an-intro-to-gulp/)  
- [jshint Dependency Fix](https://github.com/spalger/gulp-jshint/issues/131#issuecomment-160395536)  
- [How to ignore files in jshint](http://stackoverflow.com/questions/14741110/have-jshint-ignore-certain-files-when-building-twitter-bootstrap#answer-14741346)
- [Using JSHint for Linting with Gulp](https://egghead.io/lessons/javascript-using-jshint-for-linting-with-gulp)  
- [Using Gulp to Concatenate and Uglify files](http://stackoverflow.com/questions/24591854/using-gulp-to-concatenate-and-uglify-files)


[1]:http://idratherbewriting.com/2015/11/04/jekyll-30-released-incremental-regeneration-rocks/