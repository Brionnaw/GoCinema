namespace app.Controllers {
  export class HomeController {
    public movie;
    public movieData;
    public search(){
      let info = {
        movie:this.movie,
      }
      console.log(info)
      this.movieService.getmovie(info).then((data) => {
      //   if (res.message === 'movie not found') {
      //    alert(res.message)
      //  } else
        //  this.movieData = (JSON.parse(res))
        this.movieData = (data)
         console.log(data)
     }
   )
    }
    //webpage click //change to external href
   public goToWebsite(imdbID) {
     console.log(this.$location.url)
     this.$window.location.href = 'http://www.imdb.com/title/'+ imdbID;
   }
    constructor(
      private movieService: app.Services.MovieService,
      public $window: ng.IWindowService,
      public $location:ng.ILocationService
    ) {
    }
  }
  //Movie Info  Controller
  export class MovieInfoController {
    public movieData;

    constructor(){

    }

}

  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('MovieInfoController', MovieInfoController);

}
