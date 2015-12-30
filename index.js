'use strict';

var gearhead = {
	CONFIG: {
		PRECISION: 2
	},

	utils: {
		format: function (number, precision) {
			precision = precision || gearhead.CONFIG.PRECISION;
			number = number.toFixed(precision);
			number = (precision > 0) ? parseFloat(number) : parseInt(number, 10);
			return number;
		}
	}
};

gearhead.horsepower = function () {
	var horsepower;

	if (arguments.length === 4) {
		horsepower = gearhead.utils.format((arguments[0] * gearhead.displacement(arguments[1], arguments[2], arguments[3])) / 792000);
	} else {
		horsepower = gearhead.utils.format((arguments[0] * arguments[1]) / 5252);
	}

	return horsepower;
};

gearhead.torque = function (horsepower, rpms) {
	return gearhead.utils.format((horsepower * 5252) / rpms);
};

gearhead.revsPerMinute = function (horsepower, torque) {
	return gearhead.utils.format((horsepower * 5252) / torque);
};

gearhead.displacement = function (bore, stroke, cylinders) {
	return gearhead.utils.format(bore * bore * stroke * cylinders * 0.7854);
};

gearhead.bore = function (stroke, displacement, cylinders) {
	return gearhead.utils.format(Math.sqrt(displacement / (stroke * cylinders * 0.7854)));
};

gearhead.stroke = function (bore, displacement, cylinders) {
	return gearhead.utils.format(displacement / (bore * bore * cylinders * 0.7854));
};

gearhead.cylinders = function (bore, stroke, displacement) {
	return gearhead.utils.format(displacement / (bore * bore * stroke * 0.7854));
};

gearhead.assembledDeckHeight = function (blockHeight, stroke, rodLength, pinHeight) {
	return gearhead.utils.format(blockHeight - ((stroke / 2) + rodLength + pinHeight));
};

gearhead.boreStrokeRatio = function (bore, stroke) {
	return gearhead.utils.format(bore / stroke, 2);
};

gearhead.rodStrokeRatio = function (rodLength, stroke) {
	return gearhead.utils.format(rodLength / stroke, 2);
};

gearhead.compressionRatio = function (cylinderVolume, chamberVolume) {
	return gearhead.utils.format((cylinderVolume + chamberVolume) / chamberVolume, 2);
};

gearhead.airCapacity = function (displacement, rpms) {
	return gearhead.utils.format(displacement * rpms / 3456);
};

gearhead.airFlow = function (airCapacity, boost, atmosphere) {
	var _atmosphere = (atmosphere) ? atmosphere : 14.7;

	return gearhead.utils.format(airCapacity * ((boost / _atmosphere) + 1));
};

// Aliases
gearhead.hp = gearhead.horsepower;
gearhead.tq = gearhead.torque;
gearhead.rpms = gearhead.revsPerMinute;
gearhead.adh = gearhead.assembledDeckHeight;

module.exports = gearhead;
