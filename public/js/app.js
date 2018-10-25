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
  this.showEditForm = false;

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
     this.deleteRecipe = (recipe) => {
       $http({
         method: 'DELETE',
         url: '/recipes/' + recipe._id
       }).then((res) => {
          this.getRecipes();
       }, (err) => {
         console.log('error');
       });
     }

    this.updateRecipe = (recipe) => {
      $http({
        method: 'PUT',
        url: '/recipes/' + recipe._id,
        data: {
          name: this.updatedname,
          time: this.updatedtime,
          img: this.updatedimg,
          ingredients: this.updatedingredients
        }
      }).then((res) => {
         this.getRecipes();
         this.showEditForm = null;
      }, (err) => {
        console.log('error');
      });
    }

    // call on page load
    this.getRecipes();

    this.toggleDetailsShow = (recipe) => {
      this.detailsShow = !this.detailsShow
    }

    this.toggleShowAddForm = () => {
      this.addRecipe = !this.addRecipe;
    }

    this.toggleShowEditForm = (recipe) => {
      this.showEditForm = !this.showEditForm;
    }
}]);  // end app.controller
