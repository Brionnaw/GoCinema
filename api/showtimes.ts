// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');


//Showtime model
let Showtimes = mongoose.model('Showtimes', {
  Showtimes:{
    zipCode:String,
    date:String
  },
});


//The Gracenote api - movie showtimes
router.post('/showtimes', function(req, res) {
  let newShowtimes = new Showtimes ({
      zipCode:req.body.zipCode,
      date:req.body.date
  })
  request('http://data.tmsapi.com/v1.1/movies/showings?startDate='+req.body.date+'&numDays=2&zip='+req.body.zipCode+'&units=mi&imageSize=Md&imageText=false&api_key=fr63fvhma63cuws5jkzy22eh',
  function (error, response, body) {
    // let data = JSON.parse(body) // parse data
        console.log(body)
        if (!error && response.statusCode == 200) {
        res.send(body) // send the parse data to front end
      } else {
        console.log(error)
      res.send(error)
    }
  })
});



// export router
export = router;
