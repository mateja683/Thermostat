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




});
