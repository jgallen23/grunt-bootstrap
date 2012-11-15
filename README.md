# grunt-bootstrap

Grunt plugin to generate custom builds of bootstrap

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-bootstrap`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-bootstrap');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
grunt.js:
```javascript
grunt.initConfig({
	bootstrap: {
		dest: 'out',
		js: [
			'bootstrap-modal.js'
		],
		css: [
			'modals.less'
		]
	}
});
```

##Available Components
###JS
- bootstrap-transition.js
- bootstrap-modal.js
- bootstrap-dropdown.js
- bootstrap-scrollspy.js
- bootstrap-tab.js
- bootstrap-tooltip.js
- bootstrap-popover.js
- bootstrap-affix.js
- bootstrap-alert.js
- bootstrap-button.js
- bootstrap-collapse.js
- bootstrap-carousel.js
- bootstrap-typeahead.js

###CSS
- reset.less
- scaffolding.less
- grid.less
- layouts.less
- type.less
- code.less
- labels-badges.less
- tables.less
- forms.less
- buttons.less
- sprites.less
- button-groups.less
- navs.less
- navbar.less
- breadcrumbs.less
- pagination.less
- pager.less
- thumbnails.less
- alerts.less
- progress-bars.less
- hero-unit.less
- media.less
- tooltip.less
- popovers.less
- modals.less
- dropdowns.less
- accordion.less
- carousel.less
- media.less
- wells.less
- close.less
- utilities.less
- component-animations.less
- responsive-utilities.less
- responsive-767px-max.less
- responsive-768px-979px.less
- responsive-1200px-min.less
- responsive-navbar.less

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

(View)[https://github.com/jgallen23/grunt-bootstrap/blob/master/HISTORY.md]

## License
Copyright (c) 2012 Greg Allen  
Licensed under the MIT license.
