var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService, $window, $location) {
                this.movieService = movieService;
                this.$window = $window;
                this.$location = $location;
            }
            HomeController.prototype.search = function () {
                var _this = this;
                var info = {
                    movie: this.movie,
                };
                console.log(info);
                this.movieService.getmovie(info).then(function (res) {
                    if (res.message === 'movie not found') {
                        alert(res.message);
                    }
                    else
                        _this.movieData = res;
                    console.log(res);
                });
            };
            HomeController.prototype.goToWebsite = function (imdbID) {
                console.log(this.$location.url);
                this.$window.location.href = 'http://www.imdb.com/title/' + imdbID;
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var ShowtimesController = (function () {
            function ShowtimesController(showtimesService) {
                this.showtimesService = showtimesService;
            }
            ShowtimesController.prototype.search = function () {
                var _this = this;
                var info = {
                    zipCode: this.zipCode,
                    date: this.date
                };
                console.log(info);
                this.showtimesService.getTimes(info).then(function (data) {
                    _this.showtimesData = JSON.parse(data);
                    console.log(data);
                });
            };
            return ShowtimesController;
        }());
        Controllers.ShowtimesController = ShowtimesController;
        angular.module('app').controller('HomeController', HomeController);
        angular.module('app').controller('ShowtimesController', ShowtimesController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0EyRFo7QUEzREQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBMkR4QjtJQTNEYSxXQUFBLFdBQVc7UUFDdkI7WUFxQkUsd0JBQ1UsWUFBdUMsRUFDeEMsT0FBMEIsRUFDMUIsU0FBNkI7Z0JBRjVCLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDeEMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1lBRXRDLENBQUM7WUF2Qk0sK0JBQU0sR0FBYjtnQkFBQSxpQkFZQztnQkFYQyxJQUFJLElBQUksR0FBRztvQkFDVCxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUs7aUJBQ2pCLENBQUE7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BCLENBQUM7b0JBQUMsSUFBSTt3QkFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQyxDQUFDLENBQUE7WUFDSCxDQUFDO1lBRUssb0NBQVcsR0FBbEIsVUFBbUIsTUFBTTtnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLEdBQUUsTUFBTSxDQUFDO1lBQ3BFLENBQUM7WUFPRixxQkFBQztRQUFELENBQUMsQUEzQkQsSUEyQkM7UUEzQlksMEJBQWMsaUJBMkIxQixDQUFBO1FBRUQ7WUFtQkUsNkJBQ1UsZ0JBQStDO2dCQUEvQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQStCO1lBR3pELENBQUM7WUFuQk0sb0NBQU0sR0FBYjtnQkFBQSxpQkFjQztnQkFiQyxJQUFJLElBQUksR0FBRztvQkFDVCxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ3BCLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSTtpQkFDZixDQUFBO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFLN0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNyQixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7WUFNSCwwQkFBQztRQUFELENBQUMsQUF4QkQsSUF3QkM7UUF4QlksK0JBQW1CLHNCQXdCL0IsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFL0UsQ0FBQyxFQTNEYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUEyRHhCO0FBQUQsQ0FBQyxFQTNEUyxHQUFHLEtBQUgsR0FBRyxRQTJEWiJ9