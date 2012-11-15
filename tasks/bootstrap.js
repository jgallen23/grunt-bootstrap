/*
 * grunt-bootstrap
 * https://github.com/jgallen23/grunt-bootstrap
 *
 * Copyright (c) 2012 Greg Allen
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  var boots = require('boots');

  grunt.registerTask('bootstrap', 'Plugin to generate custom builds of bootstrap', function() {
    this.requiresConfig('bootstrap');
    var self = this;
    var done = this.async();
    var config = grunt.config('bootstrap');

    var opts = {
      js: config.js,
      css: config.css
    };

    boots(opts, config.dest, function() {
      grunt.log.writeln('Bootstrap saved in ' + config.dest);
    });
  });

};
