/*

TEONITE Support - an application to submit a bug/features from your app/service to YouTrack/Redmine

Copyright (C) 2012-2014 TEONITE - http://teonite.com

*/

angular.module('ngSupport.controllers',[])
  .controller(
    'ModalInstanceCtrl',
    [
      '$scope',
      '$modalInstance',
      'supportService',
      'supportType',
      'screenshotService',
      function ($scope, $modalInstance,supportService, supportType, screenshotService) {

        $scope.supportType = supportType;

        $scope.issue = {
          type: "",
          subject: "",
          description: ""
        };

        $scope.close = function () {
          $modalInstance.dismiss('cancel');
        };

        $scope.submit = function () {
          //add screenshot to issue if available
          var screenshot = screenshotService.screenshot();
          if (screenshot) {
            $scope.issue.screenshot = screenshot;
          }

          supportService.create($scope.issue).$promise.then(function (){
//            NotificationService.success('Zgłoszenie wysłane.');
            $modalInstance.close();
          }, function(errors) {
            $scope.errors = errors.data;
//            NotificationService.error('Nie wysłano zgłoszenia.');
          });
        };

      }
    ]
  );
