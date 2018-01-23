var chapter_ctr = myApp.controller("chapter_ctr", function ($scope, $rootScope, $http, $location, $window, $cookieStore, $interval, $filter, $timeout) {
   
//打开指定文件
    $scope.opensxl=function(url){
        var obj=new ActiveXObject("wscript.shell");   
        if(obj){   
            obj.Run("\""+ url+"\"", 1, false );  
            obj=null;   
        } 
    }

  
});