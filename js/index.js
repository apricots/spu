

var woodside = angular.module('woodside', []);
woodside.controller('woodsideController', function ($scope, $http, $interval) {
	$scope.user = {
		name: {
			first: "Adam",
			middle: "K",
			last: "Chew"
		},
		picture: {
			url: "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/t1.0-9/10336656_10152460249514445_2972498594326810726_n.jpg"
		},
		balance: 1000
	};

	$scope.sales = [];

	sale = {
		name: "Coffee",
		original: 1000,
		balance: 900,
		sales: [],
		users: []
	};

	$scope.sales.push(sale);

	$scope.friends = [];

	$scope.friends.push($scope.user);
	$scope.friends.push($scope.user);
	$scope.friends.push($scope.user);
	$scope.friends.push($scope.user);

	console.log($scope.friends);


	$scope.addSale = function() {


		$scope.sales.push($scope.newSale);
	}

	function generateDouble(max) {
		return ((Math.random() * max) + 1);
	}



});