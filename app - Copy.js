var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "abc college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "sharath";
        $scope.department = "indormation Science";
        $scope.semester = 3;

        //aray
        $scope.students =[
            "ROHITH",
            "ROSHAN",
            "SACHIN",
            "RAVI",
        ];
    }
);