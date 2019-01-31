---
layout: post
title:  "Image Modals"
date:   2017-06-15 13:40:20 -0700
author: Jabal
categories: documentation
---


## Image Modal - Full Markup

This is the markup placed inside of a custom panel to create an image modal. An example can be viewed here:  <a href="http://adaptivedev.prod.acquia-sites.com/test-modal-page" target="_blank">http://adaptivedev.prod.acquia-sites.com/test-modal-page</a>.

```html
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <h3>Next-Generation Visual Analytics</h3>
    <p><img class="img-responsive img-modal" data-modal-size="modal-xl" src="https://www.adaptiveinsights.com/sites/default/files/screenshot-adaptive-discovery-software-example-user-experience.png" alt="Next-Generation Visual Analytics - Adaptive Discovery" /></p>
    <p class="lead m-b-sm">Unprecedented Self-Service Analytics</p>
    <p>Our next-generation visual analytics puts the power of self-service interactive dashboards, visualizations, and charts into your hands to monitor and drive business performance. Visualize numbers and charts side-by-side while you plan, easily see variances in a waterfall chart, personalize dashboards with your own KPIs, and perform period-over-period analysis. With new interactive dashboards that enable unprecedented self-service analytics access for finance and business users across the organization, it’s easy to plan and adapt without compromise.</p>
  </div>
  <div class="col-xs-12 col-sm-6">
    <h3>Flexible Time Modeling</h3>
    <p><img class="img-responsive img-modal" data-modal-size="modal-lg" src="https://www.adaptiveinsights.com/sites/default/files/flexible-time-modeling-weekly-revenue-example-hospitality.jpg" alt="Flexible Time Modeling" /></p>
    <p class="lead m-b-sm">Measure, Model, and View Time How You Define It</p>
    <p><em>Flexible time modeling</em> provides powerful, end-user configured time modeling.This means that you can plan with the fiscal calendar of your choice, whether that is a 4-4-5 or 13 period calendar, semesters or trimesters, or you can define your own custom fiscal calendar. And you can plan to the level many businesses require with daily, weekly, monthly, quarterly, and half-year granularity. With flexible time modeling, your fiscal calendar can match your exact business needs with a completely configurable calendar.</p>
  </div>
</div>
```

The main thing to focus on is this bit of markup:

```html
<img class="img-responsive img-modal" data-modal-size="modal-xl" src="https://www.adaptiveinsights.com/sites/default/files/screenshot-adaptive-discovery-software-example-user-experience.png" alt="Next-Generation Visual Analytics - Adaptive Discovery" /></p>
```

Key items:
- `img-modal` - class name
- `data-modal-size="modal-xl"` - data attribute
- `src="https://...` - image source
- `alt="Next-Ge` - image alt attribute


---

## Modal Markup

```html
<div aria-hidden="false" aria-labelledby="imageModalLabel" class="modal fade" id="imageModal" role="dialog" style="display:none;padding-left:0" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content row">
      <div class="modal-header">
        <button class="close white" data-dismiss="modal" type="button">
          <span aria-hidden="true">×</span><span class="sr-only">Close</span>
        </button>
        <p class="modal-title white" id="imageModalLabel">&nbsp;</p>
      </div>
      <div class="modal-body col-xs-12">
        <img class="img-responsive center-block" id="imagePreview" src="" />
      </div>
    </div>
  </div>
</div>
```

Notes:  
- The `<p>` with the class of `modal-title` is fed the image alt attribute. 
- The `<img>` with the id of `imagePreview` is fed the image source from the Image Modal - Full Markup. 
- The JavaScript function takes the data attribute value from `data-modal-size="modal-xl"` and adds that value as a class to the div with the class name of `modal-dialog`. The result will look like this: `<div class="modal-dialog modal-xl">`.

Possible values to add to the `data-modal-size` data attribute:
- `data-modal-size="modal-xl"` - Adaptive Custom
- `data-modal-size="modal-lg"`
- `data-modal-size="modal-md"` - Default
- `data-modal-size="modal-sm"`

---

## JavaScript

```javascript
$(document).ready(function(){
	if ($('.img-modal').length){
	  $('.img-modal').on('click', function(e) {
	    var aiModalSize = $(this).data('modal-size');
	    e.preventDefault();
	    $('.modal-dialog').addClass(aiModalSize);
	    $('#imagePreview').attr('src', $(this).attr('src'));
	    $('#imageModalLabel').html($(this).attr('alt'));
	    $('#imageModal').modal();
	  });

	  $('#imageModal').on('hidden.bs.modal', function () {
	    $('.modal-dialog').attr('class', 'modal-dialog');
	  });
	}
});
```

Notes:  
- Conditonal to check if an image modal exists
- Take value from the data attribute and add it as a class to `.modal-dialog`
- Add the image source to the modal source
- Add the image alt attribute to the modal title
- Fire the modal function.
- Lastly, remove the appended modal class on modal close.

---

### Code Location

The modal markup and fuctions are located: `docroot/sites/all/themes/splash/assets/incl/aiModal.inc`