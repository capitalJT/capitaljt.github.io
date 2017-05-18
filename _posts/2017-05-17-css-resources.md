---
layout: post
title:  "CSS Resources"
date:   2017-05-18 01:11:20 -0700
author: Jaballion
categories: blog post
---

### CSS Media Queries

~~~~
@media screen and (min-width: 321px){}
@media screen and  (max-width: 766px){}
@media screen and (min-width: 600px){}
@media screen and  (min-width: 767px){}
@media screen (min-width: 768px) and (max-width: 979px){}
@media screen (max-width: 979px){}
@media screen (min-width: 980px){}
@media screen (min-width: 981px) and (max-width: 1199px) {}
@media screen (min-width: 1200px) {} 
~~~~

---

### CSS
- [http://css3generator.com/](http://css3generator.com/)  
- [http://www.codebeautifier.com/](http://www.codebeautifier.com/)  
- [http://designshack.net/articles/css/create-a-hidden-sliding-navigation-bar-using-css3-transitions/](http://designshack.net/articles/css/create-a-hidden-sliding-navigation-bar-using-css3-transitions/)  
- [http://aceinfowayindia.com/blog/ace-tuts/css-rollover.html](http://aceinfowayindia.com/blog/ace-tuts/css-rollover.html)  

Sticky Positioning    
[http://www.hongkiat.com/blog/css-sticky-position/](http://www.hongkiat.com/blog/css-sticky-position/)

CSS Cursor Properties  
[http://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=pointer](http://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=pointer)

ihatetomatoes  
[http://ihatetomatoes.net/smooth-scrolling-on-ios/#more-206](http://ihatetomatoes.net/smooth-scrolling-on-ios/#more-206)

Customizing Browser Scroll Bar  
[http://www.hongkiat.com/blog/css-scroll-bar/](http://www.hongkiat.com/blog/css-scroll-bar/)

list style types  
[https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

Vendor Prefixed CSS Properties  
[http://peter.sh/experiments/vendor-prefixed-css-property-overview/](http://peter.sh/experiments/vendor-prefixed-css-property-overview/)

CSS Transitions  
[http://css3.bradshawenterprises.com/transitions/](http://css3.bradshawenterprises.com/transitions/)

Fade in / out with CSS on hover  
http://webdesign.about.com/od/css3tutorials/a/fade-in-and-out-with-css3.htm  

Check CSS code for errors
http://csslint.net

---

### Image captions with css3

http://www.hongkiat.com/blog/css3-image-captions/

http://www.cvwdesign.com/txp/article/395/css3-box-shadow-and-image-hover-effects

http://www.htmldrive.net/items/show/1091/CSS3-animation-shadows-image-hover-effect

http://sixrevisions.com/css/snazzy-hover-effects-using-css/

http://designshack.net/tutorialexamples/imagehovers/index.html

http://www.smashingapps.com/2012/11/08/12-free-and-amazing-css3-image-hover-effects-for-downloads.html

http://www.webmonkey.com/2010/02/css-properties/

http://www.webmonkey.com/2010/02/css-attributes/

Text Rotation Link
http://snook.ca/archives/html_and_css/css-text-rotation

How To Create an IE-Only Stylesheet
http://css-tricks.com/how-to-create-an-ie-only-stylesheet/

Page Transitions with CSS3
http://tympanus.net/codrops/2012/01/30/page-transitions-with-css3/

---

## Treehouse CSS Notes

The :before and :after pseudo-elements let us insert virtual elements before and after an element’s content. These virtual elements are visible to the user and are styleable with CSS, but they do not appear in the source code.

By default, if the relative size is not defined, 1em equals 16px;

The em is very useful because it can adapt to the font size that the person chooses to use.

REM unit stands for root em, its helpful because it avoids the compounding effect


auto value means that the browser can auto calculate the value;
inherit: inherit the value of its parent element

mozilla still needs a vendor prefix for box-sizing

### 3D Transitions

Before transforming an element in 3D, we need to use the perfective property to establish a 3D space.
     the value needs to be applied to the children

When a perspective is defined, the perspective value will be applied to the direct child elements only

the perspective value alone will not cause any changes to the body element
perspective-origin value needs to be set on the parent element
     the perspective-origin has a default value of 50% 50%
     the first value is X, and the second is Y
     if you only assign one value, the second is assumed to be center
          an X value under 50% moves the origin to the left, the X value over 50% moves the origin to the right
          an Y value under 50% moves the origin up, the X value over 50% moves the origin down


the higher the perspective value, the more shallow the appearance of the transformations


the rotate 3D function accepts four values

rotate(X,Y,Z,rotation angle); The first three values in the argument set the direction of the rotation and the fourth value sets the rotation angle

translate3d(X,Y,Z);

scalesZ() only accepts a numeric argument

in the scaleZ function, the number argument we define is multiplied by the element’s current position on the Z axis


transform-style: preserve-3d; will pass down the 3d space to children

the backface-visibility property needs to be hidden in order to view the adjacent div
 

### 3D Animations

transitions are immediately applied once the property values change animations only execute when they are blinded to a selector

     keyframes and properties that reference those keyframes
     you can specify the keyframes with percentages or the words from and to
     at the very least, you need to define two animation values to execute the animation, the animation name and the animation duration
     animations have a timing function, by default it is set to ease; -webkit-animation-timing-function
     
     the default iteration of a keyframe sequence is 1 cycle, which can be changed with the animation iteration property, -webkit-animation-iteration-count
          the number value defined is the number of cycles it will play, you can use a number value or declare infinite
          if the 0% and 100% values are not defined the browser will automatically create them

     the order of the time values is important, the first value is animation duration, the second is assigned to the animation delay
          
     -webkit-animation-direction, when an animation is played in reverse the timing is also reversed
          this accepts the value of alternated, which cycles every odd iteration direction
          -webkit-animation-fill-mode:forwards the animation will hold on the last keyframe, the value both does both forwards and backwards fill modes, extending the animation properties in                               both directions

     one selector and have multiple animations by binding them to the selector, separated by commas

     all animations, by default, run when the page is loaded
     -webkit-animation-play-state:
          setting the value to pause tells the animation not to automatically play


Print

    Define margins around the printed page using the @page rule
         @page : first effects the first page
         page-break-after: avoids page breaks
         orphans, widows avoids orphans and widows on page breaks


     




