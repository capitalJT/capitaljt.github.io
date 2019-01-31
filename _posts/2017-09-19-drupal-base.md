---
layout: post
title:  "Drupal Base"
date:   2017-09-19 13:40:20 -0700
author: Jabal
categories: documentation
---


## Reference Files
<ul>
  <li><a href="https://www.dropbox.com/s/fucmixhb2x7bbka/datamap_D8.pptx?dl=0" target="_blank">Powerpoint Infrastructure</a> (Dropbox)</li>
  <li><a href="https://docs.google.com/spreadsheets/d/15KI3x8YNp59ejeHUoJ5-wa1zz3eRMFY6CY75MpcR8No/edit?usp=sharing" target="_blank">Field Bases - Drupal 8</a></li>
</ul>

## Contrib Modules Notes

<ul>
  <li><a href="http://bp.jimbir.ch/" target="_blank">Bootstrap Paragraphs</a></li>
  <li>Gmap module has not been ported to D8 yet. Using Geolocation Field instead. The functionality is not tested yet.</li>
</ul>

## Composer JSON File

Notes: the big look here is the required list that I built with composer - the package manager handles updating the speicific versions

```html
{
    "name": "drupal/drupal",
    "description": "Drupal is an open source content management platform powering millions of websites and applications.",
    "type": "project",
    "license": "GPL-2.0+",
    "require": {
        "composer/installers": "^1.0.24",
        "wikimedia/composer-merge-plugin": "~1.4",
        "drupal/admin_toolbar": "^1.19",
        "drupal/devel": "^1.0",
        "drupal/paragraphs": "^1.1",
        "drupal/ckeditor_codemirror": "^1.0",
        "drupal/linkit": "^4.3",
        "drupal/token": "^1.0",
        "drupal/token_filter": "^1.0@beta",
        "drupal/paragraphs_previewer": "^1.0",
        "drupal/codesnippet": "^1.6",
        "drupal/exclude_node_title": "^1.0@beta",
        "drupal/twig_debug": "1.x-dev",
        "drupal/fences": "^2.0@alpha",
        "drupal/classy_paragraphs": "^1.0@beta",
        "drupal/replicate": "1.x-dev",
        "drupal/components": "^1.0",
        "drupal/conditional_fields": "^1.0@alpha",
        "drupal/tzfield": "1.x-dev",
        "drupal/globallink": "^1.0@alpha",
        "drupal/field_tokens": "^1.0@beta",
        "drupal/console": "^1.0",
        "drupal/yoast_seo": "^1.3",
        "drupal/hreflang": "^1.0",
        "drupal/coder": "^8.2",
        "drupal/bootstrap_paragraphs": "^2.0@alpha",
        "drupal/geolocation": "^1.11"
    },
    "replace": {
        "drupal/core": "~8.3"
    },
    "minimum-stability": "dev",
    "prefer-stable": true,
    "config": {
        "preferred-install": "dist",
        "autoloader-suffix": "Drupal8"
    },
    "extra": {
        "_readme": [
            "By default Drupal loads the autoloader from ./vendor/autoload.php.",
            "To change the autoloader you can edit ./autoload.php.",
            "This file specifies the packages.drupal.org repository.",
            "You can read more about this composer repository at:",
            "https://www.drupal.org/node/2718229"
        ],
        "merge-plugin": {
            "include": [
                "core/composer.json"
            ],
            "recurse": false,
            "replace": false,
            "merge-extra": false
        },
        "installer-paths": {
            "core": ["type:drupal-core"],
            "modules/contrib/{$name}": ["type:drupal-module"],
            "profiles/contrib/{$name}": ["type:drupal-profile"],
            "themes/contrib/{$name}": ["type:drupal-theme"],
            "drush/contrib/{$name}": ["type:drupal-drush"],
            "modules/custom/{$name}": ["type:drupal-custom-module"],
            "themes/custom/{$name}": ["type:drupal-custom-theme"]
        }
    },
    "autoload": {
        "psr-4": {
            "Drupal\\Core\\Composer\\": "core/lib/Drupal/Core/Composer"
        }
    },
    "scripts": {
        "pre-autoload-dump": "Drupal\\Core\\Composer\\Composer::preAutoloadDump",
        "post-autoload-dump": [
          "Drupal\\Core\\Composer\\Composer::ensureHtaccess"
        ],
        "post-package-install": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup",
        "post-package-update": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        }
    ]
}

```
