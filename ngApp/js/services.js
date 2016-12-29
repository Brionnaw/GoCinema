var app;
(function (app) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('api/movie');
            }
            MovieService.prototype.getmovie = function (getInfo) {
                console.log(getInfo);
                return this.MovieResource.save(getInfo).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        var ShowtimesService = (function () {
            function ShowtimesService($resource) {
                this.ShowtimeResource = $resource('api/showtimes');
            }
            ShowtimesService.prototype.getTimes = function (getInfo) {
                console.log(getInfo);
                return this.ShowtimeResource.save(getInfo).$promise;
            };
            return ShowtimesService;
        }());
        Services.ShowtimesService = ShowtimesService;
        angular.module('app').service('movieService', MovieService),
            angular.module('app').service('showtimesService', ShowtimesService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0ErQlo7QUEvQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBK0JyQjtJQS9CYSxXQUFBLFFBQVE7UUFDckI7WUFPRSxzQkFDRSxTQUFzQztnQkFFcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQVRNLCtCQUFRLEdBQWYsVUFBZ0IsT0FBTztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQTtZQUNsRCxDQUFDO1lBT0gsbUJBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpZLHFCQUFZLGVBWXhCLENBQUE7UUFDRDtZQU1FLDBCQUNFLFNBQXNDO2dCQUVwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFSTSxtQ0FBUSxHQUFmLFVBQWdCLE9BQU87Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQTtZQUNyRCxDQUFDO1lBTUgsdUJBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLHlCQUFnQixtQkFXNUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7WUFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUdwRSxDQUFDLEVBL0JhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQStCckI7QUFBRCxDQUFDLEVBL0JTLEdBQUcsS0FBSCxHQUFHLFFBK0JaIn0=