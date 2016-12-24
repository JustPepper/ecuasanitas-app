angular.module('starter', [
  'ionic',
  'ngCordova',
  'satellizer',
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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $authProvider) {

  $ionicConfigProvider.tabs.position('bottom')

  $authProvider.loginUrl = 'http://ecuasanitas.dev/api/authenticate';

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('login', {
        url: "/login",
        templateUrl: "templates/login.tpl.html",
        controller: "AuthController as auth"
    })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "./templates/home.tpl.html",
          controller: "HomeCtrl"
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
          templateUrl: "./templates/doctor-profile.tpl.html",
          controller: 'DoctorCtrl'
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

    .state('app.recipes', {
        url:"/recipes",
        views: {
            'menuContent': {
                templateUrl: "./templates/recipes.tpl.html"
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

.controller('DoctorCtrl', function($scope) {
  console.log('on doctor profile');
  $scope.tab = 1;
   $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  }
})
