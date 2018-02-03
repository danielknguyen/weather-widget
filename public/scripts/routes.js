var routes = module.exports = function(app, weather) {

  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.post('/', function (req, res) {
    
    // console.log('This is my search: ' + req.body.query.location);
    // location={city name},{country code}
    var location = req.body.query.location;

    // set city name
    weather.setCity(location);

    // get all weather data from set city
    weather.getAllWeather(function (err, data) {
      console.log(data);
    });

    res.render('index.html');
  });
};
