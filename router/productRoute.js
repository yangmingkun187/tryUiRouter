app.config(function($stateProvider) {
    $stateProvider
        .state('product', {
            url: "/product",
            templateUrl: "/views/product.html",
            controller: 'products'
        })
});
app.controller('products',function($scope) {
    $scope.productList = [
        {
            name: '产品1',
            id : '1'
        },{
            name: '产品2',
            id : '2'
        },{
            name: '产品3',
            id : '3'
        }
    ];
});