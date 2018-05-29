'use strict';

function MousePosition(settings) {
    var element = settings.element;
    var delta = settings.delta;
    var x = 0;
    var y = 0;
    var isActive = false;

    function init() {
        console.log('init');
        console.log(delta);
        element.addEventListener('mousemove', function (event) {
            isActive = true;
            x = newPosition(event.clientX, x, delta);
            y = newPosition(event.clientY, y, delta);
        });

        element.addEventListener('mouseout', function () {
            isActive = false;
        });
    }

    return {
        run: init,
        x: x,
        y: y,
        isActive: isActive
    };
}

function newPosition(newValue, previousValue, delta) {
    if (newValue > (previousValue + delta)) {
        return newValue;
    }
    return previousValue;
}

module.exports = MousePosition;
