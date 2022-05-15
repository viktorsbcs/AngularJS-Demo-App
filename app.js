var userApp = angular
  .module("userApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider

      .when("/user", {
        templateUrl: "pages/user.html",
        controller: "UserController",
      })
      .when("/all-users", {
        templateUrl: "pages/all-users.html",
        controller: "AllUsersController",
      })
      .otherwise({ redirectTo: "/user" });
  })
  .controller("UserController", function ($scope) {
    $scope.message = "UsersController It works";

    $scope.user = { name: "", email: "", role: "", userId: 0 };
    $scope.userList = [];
    $scope.userCounter = 0;

    $scope.formSubmit = function () {
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);

      $scope.user = {};
      $scope.myForm.name.$touched = false;
      $scope.myForm.email.$touched = false;
    };

    $scope.filtText = "";
    $scope.select = function (setTab) {
      $scope.filtText = "All";
      if (setTab === 2) $scope.filtText = "Administrator";
      if (setTab === 3) $scope.filtText = "Moderator";
      if (setTab === 4) $scope.filtText = "Subscriber";

      console.log(
        "select() pressed, setTab=" +
          $scope.tab +
          ", fillText=" +
          $scope.filtText
      );
    };

    $scope.populateWithDummyData = function () {
      $scope.userList = [];
      $scope.userCounter = 0;

      $scope.user = {
        name: "Sam Anthony",
        email: "sam@gmail.com",
        role: "Administrator",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Bridget Jones",
        email: "bridget@inbox.com",
        role: "Moderator",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Karl Thomson",
        email: "karl@yahoo.com",
        role: "Moderator",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Justine Adamson",
        email: "justine@gmail.com",
        role: "Subscriber",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Aleksandr Nowitzki",
        email: "aleksandr@gmail.com",
        role: "Subscriber",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "William Manor",
        email: "william@gmail.com",
        role: "Administrator",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "George Bean",
        email: "george@gmail.com",
        role: "Moderator",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Jack Depp",
        email: "jack@outlook.com",
        role: "Subscriber",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Branda Simpson",
        email: "branda@abc.com",
        role: "Subscriber",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};

      $scope.user = {
        name: "Bill Russel",
        email: "bill@info.com",
        role: "Subscriber",
        userId: 0,
      };
      $scope.userCounter += 1;
      $scope.user.userId = $scope.userCounter;
      $scope.userList.push($scope.user);
      $scope.user = {};
    };
  })
  .controller("AllUsersController", function ($scope, $http) {
    $scope.message = "AllUsersController It works";

    $scope.getPageCount = function () {
      $http.get("https://reqres.in/api/users").then(function (response) {
        $scope.total_pages = response.data.total_pages;
      });
    };

    $scope.getDataPerPage = function (page_number) {
      $http
        .get("https://reqres.in/api/users?page=" + page_number)
        .then(function (response) {
          $scope.response_list.push(response.data);
        });
    };

    $scope.loopPages = function () {
      $scope.getPageCount();

      $scope.response_list = [];

      for (var i = 1; i <= $scope.total_pages; i++) {
        $scope.getDataPerPage(i);
      }
    };
  });
