const app = angular.module('OurApp', []);

app.controller('groupController', ['$http', function($http) {

    const controller = this;
    //
    // this.createRecipe = function() {
    //   $http({
    //     method: 'POST',
    //     url: '/recipes',
    //     data: {
    //       name: this.name,
    //       time:  this.time,
    //       img: this.img,
    //       ingredients: this.ingredients
    //     }
    //   }).then(function(response) {
    //     console.log(response);
    //     controller.recipes();
    //   }, function() {
    //     console.log('error');
    //   });
    // }
    this.getRecipes = function() {
      $http({
        method: 'GET',
        url: '/recipes'
      }).then(function(response) {
        controller.recipes = response.data;
        console.log(response.data);
      }, function() {
        console.log('error');
      });
    }
    // this.recipes();

}]);  // end app.controller
