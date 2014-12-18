/*

TEONITE Support - an application to submit a bug/features from your app/service to YouTrack/Redmine

Copyright (C) 2012-2014 TEONITE - http://teonite.com

 * Installation:

 1. Install Grunt CLI (`npm install -g grunt-cli`)
 2. Install Grunt 0.4.0 and other dependencies (`npm install`)

 Build:

 Execute `grunt` from root directory of this directory (where Gruntfile.js is)
 To execute automatically after each change, execute `grunt --force default watch`
 To execute build followed by the test run, execute `grunt test`
 See http://gruntjs.com/getting-started for more information about Grunt

 */

module.exports = function (grunt) {
  grunt.initConfig(
    {

      pkg: grunt.file.readJSON('package.json'),

      // MOVE EACH TEMPLATE FILE TO ONE JS FILE WITH ALL TEMPLATES
      html2js: {
        ngSupport: {
          options: {
            module: 'ngSupport.templates',
            base: 'src/app/templates',
            htmlmin: {
              collapseWhitespace: true,
              removeComments: true
            }
          },
          dest: 'tmp/templates.js',
          src: [
            'src/app/templates/*html'
          ]
        }
      },

      sass: {
        dist: {
          files: {
            'dist/ngSupport.css': 'src/scss/ngSupport.scss'
          }
        }
      },

      // COPY FILES FROM DESIGN DIRECTORY TO DIST DIRECTORY
      copy: {
        main: {
          files: [
            {
              src: 'src/lib/angular/angular.js',
              dest: 'dist/lib/angularjs/angular.js'
            },
            {
              src: 'src/lib/angular-bootstrap/ui-bootstrap-tpls.js',
              dest: 'dist/lib/angularjs/ui-bootstrap-tpls.js'
            },
            {
              src: 'src/lib/angular-resource/angular-resource.js',
              dest: 'dist/lib/angularjs/angular-resource.js'
            },
            {
              src: 'src/lib/bootstrap/dist/css/bootstrap.css',
              dest: 'dist/lib/bootstrap/css/bootstrap.css'
            },
            {
              src: 'src/lib/html2canvas/build/html2canvas.min.js',
              dest: 'dist/lib/html2canvas/html2canvas.min.js'
            }
          ]
        }
      },

      // CONCAT GROUPED FILES IN SEPARATED FILES
      concat: {
        dist: {
          files: {
            'dist/ngSupport.js': [
              'src/app/app.js',
              'src/app/directives/directives.js',
              'src/app/controllers/controllers.js',
              'src/app/services/services.js',
              'tmp/templates.js'
            ]
          }
        }
      },

      uglify: {
        my_target: {
//          options: {
//            mangle: false
//          },
          files: {
            'dist/ngSupport.min.js': ['dist/ngSupport.js']
          }
        }
      }
    }
  );

  // DEFAULT TASKS
  grunt.registerTask('default', ['html2js', 'sass', 'copy',  'concat', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
