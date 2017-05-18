---
layout: post
title:  "Jekyll Resources"
date:   2016-09-28 09:59:20 -0700
author: Jaballion
categories: blog post
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.


Below is an example of grouping / centralizing links:

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

Additional Resources:

- [Jekyll Basic Usage](https://jekyllrb.com/docs/usage/)
- [markdown target=“_blank”](http://stackoverflow.com/questions/4425198/markdown-target-blank)
- [Install Jekyll on Mac OS X](http://jekyll.tips/jekyll-casts/install-jekyll-on-os-x/)

### Jekyll

1. Clone the [Adaptive Docs repo](https://github.com/AdaptivePlanning/adaptive-docs.git) -  It's built with Jekyll
2. Install [Jekyll](https://jekyllrb.com/) and [Bundler](http://bundler.io/) gems through RubyGems
	`gem install jekyll bundler` -  You can chain together installation commands 
	- More information can be found [here](https://jekyllrb.com/docs/quickstart/)
3. Install Gemfile dependencies - from the Adaptive Docs directory run `bundle install`
	- This will run tons of stuff. You should end up with a message that reads something like this:
	~~~~
	Bundle complete! 5 Gemfile depenedencies, 26 gems now installed.
	Use`bundle show [gemname]` to see where a bundled gem is installed.
	~~~~
3. Run `jekyll serve --incremental` - [Config options](https://jekyllrb.com/docs/configuration/)  
	- Jekyll launches a web server and auto-regenerates your site when a file is updated
4. Bam! - Now browse to http://localhost:4000 

Jekyll will read the configuration file, find the source, find the destination, and then start the incremental build process. 

> Jekyll's incremental regeneration continuously rebuilds your project each time you save a change. This can help you quickly identify errors and fix them immediately, since the time between when you make the error and when you're notified of the broken build is reduced.
> 
> -- <cite>[idratherbewriting.com][1]</cite> 

Extra Resources:

- Jekyll [Basic Usage](https://jekyllrb.com/docs/usage/)  

- Using Jekyll with [GitHub Pages](https://jekyllrb.com/docs/github-pages/)

- [Gems, Gemfiles and the Bundler](https://learn.cloudcannon.com/jekyll/gemfiles-and-the-bundler/)

---

### An example of Code and Syntax Highlighting  

[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting)  

<hr>

JavaScript  

```javascript
  var jt = "Jabal Torres";

  console.log(jt + " is a cool guy");
  console.log("No way, this is super cool");

```

<hr>

HTML  

{% highlight html %}
<div class="awesome">
    <h1>Hello World</h1>
</div>
{% endhighlight %}
