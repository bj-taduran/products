var app = angular.module('ProductCatalogApp', []);

app.factory('ProductsService', function($http, $q) {
  var products;
  var categories = [
    'shows',
    'books',
    'games',
    'music'
  ];

  return {
    getProducts: function() {
      if (products) {
        return $q.when(products);
      }
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: '/api/products'
        }).then(function successCallback(response) {
          products = response.data;
          resolve(products);
        });
      });
    },
    getCategories: function() {
      return categories;
    }
  };
});

app.controller('ProductCatalogController', function(ProductsService) {
  var controller = this;
  controller.products = [];
  controller.categories = ProductsService.getCategories();
  controller.listView = false;
  controller.adding = false;

  controller.setListView = function() {
    controller.listView = true;
  };

  controller.setColumnView = function() {
    controller.listView = false;
  };

  controller.filterCategory = function(category) {
    controller.category = category;
  };

  controller.filterClear = function() {
    controller.category = 'all';
    controller.search = '';
  };

  ProductsService.getProducts().then(function(products) {
    controller.products = products;
  });

  controller.filterClear();
});

app.filter('CategoryFilter', function() {
  return function(products, category) {
    return products.filter(function(product) {
      return category === 'all' ? true : product.category === category;
    });
  }
});

app.filter('SearchFilter', function() {
  return function(products, search) {
    return products.filter(function(product) {
      return search.length === 0 ? true : product.name.toLowerCase().search(search.toLowerCase()) != -1;
    });
  };
});