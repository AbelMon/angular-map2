app.controller('mainController', ['$scope', function($scope, uiGmapGoogleMapApi) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}]);