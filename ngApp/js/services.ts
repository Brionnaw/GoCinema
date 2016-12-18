namespace app.Services {
 export class MovieService {
   public MovieResource;
   public getmovie(getInfo) {
     console.log(getInfo)
     return this.MovieResource.save(getInfo).$promise
   }
   constructor(
     $resource:ng.resource.IResourceService,
     public $state:ng.ui.IStateService
   ){
       this.MovieResource = $resource('api/movie');
   }
 }

 angular.module('app').service('movieService', MovieService)

}
