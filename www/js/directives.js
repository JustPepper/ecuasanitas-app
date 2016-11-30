angular.module('starter.directives', [])

.directive('headerNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/header-nav.tpl.html'
	};
})

.directive('footerNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/footer-nav.tpl.html'
	};
});