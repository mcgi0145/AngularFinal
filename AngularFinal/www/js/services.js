angular.module('starter')

.factory('StorageService', function($localStorage) {
    $localStorage = $localStorage.$default({
        things: []
    });
    var counter = 0;
    var _getAll = function () {
      return $localStorage.things;
    };
    var _add = function (thing) {
      $localStorage.things.push([counter, thing]);
        counter++;
    }
    var _remove = function (thing) {
      $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
    }
    return {
        getAll: _getAll,
        add: _add,
        remove: _remove
      };
});
