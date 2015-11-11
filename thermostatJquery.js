  $( document ).ready(function() {

    function updateTemp() {
      str = thermostat.temperature();
      $('div.temperature').html( str );
    }

    thermostat = new Thermostat();
    var str = thermostat.temperature();
    $('#PowerOn').addClass("selectedButton");
    $('#PowerOff').addClass("inactiveButton");
    $('div.temperature').addClass(thermostat.color());
    $('div.temperature').html( str );

    $('#Up').click(function() {
      $('div.temperature').removeClass(thermostat.color());
      thermostat.up();
      $('div.temperature').addClass(thermostat.color());
      updateTemp();
    });

    $('#Down').click(function() {
      $('div.temperature').removeClass(thermostat.color());
      thermostat.down();
      $('div.temperature').addClass(thermostat.color());
      updateTemp();
    });

    $('#Reset').click(function() {
      $('div.temperature').removeClass(thermostat.color());
      thermostat.reset();
      $('div.temperature').addClass(thermostat.color());
      updateTemp();
    });

    $('#PowerOn').click(function() {
      $('#PowerOff').removeClass("selectedButton");
      $('#PowerOn').removeClass("inactiveButton");
      thermostat.powerModeOn();
      $('#PowerOn').addClass("selectedButton");
      $('#PowerOff').addClass("inactiveButton");
      updateTemp();
    });

    $('#PowerOff').click(function() {
      $('#PowerOn').removeClass("selectedButton");
      $('#PowerOff').removeClass("inactiveButton");
      thermostat.powerModeOff();
      $('#PowerOff').addClass("selectedButton");
      $('#PowerOn').addClass("inactiveButton");
      updateTemp();
    });


  });
