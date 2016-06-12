app.config(function($stateProvider) {
    $stateProvider
        .state('product.edit', {
            url: "/edit",
            params: {
                param1: null
            },
            templateUrl: "../../views/edit/product.edit.html",
            controller: 'productEdit'
        })
});
app.controller('productEdit',function($scope,$stateParams) {
    $scope.postData = $stateParams;
});