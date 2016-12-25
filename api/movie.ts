// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');


//model
let Movie = mongoose.model('Movie', {
  Movie:{
    movie:String,
  },
});
//The IMDb api
router.post('/movie', function(req, res) {
  let newMovie = new Movie ({
      movie:req.body.movie,
  })
  request('http://www.omdbapi.com/?t='+req.body.movie+'&y=&plot=full&r=json&apikey=fea60d10',
  function (error, response, body) {
    let data = JSON.parse(body) // parse data
        console.log(data)
        if (!error && response.statusCode == 200) {
        res.send(data) // send the parse data to front end
      } else {
        console.log(error)
      res.send(error)
    }
  })
});



// https://api.themoviedb.org/3/search/movie?api_key=27d9edaf269ac51be79e2c8fc19e5c99&callback=test&append_to_response=videos,images&include_image_language=en,null&query='+req.body.movie,
// Gracenote api for local movie threatres:
// http://data.tmsapi.com/v1.1/movies/showings?startDate='+req.body.date+'&numDays=2&zip='+req.body.zipCode+'&units=mi&imageSize=Md&imageText=false&api_key=fr63fvhma63cuws5jkzy22eh'


// export router
export = router;
