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

    var screenshotSrc;

    var take = function take() {
      if (html2canvas) {
        html2canvas(document.body, {
          onrendered: function(canvas) {
            screenshotSrc = canvas.toDataURL("image/png");
            //show that screenshot feature is working
            addImageToDom(screenshotSrc);

            return screenshotSrc;
          }
        });
      }
    };

    var addImageToDom = function addImageToDom(screenshotSrc) {
      var screenshotImage = new Image();
      screenshotImage.src = screenshotSrc;
      document.body.appendChild(screenshotImage);
    };

    return {
      take: take,
      screenshot: function() {
        return screenshotSrc;
      }
    };

  }
)

;
