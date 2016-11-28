angular.module('starter.directives', [])

.directive('headerNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/header-nav.tpl.html'
	};
});