var products = [
  { "id" : 1, "name" : "Book #1", "category" : "books" },
  { "id" : 2, "name" : "Book #2", "category" : "books" },
  { "id" : 3, "name" : "Book #3", "category" : "books" },
  { "id" : 4, "name" : "Show #1", "category" : "shows" },
  { "id" : 5, "name" : "Show #2", "category" : "shows" }
];

describe('ProductCatalogApp', function() {

  describe('ProductCatalogController', function () {
    var controller;
    var mockProductsService;

    beforeEach(module('ProductCatalogApp', function($provide) {
      mockProductsService = {
        getProducts: function() {},
        getCategories: function() {}
      };
      $provide.value('ProductsService', mockProductsService);
    }));

    beforeEach(inject(function($controller, $q, $rootScope){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      spyOn(mockProductsService, 'getProducts').and.returnValue($q.when(products));
      spyOn(mockProductsService, 'getCategories').and.returnValue(['cat1', 'cat2']);

      controller = $controller('ProductCatalogController', {});
    }));    

    it('should set default state', function() {
      expect(controller.products).toEqual([]);
      expect(controller.categories).toEqual(['cat1', 'cat2']);
      expect(controller.listView).toEqual(false);
      expect(controller.adding).toEqual(false);
      expect(controller.category).toEqual('all');
      expect(controller.search).toEqual('');
    });

    it('should get products on initialization', function() {
      expect(mockProductsService.getProducts).toHaveBeenCalled();
    });

    it('should set listView to true when calling setListView()', function() {
      controller.setListView();
      expect(controller.listView).toEqual(true);
    });

    it('should set listView to false when calling setColumnView()', function() {
      controller.setColumnView();
      expect(controller.listView).toEqual(false);
    });

    it('should set category to false when calling filterCategory()', function() {
      controller.filterCategory('cat1');
      expect(controller.category).toEqual('cat1');
    });

    it('should set category and search to defaults when calling filterClear()', function() {
      controller.filterClear();
      expect(controller.category).toEqual('all');
      expect(controller.search).toEqual('');
    });

  });

  describe('ProductsService', function () {
    var ProductsService, $httpBackend;

    beforeEach(module('ProductCatalogApp'));

    beforeEach(inject(function (_ProductsService_, _$httpBackend_) {
      ProductsService = _ProductsService_;
      $httpBackend = _$httpBackend_;
    }));

    it('should allow fetching products catalog', function() {
      var results;

      $httpBackend.whenGET('/api/products').respond(products);
      ProductsService.getProducts().then(function(products) {
        results = products;
      });
      $httpBackend.flush();

      expect(results).toEqual(products);
    });

  });

  describe('CategoryFilter', function() {
    var categoryFilter;

    beforeEach(module('ProductCatalogApp'));

    beforeEach(inject(function($filter){
      categoryFilter = $filter('CategoryFilter');
    }));

    it('returns 0 when category not found', function() {
      var result = categoryFilter(products, 'movies');
      expect(result).toEqual([]);
    });

    it('returns the correct value when given an existing category', function() {
      var result = categoryFilter(products, 'books');
      expect(result.length).toEqual(3);
    });

  });

  describe('SearchFilter', function() {
    var searchFilter;

    beforeEach(module('ProductCatalogApp'));

    beforeEach(inject(function($filter){
      searchFilter = $filter('SearchFilter');
    }));

    it('returns 0 when search string not found', function() {
      var result = searchFilter(products, 'not found');
      expect(result).toEqual([]);
    });

    it('returns the correct value when search string is found', function() {
      var result = searchFilter(products, 'Book');
      expect(result.length).toEqual(3);
    });

    it('returns the correct value regardless of case', function() {
      var result = searchFilter(products, 'show');
      expect(result.length).toEqual(2);
    });

  });

});

