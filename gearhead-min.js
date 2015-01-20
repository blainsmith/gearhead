"use strict";(function(){var e=this,n=function(e){return e instanceof n?e:this instanceof n?void(this._wrapped=e):new n(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports.gearhead=n):e.gearhead=n,n.CONFIG={PRECISION:2},n._round=function(e){return e.toFixed(n.CONFIG.PRECISION)},n.horsepower=function(){return n._round(4===arguments.length?arguments[0]*n.displacement(arguments[1],arguments[2],arguments[3])/792e3:arguments[0]*arguments[1]/5252)},n.torque=function(e,r){return n._round(5252*e/r)},n.revsPerMinute=function(e,r){return n._round(5252*e/r)},n.displacement=function(e,r,t){return n._round(e*e*r*t*.7854)},n.bore=function(e,r,t){return n._round(Math.sqrt(r/(e*t*.7854)))},n.stroke=function(e,r,t){return n._round(r/(e*e*t*.7854))},n.cylinders=function(e,r,t){return n._round(t/(e*e*r*.7854))},n.assembledDeckHeight=function(e,r,t,o){return n._round(e-(r/2+t+o))},n.boreStrokeRatio=function(e,n){return(e/n).toFixed(2)},n.rodStrokeRatio=function(e,n){return(e/n).toFixed(2)},n.compressionRatio=function(e,n){return((e+n)/n).toFixed(2)},n.airCapacity=function(e,r){return n._round(e*r/3456)},n.airFlow=function(e,r,t){var o=t?t:14.7;return n._round(e*(r/o+1))},n.hp=n.horsepower,n.tq=n.torque,n.rpms=n.revsPerMinute,n.adh=n.assembledDeckHeight,"function"==typeof define&&define.amd&&define("gearhead",[],function(){return n})}).call(this);
//# sourceMappingURL=gearhead-min.map