function Thermostat(){
  this.DEFAULTTEMP = 20;
  this._temperature = this.DEFAULTTEMP;
  this.MINIMUMTEMP = 10;
  this._powerSaveMode = true;
  this._color = 'yellow';
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.color = function () {
  this._setColor();
  return this._color;
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
  return this._temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this._isMinTemp()) {
    return (this._temperature = this.MINIMUMTEMP);
  }
  return this._temperature -= 1;
};

Thermostat.prototype._isMinTemp = function() {
  return (this._temperature === this.MINIMUMTEMP);
};

Thermostat.prototype.powerModeOn = function () {
  this._powerSaveMode = true;
};

Thermostat.prototype.powerModeOff = function () {
  this._powerSaveMode = false;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULTTEMP;
  return this._temperature ;
};

Thermostat.prototype._setColor = function() {
  switch (true) {
    case this._temperature < 18:
    this._color = 'green';
    break;

    case this._temperature > 24:
    this._color = 'red';
    break;

    default:
    this._color = 'yellow';
  }
};
