namespace app.Controllers {
  export class HomeController {
    public movie;
    public movieData;
    public search(){
      let info = {
        movie:this.movie,
      }
      console.log(info)
      this.movieService.getmovie(info).then((res) => {
      //   if (res.message === 'recipe not found') {
      //    alert(res.message)
      //  } else
         this.movieData = res;
         console.log(res)

     }
   )
    }
    constructor(
      private movieService: app.Services.MovieService,
    ) {
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
