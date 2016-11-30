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
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "./templates/home.tpl.html"
        }
      }
    })
    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent': {
          templateUrl: "./templates/profile.tpl.html"
        }
      }
    })
    .state('app.doctor', {
      url: "/doctor",
      views: {
        'menuContent': {
          templateUrl: "./templates/doctor-profile.tpl.html"
        }
      }
    })

    .state('app.frecuentes', {
      url: "/frecuentes",
      views: {
        'menuContent': {
          templateUrl: "./templates/frecuentes.tpl.html",
          controller: "FrecuentesCtrl"
        }
      }
    })


   $urlRouterProvider.otherwise("/app/home");

})

.controller('FrecuentesCtrl', function($scope) {
  $scope.doctors = [
    {
      name: 'Esteban Garcés Burbano',
      job: 'Ortopedista - Traumatólogo',
      photo: 'img/doctor.jpg'
    }
  ]
})