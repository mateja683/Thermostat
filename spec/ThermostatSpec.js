describe('Thermostat', function() {

  var thermostat;
  describe('initialize thermostat', function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });
});
