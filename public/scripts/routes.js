var routes = module.exports = function(app, weather, date) {
  app.get('/', function (req, res) {

    // weather data will be pushed into this obj. Render template with obj
    var obj = {};

    // default san francisco
    weather.setCityId(5391959);

    // get 3 days forecast
    weather.getWeatherForecastForDays(4, function(err, data) {

      if (err) {
        console.log(err);
        res.redirect("/");
      }

      // console.log("weather forecast: " + data);
      data.list.forEach(function(element) {
        // multiple epoch time(seconds) by 1000 to convert to javascript time(milliseconds)
        var epochToJsDate = new Date(element.dt * 1000);
        // format time to display day of the week
        var date_format = date.format(epochToJsDate,'ddd')
        // setup image url
        var imageUrl = "http://openweathermap.org/img/w/" + element.weather[0].icon + ".png";
        // reassign object datetime to display only the day of the week
        element.dt = date_format;
        // reassign object image icon to full url
        element.weather[0].icon = imageUrl;
        // round celsius
        element.temp.day = Math.ceil(element.temp.day);
        // set fahrenheit
        fahrenheit = Math.ceil(element.temp.day * 9/5 + 32);
        element.temp.fahrenheit = fahrenheit;

        // console.log(element);
      });

      obj.data = data;


      // console.log("this is the data " + obj);
      res.render('index.html', data=obj);
    });
  });

  app.post('/', function (req, res) {

    // weather data will be pushed into this obj. Render template with obj
    var obj = {};

    // location={city name},{country code}
    var location = req.body.query.location;

    // reset cityId
    weather.setCityId();

    // set city name
    weather.setCity(location);

    // get 3 days forecast
    weather.getWeatherForecastForDays(4, function(err, data) {

      var loopSwitch = true;

      if (err) {
        console.log(err);
        res.redirect("/");
      }

      // console.log("weather forecast: " + JSON.stringify(data));

      // check if city was found
      if (data.cod === 404 || data.message === "city not found") {
        console.log("city not found");
        res.redirect("/");
      } else {
        data.list.forEach(function(element) {
          // multiple epoch time(seconds) by 1000 to convert to javascript time(milliseconds)
          var epochToJsDate = new Date(element.dt * 1000);
          // format time to display day of the week
          var date_format = date.format(epochToJsDate,'ddd')
          // setup image url
          var imageUrl = "http://openweathermap.org/img/w/" + element.weather[0].icon + ".png";
          // reassign object datetime to display only the day of the week
          element.dt = date_format;
          // reassign object image icon to full url
          element.weather[0].icon = imageUrl;
          // round celsius
          element.temp.day = Math.ceil(element.temp.day);
          // set fahrenheit
          fahrenheit = Math.ceil(element.temp.day * 9/5 + 32);
          element.temp.fahrenheit = fahrenheit;

          // console.log(element);
        });

        obj.data = data;

        // console.log("this is the data " + obj);
        res.render('index.html', data=obj);
      };
    });
  });

};
