// Karma configuration
// Generated on Mon Dec 30 2013 16:14:03 GMT+0100 (CET)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + For automated testing with Grunt, some settings in this config file  +
// + are overridden in Gruntfile.js. Check both locations.                +
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    //
    // Backbone tests use QUnit.
    frameworks: ['qunit'],

    // list of files / patterns to load in the browser
    files: [
      // Component dependencies
      'bower_components/underscore/underscore.js',
      'bower_components/backbone/backbone.js',

      // Component under test
      'src/backbone.select.js',

      // Test setup
      'spec-backbone/setup/**/*.js',

      // Tests
      'spec-backbone/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    // - SlimerJS
    // - IE (Windows only)
    //
    // ATTN Interactive debugging in PhpStorm/WebStorm doesn't work with PhantomJS. Use Firefox or Chrome instead.
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
