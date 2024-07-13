angular.module('dataBindingApp', [])
    .controller('DataBindingController', function($scope) {
        // Initialize message
        $scope.updatedMessage = "";

        // Function to update the message
        $scope.updateMessage = function() {
            $scope.updatedMessage = "Out of 5: " + $scope.message;
        };
    });