/*

TEONITE Support - an application to submit a bug/features from your app/service to YouTrack/Redmine

Copyright (C) 2012-2014 TEONITE - http://teonite.com

*/

angular.module('ngSupport',
    [
      'ui.bootstrap',
      'ngResource',
      'ngSupport.directives',
      'ngSupport.controllers',
      'ngSupport.services',
      'ngSupport.templates'
    ]
)
  .factory(
    'Config',
    [
      function () {
        if(!ngSupportConfig) {
          return "Error! No support config object";
        } else {
          return {
            server: ngSupportConfig.server
          }
        }
      }
    ]
  )
;
