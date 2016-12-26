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
 export class ShowtimesService {
   public ShowtimeResource;
   public getTimes(times){
     console.log(times)
     return this.ShowtimeResource.save(times).$promise
   }
   constructor(
     $resource:ng.resource.IResourceService,
     public $state:ng.ui.IStateService
   ){
       this.ShowtimeResource = $resource('api/showtimes');
   }
 }

 angular.module('app').service('movieService', MovieService),
 angular.module('app').service('showtimesService', ShowtimesService)


}
