var main_ctr = myApp.controller("main_ctr", function ($scope, $rootScope, $http, $location, $window, $cookieStore, $interval, $filter, $timeout) {
    $scope.ListNum=1;
    $rootScope.paperNum=0.0;

    //显示二级列表
    $scope.showList=function(num){
        $scope.ListNum=num;
    }
    //二级页面显示
    $rootScope.paperList=function(num){
        $rootScope.paperNum=num;
    }
});