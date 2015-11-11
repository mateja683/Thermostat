function Thermostat(){
  this._temperature = 20;
  this._powerSaveMode = true;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if(this._powerSaveMode) {
    if (this._temperature >= 25) {
      return (this._temperature = 25);
    }
  }  else {
    if (this._temperature >= 32) {
      return (this._temperature = 32);
    }
  }
  return this._temperature++;
};

Thermostat.prototype.down = function() {
  if(this._temperature <= 10) {
    return (this._temperature = 10);
  }
  return this._temperature--;
};

Thermostat.prototype.powerModeOn = function () {
  this._powerSaveMode = true;
};

Thermostat.prototype.powerModeOff = function () {
  this._powerSaveMode = false;
};
