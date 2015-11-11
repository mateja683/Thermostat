  $( document ).ready(function() {

    thermostat = new Thermostat();
    var str = thermostat.temperature();
    $('#PowerOn').addClass("selectedButton");
    $('#PowerOff').addClass("inactiveButton");
    $('div.temperature').addClass("temperature"+thermostat.color());
    $('div.temperature').html( str );

    $('#Up').click(function() {
      $('div.temperature').removeClass("temperature"+thermostat.color());
      thermostat.up();
      $('div.temperature').addClass("temperature"+thermostat.color());
      str = thermostat.temperature();
      $('div.temperature').html( str );
    });

    $('#Down').click(function() {
      $('div.temperature').removeClass("temperature"+thermostat.color());
      thermostat.down();
      $('div.temperature').addClass("temperature"+thermostat.color());
      str = thermostat.temperature();
      $('div.temperature').html( str );
    });

    $('#Reset').click(function() {
      thermostat.reset();
      str = thermostat.temperature();
      $('div.temperature').html( str );
    });

    $('#PowerOn').click(function() {
      $('#PowerOff').removeClass("selectedButton");
      $('#PowerOn').removeClass("inactiveButton");
      thermostat.powerModeOn();
      $('#PowerOn').addClass("selectedButton");
      $('#PowerOff').addClass("inactiveButton");
      str = thermostat.temperature();
      $('div.temperature').html( str );
    });

    $('#PowerOff').click(function() {
      $('#PowerOn').removeClass("selectedButton");
      $('#PowerOff').removeClass("inactiveButton");
      thermostat.powerModeOff();
      $('#PowerOff').addClass("selectedButton");
      $('#PowerOn').addClass("inactiveButton");
      str = thermostat.temperature();
      $('div.temperature').html( str );
    });


  });
