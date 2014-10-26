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
)

.factory(
  'screenshotService',
  function () {

    var screenshotImage = new Image();

    var take = function take() {
      html2canvas(document.body, {
        onrendered: function(canvas) {
          screenshotImage.src = canvas.toDataURL("image/png");
          //show that screenshot feature is working
          //document.body.appendChild(screenshotImage);

          return screenshotImage;
        }
      });
    };

    return {
      take: take,
      screenshotImage: screenshotImage
    };

  }
)

;
