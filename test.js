import test from 'ava';
import gearhead from './';

gearhead.CONFIG.PRECISION = 0;

test('basic', t => {
	t.is(gearhead.horsepower(415, 4000), 316, 'horsepower');
	t.is(gearhead.torque(316, 4000), 415, 'torque');
	t.is(gearhead.revsPerMinute(316, 415), 3999, 'rpms');
});

test('engine', t => {
	t.is(gearhead.horsepower(300, 4, 3, 8), 0, 'horsepower');
	t.is(gearhead.displacement(4, 3, 8), 302, 'displacement');
	t.is(gearhead.bore(3, 302, 8), 4, 'bore');
	t.is(gearhead.stroke(4, 302, 8), 3, 'stroke');
	t.is(gearhead.cylinders(4, 3, 302), 8, 'cylinders');
	t.is(gearhead.assembledDeckHeight(20, 6, 4, 5), 8, 'assembled deck height');
});

test('ratios', t => {
	t.is(gearhead.boreStrokeRatio(4, 3), 1.33, 'bore/stroke');
	t.is(gearhead.rodStrokeRatio(5.7, 3), 1.9, 'rod/stroke');
	t.is(gearhead.compressionRatio(10, 3), 4.33, 'compression');
});

test('air', t => {
	t.is(gearhead.airCapacity(302, 3000), 262, 'capacity');
	t.is(gearhead.airFlow(262, 15), 529, 'flow at sea level');
	t.is(gearhead.airFlow(262, 15, 30), 393, 'flow at custom atmosphere');
});

test('aliases', t => {
	t.is(gearhead.hp(415, 4000), 316, 'horsepower');
	t.is(gearhead.tq(316, 4000), 415, 'torque');
	t.is(gearhead.rpms(316, 415), 3999, 'rpms');
	t.is(gearhead.adh(20, 6, 4, 5), 8, 'assembled deck height');
});
