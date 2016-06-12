app.config(function($stateProvider) {
    $stateProvider
        .state('tourism', {
            url: "/tourism",
            templateUrl: "views/tourism.html",
            controller: 'tourisms'
        })
});
app.controller('tourisms',function($scope) {
    $scope.tourismList = [
        {
            name: '行程1',
            id : '1'
        },{
            name: '行程2',
            id : '2'
        },{
            name: '行程3',
            id : '3'
        }
    ];
});