'use strict';

const gearhead = {};

gearhead.CONFIG = {
	PRECISION: 2
};

gearhead._round = function (number) {
	return number.toFixed(gearhead.CONFIG.PRECISION);
};

gearhead.horsepower = function () {
	var horsepower;

	if (arguments.length === 4) {
		horsepower = gearhead._round((arguments[0] * gearhead.displacement(arguments[1], arguments[2], arguments[3])) / 792000);
	} else {
		horsepower = gearhead._round((arguments[0] * arguments[1]) / 5252);
	}

	return horsepower;
};

gearhead.torque = function (horsepower, rpms) {
	return gearhead._round((horsepower * 5252) / rpms);
};

gearhead.revsPerMinute = function (horsepower, torque) {
	return gearhead._round((horsepower * 5252) / torque);
};

gearhead.displacement = function (bore, stroke, cylinders) {
	return gearhead._round(bore * bore * stroke * cylinders * 0.7854);
};

gearhead.bore = function (stroke, displacement, cylinders) {
	return gearhead._round(Math.sqrt(displacement / (stroke * cylinders * 0.7854)));
};

gearhead.stroke = function (bore, displacement, cylinders) {
	return gearhead._round(displacement / (bore * bore * cylinders * 0.7854));
};

gearhead.cylinders = function (bore, stroke, displacement) {
	return gearhead._round(displacement / (bore * bore * stroke * 0.7854));
};

gearhead.assembledDeckHeight = function (blockHeight, stroke, rodLength, pinHeight) {
	return gearhead._round(blockHeight - ((stroke / 2) + rodLength + pinHeight));
};

gearhead.boreStrokeRatio = function (bore, stroke) {
	return (bore / stroke).toFixed(2);
};

gearhead.rodStrokeRatio = function (rodLength, stroke) {
	return (rodLength / stroke).toFixed(2);
};

gearhead.compressionRatio = function (cylinderVolume, chamberVolume) {
	return ((cylinderVolume + chamberVolume) / chamberVolume).toFixed(2);
};

gearhead.airCapacity = function (displacement, rpms) {
	return gearhead._round(displacement * rpms / 3456);
};

gearhead.airFlow = function (airCapacity, boost, atmosphere) {
	var _atmosphere = (atmosphere) ? atmosphere : 14.7;

	return gearhead._round(airCapacity * ((boost / _atmosphere) + 1));
};

// Aliases
gearhead.hp = gearhead.horsepower;
gearhead.tq = gearhead.torque;
gearhead.rpms = gearhead.revsPerMinute;
gearhead.adh = gearhead.assembledDeckHeight;

module.exports = gearhead;
