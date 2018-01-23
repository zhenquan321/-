
var myApp = angular.module("myApp", [
    'ngAnimate',
    "ngCookies",
    'ui.router',
    "ngMessages",
    'angular-loading-bar',
    "ui.bootstrap"]);
  
  myApp.filter('htmlContent', ['$sce', function ($sce) {
      return function (input) {
          return $sce.trustAsHtml(input);
      }
  }]);
  
  
  //angular路由
  myApp.config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when("", "main/Cover");
      $stateProvider
      //main
      .state("main", {
          url: "/main",
          controller: "main_ctr",
          templateUrl: "view/main.html"
      })
      //封面
      .state("main.Cover", {
        url: "/Cover",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/Cover.html"
      })
      .state("main.chapter1", {
          url: "/chapter1",
          controller: "chapter_ctr",
          templateUrl: "view/chapter/chapter1.html"
      })
      .state("main.chapter2", {
        url: "/chapter2",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter2.html"
    })
    .state("main.chapter3", {
        url: "/chapter3",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter3.html"
    })
    .state("main.chapter4", {
        url: "/chapter4",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter4.html"
    })
    .state("main.chapter5", {
        url: "/chapter5",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter5.html"
    })
    .state("main.chapter6", {
        url: "/chapter6",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter6.html"
    })
    .state("main.chapter7", {
        url: "/chapter7",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter7.html"
    })
    .state("main.chapter8", {
        url: "/chapter8",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter8.html"
    })
    .state("main.chapter9", {
        url: "/chapter9",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter1.htm9"
    })
    .state("main.chapter10", {
        url: "/chapter10",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter10.html"
    })
    .state("main.chapter11", {
        url: "/chapter11",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter11.html"
    })
    .state("main.chapter12", {
        url: "/chapter12",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter12.html"
    })
    .state("main.chapter13", {
        url: "/chapter13",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter13.html"
    })
    .state("main.chapter14", {
        url: "/chapter14",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter14.html"
    })
    .state("main.chapter15", {
        url: "/chapter15",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter15.html"
    })  
    .state("main.chapter16", {
        url: "/chapter16",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter16.html"
    })  
    .state("main.chapter17", {
        url: "/chapter17",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter17.html"
    })  
    .state("main.chapter18", {
        url: "/chapter18",
        controller: "chapter_ctr",
        templateUrl: "view/chapter/chapter18.html"
    })
  });
  
  
  var chk_global_vars = function ($cookieStore, $rootScope, usr, $location, $http) {
      if (usr != null) {
  
      } else if (typeof $rootScope.logined_nm == "undefined" || $rootScope.logined_nm == null || $rootScope.logined_nm == false) {
  
          //其他---------------------------------------------------------------------------
  
      }
  
  
  
  }

  
  
  
  