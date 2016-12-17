namespace app.Controllers {
  export class HomeController {
    public zipCode;
    public date;
    public search(){
      let info = {
        zipCode:this.zipCode,
        date:this.date
      }
      console.log(info)
      this.movieService.getZipCode(info).then((res) => {

      })
    }
    constructor(
      private movieService: app.Services.MovieService,
    ) {
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
