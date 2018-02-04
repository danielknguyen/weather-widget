var celsius = false;

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
  
});
