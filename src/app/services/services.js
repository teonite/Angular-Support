/*

TEONITE Support - an application to submit a bug/features from your app/service to YouTrack/Redmine

Copyright (C) 2012-2014 TEONITE - http://teonite.com

*/

angular.module('ngSupport.services', [])
  .factory(
  'supportService',
  [
    '$resource',
    'Config',
    function ($resource, Config) {

      return $resource(
        Config.server,
        {
          id: '@id'
        },

        {
          create: {
            method: 'POST'
          }
        }
      )
    }
  ]
);
