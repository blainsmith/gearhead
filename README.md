# gearhead.js

Common automotive math calculations.

## Installation

gearhead can be installed via npm or bower.

```
$ npm install gearhead
$ bower install gearhead
```

## Usage

```js
// node.js/CommonJS
var gearhead = require('gearhead');

// RequireJS/AMD
require(["gearhead"], function(gearhead){
  ...
});
```

### Methods

#### .horsepower(torque, rpms)

Calculate horsepower based on torque and revs per minute.

#### .horsepower(cylindarPressure, bore, stroke, cylindarCount)

Calculate horsepower based on cylinder pressure (psi), bore, stroke, and number of cylinders.

#### .torque(horsepower, rpms)

Calculate torque based on horsepower and revs per minute.

#### .revsPerMinute(horsepower, torque)

*Alias: .rpms(horsepower, torque)*

Calculate revs per minute based on horsepower and torque.

#### .displacement(bore, stroke, cylinderCount)

Calculate engine displacement based on bore, stroke, and number of cylinders.

#### .bore(stroke, displacement, cylinderCount)

Calculate bore based on displacement, stroke, and number of cylinders.

#### .stroke(bore, displacement, cylinderCount)

Calculate stroke based on displacement, bore, and number of cylinders.

#### .cylinders(bore, stroke, displacement)

Calculate number of cylinders based on displacement, bore, and stroke.

#### .assembledDeckHeight(blockHeight, stroke, rodLength, pinHeight)

*Alias: .adh(blockHeight, stroke, rodLength, pinHeight)*

Calculate the fully assembled deck height based on the block height, stroke, rod length, and pin height.

#### .boreStrokeRatio(bore, stroke)

Bore/stroke ratio. Always returns a decimal precision of 2.

#### .rodStrokeRatio(rodLength, stroke)

Rod length/stroke ratio. Always returns a decimal precision of 2.

#### .compressionRatio(cylindarVolume, chamberVolume)

Compression ratio. Always returns a decimal precision of 2.

#### .airCapacity(displacement, rpms)

Calculate the air capacity of a cylinder.

#### .airFlow(airCapacity, boost[, atmosphere = 14.7])

Calculate the maximum air flow in CFM. The `atmosphere` defaults to sea level which is `14.7`.

## Tests

Running tests with PhantomJS.

```
$ npm test
```

## License

MIT
