angular.module('starter')
.factory('BestBuyService', function($http, $cordovaGeolocation){
    
    var bestBuyApiEndPoint = 'http://api.bestbuy.com/v1';
    var key = 'bhz3e2m2fjbcvqf54mc4te38';
    
return {
    search: function(term){
        return $http.get(bestBuyApiEndPoint + '/products((search=' + term + '))?show=name,sku,salePrice,image&format=json&apiKey=' + key);
    },
        getStores : function(lat, long){
            return $http.get(bestBuyApiEndPoint + '/stores(area(' +  lat + ',' +long + ',100000))?format=json&apiKey=' + key + '&show=longName,City,address,phone,hours');
        },
        getStoresCity : function(store){
         return $http.get(bestBuyApiEndPoint +  '/stores(city=' + store + ')?format=json&apiKey=' + key);
        }
    };
});