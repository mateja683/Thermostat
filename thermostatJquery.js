  $( document ).ready(function() {

    thermostat = new Thermostat();
    var str = thermostat.temperature();
    console.log(str);
    $('div.temperature').html( str );

  });