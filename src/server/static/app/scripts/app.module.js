'use strict';

/**
 * @ngdoc overview
 * @name batcoachApp
 * @description # batcoachApp
 * 
 * Main module of the application.
 */
angular.module(
		'batcoachApp',
		[ 'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize',
				'ngTouch', 'ngFileUpload' ]).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/squad', {
		templateUrl : 'views/squad.html',
		controller : 'SquadCtrl'
	}).when('/matches', {
		templateUrl : 'views/matches.html',
		controller : 'MatchesCtrl'
	}).when('/import', {
		templateUrl : 'views/import.html',
		controller : 'ImportCtrl'
	}).when('/import/choosedir', {
		templateUrl : 'views/choosedir.html',
		controller : 'ChooseDirCtrl'
	}).when('/setup', {
		templateUrl : 'views/setup.html',
		controller : 'SetupCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
