var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("In myController.......");

	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.alert = "";


	$scope.students = [
		{name: "rafi", address: "dhaka", roll: "12016", date: "12/03/2014", mobile: "017234521234"},
		{name: "tanbir", address: "dhaka", roll: "12016", date: "12/03/2014",mobile: "017234521234"},
		{name: "zihad", address: "dhaka", roll: "12016", date: "12/03/2014",mobile: "017234521234"}
	];

	$scope.saveUser = function(){
		$scope.students.push($scope.newUser);
		$scope.newUser = {};
		$scope.alert = "New student add sucessfuly!";
	};

	$scope.selectUser  = function(student){
		console.log(student);
		$scope.clickedUser = student; 
	};

	$scope.updateUser = function(){
	$scope.alert = "Student update sucessfuly!";
	};

	$scope.deleteUser = function(){
		$scope.students.splice($scope.students.indexOf($scope.clickedUser), 1);
		$scope.alert = "Student delete sucessfuly!";
	};

	$scope.clearalert = function(){
		$scope.alert = "";
	}
});