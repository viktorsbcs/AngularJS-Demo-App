



var userApp = angular
	.module("userApp", ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider

			.when("/user", {
				templateUrl: "user.html",
				controller: "UserController"
			})
			.when("/all-users", {
				templateUrl: "all-users.html",
				controller: "AllUsersController"
			})
			.otherwise({ redirectTo: '/user' });

	})
	.controller("UserController", function ($scope) {


		$scope.message = "UsersController It works";


		$scope.user = { name: "", email: "", role: "", userId: 0 };
		$scope.userList = [];
		$scope.userCounter = 0

		$scope.formSubmit = function () {
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);

			$scope.user = {};
			$scope.myForm.name.$touched = false;
			$scope.myForm.email.$touched = false;




		}

		$scope.populateWithDummyData = function() {
			$scope.userList = [];
			$scope.userCounter = 0

			$scope.user = { name: "Artūŗs Kalniņš", email: "artūrs@gmail.com", role: "Administrator", userId: 0 };		
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);
			$scope.user = {};

			$scope.user = { name: "Ieva Rudzīte", email: "ieva@inbox.com", role: "Moderator", userId: 0 };		
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);
			$scope.user = {};

			$scope.user = { name: "Kārlis Mālnieks", email: "kārlis@yahoo.com", role: "Moderator", userId: 0 };		
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);
			$scope.user = {};

			$scope.user = { name: "Justīne Ādamnsone", email: "justīne@gmail.com", role: "Subscriber", userId: 0 };		
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);
			$scope.user = {};

			$scope.user = { name: "Aleksandrs Suhoparovs", email: "aleksandrs@gmail.com", role: "Subscriber", userId: 0 };		
			$scope.userCounter += 1;
			$scope.user.userId = $scope.userCounter;
			$scope.userList.push($scope.user);
			$scope.user = {};

			
		}
	})
	.controller("AllUsersController", function ($scope, $http) {

		$scope.message = "AllUsersController It works";

		$scope.getPageCount = function () {
			$http.get("https://reqres.in/api/users")
				.then(function (response) {
					$scope.total_pages = response.data.total_pages
				});
		}
	
		$scope.getDataPerPage = function (page_number) {
			$http.get("https://reqres.in/api/users?page=" + page_number)
				.then(function (response) {
					$scope.response_list.push(response.data);
				});
		}
	
		$scope.loopPages = function () {
	
			$scope.getPageCount();
	
			$scope.response_list = [];
	
			for (var i = 1; i <= $scope.total_pages; i++) {
				$scope.getDataPerPage(i);
			}
		}

	})





userApp.controller('mainController', function AddUserController($scope, $http) {

	// $scope.user = { name: "", email: "", userId: 0 };
	// $scope.userList = [];
	// $scope.userCounter = 0

	// $scope.formSubmit = function () {
	// 	$scope.userCounter += 1;
	// 	$scope.user.userId = $scope.userCounter;
	// 	$scope.userList.push($scope.user);

	// 	$scope.user = {};
	// 	$scope.myForm.name.$touched = false;
	// 	$scope.myForm.email.$touched = false;
	// }

	// $scope.getPageCount = function () {
	// 	$http.get("https://reqres.in/api/users")
	// 		.then(function (response) {
	// 			$scope.total_pages = response.data.total_pages
	// 		});
	// }

	// $scope.getDataPerPage = function (page_number) {
	// 	$http.get("https://reqres.in/api/users?page=" + page_number)
	// 		.then(function (response) {
	// 			$scope.response_list.push(response.data);
	// 		});
	// }

	// $scope.loopPages = function () {

	// 	$scope.getPageCount();

	// 	$scope.response_list = [];

	// 	for (var i = 1; i <= $scope.total_pages; i++) {
	// 		$scope.getDataPerPage(i);
	// 	}
	// }


});