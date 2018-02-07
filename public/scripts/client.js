var celsius = false;

var convertWeatherIcons = function(string) {
  // day icon clear sky
  if (string.indexOf('01d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/01clear-sky-day.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-sunny"></i></p>' );
    // night icon clear sky
  } else if (string.indexOf('01n.png') > 0){
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/02clear-sky-night.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-clear"></i></p>' );
    // day few clouds
  } else if (string.indexOf('02d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/03few-clouds-day.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-cloudy"></i></p>' );
    // night few clouds
  } else if (string.indexOf('02n.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/04few-clouds-night.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-alt-cloudy"></i></p>' );
    // day scattered clouds
  } else if (string.indexOf('03d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/09scattered-clouds-day.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-cloudy-high"></i></p>' );
    // night scattered clouds
  } else if (string.indexOf('03n.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/10scattered-clouds-night.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-cloudy-high"></i></p>' );
    // day broken clouds & night broken clouds
  } else if (string.indexOf('04d.png') > 0 || string.indexOf('04n.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/00broken-clouds.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-cloudy"></i></p>' );
    // day shower rain
  } else if (string.indexOf('09d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/05light-rain-day.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-showers"></i></p>' );
    // night shower rain
  } else if (string.indexOf('09n.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/06light-rain-night.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-alt-showers"></i></p>' );
    // day rain
  } else if (string.indexOf('10d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/11shower-rain.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-rain"></i></p>' );
    // night rain
  } else if (string.indexOf('10n.png') > 0) {
    $('.weather-widget-icon').remove();
    $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-alt-rain"></i></p>' );
    // day thunderstorm
  } else if (string.indexOf('11d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/13thunderstorm.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-thunderstorm"></i></p>' );
    // night thunderstorm
  } else if (string.indexOf('11n.png') > 0) {
    $('.weather-widget-icon').remove();
    $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-alt-thunderstorm"></i></p>' );
    // day snow
  } else if (string.indexOf('13d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/12snow.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-snow"></i></p>' );
    // night snow
  } else if (string.indexOf('13n.png') > 0) {
    $('.weather-widget-icon').remove();
    $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-alt-snow"></i></p>' );
    // day mist
  } else if (string.indexOf('50d.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/07mist-day.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-day-fog"></i></p>' );
    // night mist
  } else if (string.indexOf('50n.png') > 0) {
    // $('.weather-widget-icon').remove();
    $('.weather-widget-icon').attr("src","/assets/weather-icon-pack/08mist-night.png");
    // $('.weather-icon-div').html( '<p class="wi-icon"><i class="wi wi-night-fog"></i></p>' );
  }
};

// function to change background color of weather divs
var backgroundColor = function(color) {

  if (color === 'red') {
    $('#divZero').attr("style","background-color: #CF000F");
    $('#divOne').attr("style","background-color: #D91E18");
    $('#divTwo').attr("style","background-color: #EF4836");
    $('#divThree').attr("style","background-color: #C0392B");
  } else if (color === 'purple') {
    $('#divZero').attr("style","background-color: #663399");
    $('#divOne').attr("style","background-color: #9B59B6");
    $('#divTwo').attr("style","background-color: #947CB0");
    $('#divThree').attr("style","background-color: #BE90D4");
  } else if (color === 'green') {
    $('#divZero').attr("style","background-color: #1E824C");
    $('#divOne').attr("style","background-color: #049372");
    $('#divTwo').attr("style","background-color: #03A678");
    $('#divThree').attr("style","background-color: #26C281");
  };
};

$(document).ready(function () {

$('.deg').on('click', function() {
  if (!celsius) {
    celsius = true;
    $('.celsius').css('display', 'block');
    $('.fahrenheit').css('display', 'none');
  } else {
    celsius = false;
    $('.fahrenheit').css('display', 'block');
    $('.celsius').css('display', 'none');
  }
});

  let listImgIcon = document.getElementsByClassName('weather-widget-icon');

  for (var i = 0; i < listImgIcon.length; i++) {
    convertWeatherIcons(listImgIcon[i].src);
  }

  // change background color of weather div
  $('.changeColor').on('click', function() {
    var color = $(this).val()
    // console.log(color);

    setTimeout(function() { backgroundColor(color); }, 300);
  });
});
