var openWeatherAppConfig = module.exports = function (weather, openWeatherAPPID) {
  // set the language for the weather module
  weather.setLang('en');
  // set weather metrics
  weather.setUnits('metric');
  // set module API
  weather.setAPPID(process.env.openWeatherAPPID);
};
