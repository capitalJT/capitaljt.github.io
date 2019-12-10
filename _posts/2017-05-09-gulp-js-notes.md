---
layout: post
title: "Gulp JS Notes"
date: 2017-05-09 10:00:00 -0700
---

## ProTip:
- Install Gulp globally - [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Gulp commands run at the root of the theme. 

## Steps:

1. Install Node.js
2. From the theme root run `npm install`  
- This will install all node and gulp dependencies

## Gulp Commands:
- sprites
- [sass](#gulp-commands-sass)
- scripts
- lint
- clearcache
- reload
- watch
- browser-sync
- default


Notes:  
BrowserSync UI: http://localhost:3001/  - This port can vary

---

### Gulp Commands: SASS
NPM: [gulp-sass](https://www.npmjs.com/package/gulp-sass)

Our `sass` function can take outputStyle arguments for modes. In our drupal site we don't need to pass any arguments because our site is configured to compress the css and js for prod. However, you may want to pass an argument if you wanted to compile sass for css files that share our variables.

[Sass Output Styles](https://web-design-weekly.com/2014/06/15/different-sass-output-styles/)
- `:nested`
- `:expanded`
- `:compact`
- `:compressed`

### Links:

<a href="https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md" target="_blank">Running tasks in series, i.e. Task Dependency</a>  
