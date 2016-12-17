// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');

//model
let Movie = mongoose.model('Movie', {
  Movie:{
    zipCode:String,
    date:Date,
  },
});
//Gracenote api
router.post('/movie', function(req, res) {
  let newMovie = new Movie ({
      zipCode:req.body.zipCode,
      date:req.body.date
  })
  request('http://data.tmsapi.com/v1.1/movies/showings?startDate='+req.body.date+'&numDays=2&zip='+req.body.zipCode+'&units=mi&imageSize=Md&imageText=false&api_key=fr63fvhma63cuws5jkzy22eh',
      function (error, response, body) {
        console.log(body)
      console.log(body)
      let movie = JSON.parse(body)
      if (movie.name === req.body.movie) {
        res.send(movie);
      } else {
        console.log(error)
        res.send({message:'movie not found'})
      }
    }
  )
  });

// export router
export = router;
