'use strict';
var utils = require('./../utils/Observable.utils');

function MousePosition(initDelta) {
    var x = 0;
    var y = 0;
    var delta = initDelta;
    return {
        x: x,
        y: y,
        delta: delta,
        isPositionChanged: isPositionChanged
    };
}

function isPositionChanged(newValue, previousValue, delta) {
    return ((Math.abs(newValue - previousValue) > delta));
}

function ObservableMousePosition(settings) {
    var mp = new utils.ObservableWrapper(new MousePosition(settings.delta));
    var element = settings.element;

    function init() {
        element.addEventListener('mousemove', function (event) {
            if (mp.isPositionChanged(event.clientX, mp.x, mp.delta)) {
                mp.x = event.clientX;
            }
            if (mp.isPositionChanged(event.clientY, mp.y, mp.delta)) {
                mp.y = event.clientY;
            }
        });
    }

    return {
        run: init,
        addObserver: function (observer) {
            mp.addObserver(mp.observers, observer);
        }
    };
}

module.exports = ObservableMousePosition;
