"use strict";
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var Showtimes = mongoose.model('Showtimes', {
    Showtimes: {
        zipCode: String,
        date: String
    },
});
router.post('/showtimes', function (req, res) {
    var newShowtimes = new Showtimes({
        zipCode: req.body.zipCode,
        date: req.body.date
    });
    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=' + req.body.date + '&numDays=2&zip=' + req.body.zipCode + '&units=mi&imageSize=Md&imageText=false&api_key=fr63fvhma63cuws5jkzy22eh', function (error, response, body) {
        var data = JSON.parse(body);
        console.log(data);
        if (!error && response.statusCode == 200) {
            res.send(data);
        }
        else {
            console.log(error);
            res.send(error);
        }
    });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd3RpbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvd3RpbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBcUM7QUFDckMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFJakMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDMUMsU0FBUyxFQUFDO1FBQ1IsT0FBTyxFQUFDLE1BQU07UUFDZCxJQUFJLEVBQUMsTUFBTTtLQUNaO0NBQ0YsQ0FBQyxDQUFDO0FBSUgsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztJQUN6QyxJQUFJLFlBQVksR0FBRyxJQUFJLFNBQVMsQ0FBRTtRQUM5QixPQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3hCLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7S0FDckIsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxDQUFDLHdEQUF3RCxHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGlCQUFpQixHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLHlFQUF5RSxFQUMzTCxVQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDO0FBS0gsaUJBQVMsTUFBTSxDQUFDIn0=