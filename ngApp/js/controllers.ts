namespace app.Controllers {
  export class HomeController {
    public movie;
    public movieData;
    public search() {
      let info = {
        movie:this.movie,
      }
      console.log(info)
      this.movieService.getmovie(info).then((res) => {
        if (res.message === 'movie not found') {
         alert(res.message)
       } else
        this.movieData = res
         console.log(res)
     })
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
  export class ShowtimesController {
    public zipCode;
    public date;
    public showtimesData;
    public search() {
      let info = {
        zipCode:this.zipCode,
        date:this.date
      }
      console.log(info)
      this.showtimesService.getTimes(info).then((data) => {
      //   if (res.message === 'movie not found') {
      //    alert(res.message)
      //  } else
        //  this.showtimesData = JSON.parse(res)
        this.showtimesData = JSON.parse(data)
         console.log(data)
     })
    }
    constructor(
      private showtimesService: app.Services.ShowtimesService,

    ) {
    }
  }

  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('ShowtimesController', ShowtimesController);

}
