'use strict';

function transform(x, xMin, xMax, yMin, yMax) {
    var y = yMin + Math.round((yMax - yMin) * (x - xMin) / (xMax - xMin));
    return y;
}

function returnValue(x, xMax, xMin) {
    if (x < xMin) {
        return xMin;
    }
    if (x > xMax) {
        return xMax;
    }
    return x;
}

module.exports = {
    transform: transform,
    returnValue: returnValue
};
