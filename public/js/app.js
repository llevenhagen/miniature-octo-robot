const app = angular.module('OurApp', []);

app.controller('groupController', ['$http', function($http) {
  // this.foo='bar';

  const controller = this;
    
    this.createRecipe = function() {
      $http({
        method: 'POST',
        url: '/recipes',
        data: {
          name: this.name,
          time:  this.time,
          img: this.img,
          ingredients: this.ingredients
        }
      }).then(function(response) {
        console.log(response);
        controller.recipes();
      }, function() {
        console.log('error');
      });
    }
    this.getRecipes = () => {
      $http({
        method: 'GET',
        url: '/recipes'
      }).then((res) => {
        console.log(res.data);
        controller.allrecipes = res.data;
      }, (err) => {
        console.log('error');
      });
    }
    // call on page load
    this.getRecipes();

}]);  // end app.controller
