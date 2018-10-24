const app = angular.module('OurApp', []);

app.controller('groupController', ['$http', function($http) {
  // this.foo='bar';

  const controller = this;
  // ==================================
  //          VARIABLES
  // ==================================
  // default variables
  this.addRecipe = false;
  this.detailsShow = false;

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
  // this.createRecipe = () => {
  //     $http({
  //       method: 'POST',
  //       url: '/recipes',
  //       data: {
  //         name: this.name,
  //         time:  this.time,
  //         img: this.img,
  //         ingredients: this.ingredients
  //       }
  //     }).then((res) {
  //       this.getRecipes();
  //     }, (err) => {
  //       console.log('error');
  //     });
  //   }
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
         controller.getRecipes();
       }, function() {
         console.log('error');
       });
     }
    // this.updateRecipe = (id)
    // call on page load
    this.getRecipes();

    this.toggleShowAddForm = () => {
      this.addRecipe = !this.addRecipe;
    }
}]);  // end app.controller
