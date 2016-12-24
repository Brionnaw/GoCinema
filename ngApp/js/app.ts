'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('movieInfo', {
      url: '/movieInfo',
      templateUrl: '/templates/movieInfo.html',
      controller: app.Controllers.MovieInfoController,
      controllerAs: 'vm'
       })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
