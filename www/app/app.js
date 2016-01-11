var eliteSchool = angular.module('eliteSchool', ['ionic']);

eliteSchool.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});


eliteSchool.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
    })
    .state('sidemenu', {
        url: '/app',
        templateUrl: '/app/layout/menu-layout.html'
    });
    
    $urlRouterProvider.otherwise('/app');
}); 