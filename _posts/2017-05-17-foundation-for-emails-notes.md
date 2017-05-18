---
layout: post
title:  "Foundation for Emails"
date:   2017-05-18 16:19:20 -0700
author: Jaballer
categories: blog post
---

Install the Foundation CLI  
~~~~
npm install foundation-cli -g  
~~~~

If you run into any permission errors (EACCESS) on OS X or Linux, you can try prefixing the command with `sudo`  
~~~~
sudo npm install -g foundation-cli
~~~~

[Foundation for Emails documentation](http://foundation.zurb.com/emails/docs/sass-guide.html)  

I'm using a different global flag than what is instructed in the documenation. Here is some helpful information on [global flags](http://stackoverflow.com/questions/8909986/when-should-i-use-npm-with-g-flag-and-why) and a [video](https://docs.npmjs.com/getting-started/installing-npm-packages-globally) on how to install npm packages globally.

- Clone the [adaptive-emails](https://github.com/AdaptivePlanning/adaptive-emails.git) repository
- `cd` to the directory and run `npm install`
- run `npm start`
	- This will start a chain of gulp functions:
		`default`
		`build`
		`clean`
		`pages`
		`etc`

	- The main thing to note is that node creates a server and watches for changes. This process, build, server magic is happening with the good help `browser-sync`, which uses the same localhost and port as our Splash theme: `localhost:3000`. Try not to have both running at the same time because the post will change and have you chasing your tail trying to figure out what's happening. Typically it causes the second server to run on `localhost:3001`.
- Go to [localhost:3000](http://localhost:3000)
	- The page will look like a basic table to contents. I have to provide more details about my workflow and how I use it compile, prototype, and implement into HubSpot
- My process:
	- Use `npm start` for prototyping
	- Once requirements are met run `npm run build`
	- html and sass is processed and inlined 

### Foundation Commands:

Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files.

Run `npm run build` to inline your CSS into your HTML along with the rest of the build process.

Run `npm run litmus` to build as above, then submit to litmus for testing. AWS S3 Account details required (config.json)

Run `npm run mail` to build as above, then send to specified email address for testing. SMTP server details required (config.json)

Run `npm run zip` to build as above, then zip HTML and images for easy deployment to email marketing services

---

### Email FUN facts

- We don't use foundation's grid for HubSpot emails. HubSpot has its own responsive framework.  

- Outlook ignores padding and margins
	- https://knowledge.hubspot.com/articles/kcs_article/email/why-are-margins-and-padding-around-my-image-not-rendering-in-outlook
	- https://litmus.com/help/email-clients/outlookcom-margins/

---

### Questions and next steps

- What is the workflow from prototyping to HubSpot implementation?
