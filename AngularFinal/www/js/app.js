angular.module('starter', ['ionic', 'starter.controllers', 'satellizer', 'ngCordova', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $authProvider.facebook({
    clientId: '1946366412254414',
    name: 'facebook',
    url: '/auth/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
    redirectUri: window.location.origin + '/',
    requiredUrlParams: ['display', 'scope'],
    scope: ['email'],
    scopeDelimiter: ',',
    display: 'popup',
    type: '2.0',
    popupOptions: { width: 580, height: 400 },
      responseType: 'token'
  });
  $stateProvider
      .state('tab', {
    url: '/tab',
      abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('tab.stores', {
      url: '/stores',
      views: {
        'tab-stores': {
          templateUrl: 'templates/tab-stores.html',
          controller: 'StoresCtrl'
        }
      }
    })
  .state('tab.logs', {
    url: '/logs',
    views: {
      'tab-logs': {
        templateUrl: 'templates/tab-logs.html',
        controller: 'LogsCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('tab/search');
    
});
