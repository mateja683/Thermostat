describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
  });


  describe('initialize thermostat', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('change thermostat temperature',function() {
    it('up button increases temperature by 1 degree',function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
    it('down button decreases temperature by 1 degree',function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });
  });

  describe('setting min and max temps', function() {
    it('alows for min temp of 10', function () {
      for(var i = 0; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    });
    it('allows max temp of 25 with power mode on', function() {
      thermostat.powerModeOn();
      for(var i = 0; i <= 5; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(25);
    });
    it('allows max temp of 32 with power mode off', function() {
      thermostat.powerModeOff();
      for(var i = 0; i <= 12; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(32);
    });
    it('expects power save mdoe on by default', function() {
      expect(thermostat._powerSaveMode).toBe(true);
    });
  });



});
