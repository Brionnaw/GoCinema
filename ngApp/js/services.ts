namespace app.Services {
 export class MovieService {
   public MovieResource;
   public getmovie(getInfo) {
     console.log(getInfo)
     return this.MovieResource.save(getInfo).$promise
   }

   constructor(
     $resource:ng.resource.IResourceService,
   ){
       this.MovieResource = $resource('api/movie');
   }
 }
 // export class ShowtimesService {
 //   public ShowtimeResource;
 //   public getTimes(getInfo){
 //     console.log(getInfo)
 //     return this.ShowtimeResource.save(getInfo).$promise
 //   }
 //   constructor(
 //     $resource:ng.resource.IResourceService,
 //   ){
 //       this.ShowtimeResource = $resource('api/showtimes');
 //   }
 // }

 angular.module('app').service('movieService', MovieService)
 // angular.module('app').service('showtimesService', ShowtimesService)


}
