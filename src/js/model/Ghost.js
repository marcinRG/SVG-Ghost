'use strict';
var posUtils = require('./../utils/PositionTransformation.utils');

function Ghost(settings) {
    var isVisble = false;
    var parentElement = settings.parentElement;
    var ghostBody = settings.body;
    var leftEye = settings.leftEye;
    var leftEyeBall = settings.leftEyeBall;
    var rightEye = settings.rightEye;
    var rightEyeBall = settings.rightEyeBall;
    var messageToShow = settings.messageToShow;
    var eyesSettings = settings.eyesSettings;
    var screenSettings;

    function handleMousePositionChanges(value) {
        if (isVisble) {
            var leftEyePosition = calculatePosition(value.x, value.y,
                screenSettings.leftEye, eyesSettings.leftEye);
            var rightEyePosition = calculatePosition(value.x, value.y,
                screenSettings.rightEye, eyesSettings.rightEye);
            leftEye.setAttribute('x', leftEyePosition.x);
            leftEye.setAttribute('y', leftEyePosition.y);
            rightEye.setAttribute('x', rightEyePosition.x);
            rightEye.setAttribute('y', rightEyePosition.y);
        }
    }

    function calculatePosition(x, y, screen, eye) {
        var xValid = posUtils.returnValue(x, screen.maxX, screen.minX);
        var yValid = posUtils.returnValue(y, screen.maxY, screen.minY);
        var eyeX = posUtils.transform(xValid, screen.minX, screen.maxX, eye.minX, eye.maxX);
        var eyeY = posUtils.transform(yValid, screen.minY, screen.maxY, eye.minY, eye.maxY);
        return {
            x: eyeX,
            y: eyeY
        };
    }

    function handleUIMessages(value) {
        if (value.message === messageToShow) {
            show();
        } else {
            hide();
        }
    }

    function hide() {
        isVisble = false;
        ghostBody.style.display = 'none';
    }

    function show() {
        isVisble = true;
        ghostBody.style.display = 'block';
    }

    function update(value) {
        if (isUIMessage(value)) {
            handleUIMessages(value);
        }
        if (isMousePositionChange(value)) {
            handleMousePositionChanges(value);
        }
    }

    function init() {
        hide();
        console.log(rightEye);
        console.log(leftEye);
        screenSettings = getScreenSettings();
        window.addEventListener('resize', function () {
            //getElementRect();
        });
    }

    function getScreenSettings() {
        var rect = parentElement.getBoundingClientRect();
        var xCenter = Math.round(rect.width / 2);
        var leftEyeScreenSettings = {
            minY: 0,
            maxY: rect.height,
            minX: rect.left,
            maxX: xCenter
        };
        var rightEyeScreenSettings = {
            minY: 0,
            maxY: rect.height,
            minX: xCenter,
            maxX: rect.width
        };

        return {
            leftEye: leftEyeScreenSettings,
            rightEye: rightEyeScreenSettings
        };
    }

    return {
        run: init,
        update: update
    };
}

function isUIMessage(value) {
    return (value && value.message);
}

function isMousePositionChange(value) {
    return (value && value.x && value.y);
}

module.exports = Ghost;

// const rect = this.htmlFieldElement.getBoundingClientRect();
// this.minWidth = Math.floor(rect.left + (this.pointerWidth / 2));
// this.maxWidth = Math.ceil(rect.left + rect.width - (this.pointerWidth / 2));
