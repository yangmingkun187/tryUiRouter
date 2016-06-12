app.config(function($stateProvider) {
    $stateProvider
        .state('tourism.edit', {
            url: "/edit",
            params: {
                param1: null
            },
            templateUrl: "../../views/edit/product.edit.html",
            controller: 'tourismEdit'
        });
});
app.controller('tourismEdit',function($scope,$stateParams) {
    $scope.postData = $stateParams;
});