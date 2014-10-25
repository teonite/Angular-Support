/*

TEONITE Support - an application to submit a bug/features from your app/service to YouTrack/Redmine

Copyright (C) 2012-2014 TEONITE - http://teonite.com

*/

angular.module('ngSupport.directives',[])
  .directive(
    'ngSupport',
    [
      '$modal',
      function ($modal) {
        return {
          restrict: 'AEC',
          scope: {
            supportType: '@'
          },
          link: function (scope, element, attr) {
            element.bind('click', function () {
              var modalInstance = $modal.open({
                templateUrl: 'modalContentTemplate.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                  supportType: function () {
                    return scope.supportType || 'simple';
                  }
                }
              });
            });
          }
        }
      }
    ]
  );
