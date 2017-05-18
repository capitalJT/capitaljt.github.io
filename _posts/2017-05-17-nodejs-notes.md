---
layout: post
title:  "Node.js Notes"
date:   2017-05-19 18:26:20 -0700
author: Jaballer
categories: blog post
---

### Prerequisites  

To use Node you must type command-line instructions, so you need to be comfortable with (or at least know how to start) a command-line tool

---

### Node installation  

1. **Download the Windows installer from the [Nodes.js web site](https://nodejs.org/en/).**
2. **Run the installer**
3. **Follow the prompts in the installer** (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

Test: Run `node -v`. The version should be higher than v6.x.

---

### NPM Packages

- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) 
- [Updating local packages](https://docs.npmjs.com/getting-started/updating-local-packages)

### How to update Node.js

- [How to upgrade Node.js on Mac OS X](https://www.solarianprogrammer.com/2016/04/29/how-to-upgrade-nodejs-mac-os-x/)  
- [How do I upgrade Node.js](http://stackoverflow.com/questions/8191459/how-do-i-update-node-js)

---

### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

    npm install npm@latest -g

Test: Run `npm -v`. The version should be higher than 2.1.8.

---

Check which versions of npm and Node.js you have on your system with:

    node -v
    npm -v

---

### Additional Resources  
- http://theholmesoffice.com/node-js-fundamentals-how-to-upgrade-the-node-js-version/  