angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "My Upcoming Events",
        "link": "articles"
    }, {
        "title": "Create New Events",
        "link": "articles/create"
    },{
        "title": "My Past Events",
        "link": "articles/past"
    }];
    
    $scope.isCollapsed = false;
}]);