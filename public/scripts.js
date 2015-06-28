angular.module('app', ['ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });
  $urlRouterProvider.otherwise('/');
})

/*
// Home Controller doesn't do anything now. 
.controller('HomeCtrl', function($scope) {
	$scope.exist = true; 
	$scope.timer = 100;
	$scope.currTime = 30; 
	$scope.timeLeft = function () {
		return $scope.timer - $scope.currTime; 
	}
});
*/
.controller('HomeCtrl', function TimeCtrl($scope, $timeout) {
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}); 
