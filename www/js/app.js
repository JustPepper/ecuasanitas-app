angular.module('starter', [
  'ionic',
  'ngCordova',
  'starter.directives',
  'starter.controllers'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }


    if(window.StatusBar) {
      StatusBar.backgroundColorByName("red");
      StatusBar.overlaysWebView(true);
    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  $ionicConfigProvider.tabs.position('bottom')

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "./templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "./templates/home.tpl.html"
        }
      }
    })

   $urlRouterProvider.otherwise("/tab/home");

})