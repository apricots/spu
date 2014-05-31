

var woodside = angular.module('woodside', ["firebase"]);
woodside.controller('woodsideController', function ($scope, $http, $interval, $firebase) {
	var usersReference = new Firebase("https://sushi-pay-us.firebaseio.com/users");
	var salesReference = new Firebase("https://sushi-pay-us.firebaseio.com/sales");
	var groupsReference = new Firebase("https://sushi-pay-us.firebaseio.com/groups");

	$scope.users = $firebase(usersReference);
	$scope.sales = $firebase(salesReference);
	$scope.groups = $firebase(groupsReference);

	$scope.user = {
		name: {
			first: "Adam",
			last: "Chew"
		},
		picture: {
			url: "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/t1.0-9/10336656_10152460249514445_2972498594326810726_n.jpg"
		},
		balance: 1000
	};

	$scope.sale = {
		name: "Coffee",
		total: 1000,
		users: []
	};

	$scope.group = {
		name: "Group 1",
		users: []
	}


	$scope.friends = [];

	function addSale() {
		$scope.sales.$add($scope.sale);
	}

	function addUser() {
		$scope.users.$add($scope.user);
	}

	function addGroup() {
		$scope.groups.$add($scope.group);
	}

	function generateDouble(max) {
		return ((Math.random() * max) + 1);
	}

});