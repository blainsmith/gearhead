(function() {

  module('Functions');

  gearhead.CONFIG.PRECISION = 0;

  test('basic', function() {
    equal(gearhead.horsepower(415, 4000), 316, 'horsepower');
    equal(gearhead.torque(316, 4000), 415, 'torque');
    equal(gearhead.revsPerMinute(316, 415), 3999, 'rpms');
  });

  test('engine', function() {
    equal(gearhead.horsepower(300, 4, 3, 8), 0, 'horsepower');
    equal(gearhead.displacement(4, 3, 8), 302, 'displacement');
    equal(gearhead.bore(3, 302, 8), 4, 'bore');
    equal(gearhead.stroke(4, 302, 8), 3, 'stroke');
    equal(gearhead.cylinders(4, 3, 302), 8, 'cylinders');
    equal(gearhead.assembledDeckHeight(20, 6, 4, 5), 8, 'assembled deck height');
  });

  test('ratios', function() {
    equal(gearhead.boreStrokeRatio(4, 3), 1.33, 'bore/stroke');
    equal(gearhead.rodStrokeRatio(5.7, 3), 1.9, 'rod/stroke');
    equal(gearhead.compressionRatio(10, 3), 4.33, 'compression');
  });

  test('air', function() {
    equal(gearhead.airCapacity(302, 3000), 262, 'capacity');
    equal(gearhead.airFlow(262, 15), 529, 'flow at sea level');
    equal(gearhead.airFlow(262, 15, 30), 393, 'flow at custom atmosphere');
  });

  test('aliases', function() {
    equal(gearhead.hp(415, 4000), 316, 'horsepower');
    equal(gearhead.tq(316, 4000), 415, 'torque');
    equal(gearhead.rpms(316, 415), 3999, 'rpms');
    equal(gearhead.adh(20, 6, 4, 5), 8, 'assembled deck height');
  });

}());
