---
layout: post
title:  "Welcome Back"
date:   2019-03-04 13:40:20 -0700
author: Jabal
categories: notes
---


# WP notes
How to resolve CORS cross origin issues in WP
- https://wordpress.stackexchange.com/questions/317035/how-to-add-crossorigin-and-integrity-to-wp-register-style-font-awesome-5


Social Media Image Sizes
- https://sproutsocial.com/insights/social-media-image-sizes-guide/#twitter

----


#### I used these links when I needed to clear the social sharing image cache for Plan 2 Win

[How to Clear LinkedIn Cache for Link Preview with One Click](https://woorkup.com/linkedin-cache/)  
`https://www.linkedin.com/post-inspector/inspect/https:%2F%2Fplan-2-win.com%2F`  
  
[Facebook Open Graph Debugger Cache Not Clearing](https://woorkup.com/facebook-open-graph-debugger-cache-clearing/)  
`https://developers.facebook.com/tools/debug/sharing/?q=https%3A%2F%2Fplan-2-win.com%2F`  
  
[How to Clear Twitter Cache in One Easy Step](https://woorkup.com/how-to-clear-twitter-cache/)  
`https://cards-dev.twitter.com/validator`  

----

I placed this snippet in the Genesis theme settings, for the header and footer scripts.

````html
    <!--  Essential META Tags -->
    <meta property="og:title" content="Plan to Win">
    <meta property="og:description" content="Achieving business agility in the age of urgency.">
    <meta property="og:image" content="https://www.plan-2-win.com/thumbnail.jpg">
    <meta property="og:url" content="https://plan-2-win.com/wp-content/uploads/2019/03/plan-to-win-facebook.jpg">
    <meta name="twitter:card" content="summary_large_image">
    
    
    <!--  Non-Essential, But Recommended -->
    <meta property="og:site_name" content="Adaptive Insights, LLC.">
    <meta name="twitter:image:alt" content="Plan to Win Book">
    
    
    <!--  Non-Essential, But Required for Analytics -->
    <meta property="fb:app_id" content="AdaptiveInsight" />
    <meta name="twitter:site" content="@AdaptiveInsight">
````

Uncomment snippet to include image  
`<img src="/assets/images/jt-serious-face.jpg" alt="Picture of my serious face">`