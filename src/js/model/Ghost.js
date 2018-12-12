'use strict';
var posUtils = require('./../utils/PositionTransformation.utils');
var miscUtils = require('./../utils/Misc.utils');

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
    var fullScreenMove = settings.fullScreenMove;
    var margin = 35;

    function handleMousePositionChanges(value) {
        if (isVisble) {
            move(value.x, value.y, leftEye, eyesSettings.leftEye, screenSettings.leftEye);
            move(value.x, value.y, leftEyeBall, eyesSettings.leftEyeball,
                screenSettings.leftEye);
            move(value.x, value.y, rightEye, eyesSettings.rightEye,
                screenSettings.rightEye);
            move(value.x, value.y, rightEyeBall, eyesSettings.rightEyeball,
                screenSettings.rightEye);
        }
    }

    function move(x, y, eye, eyeSetting, screenSetting) {
        var newEyePosition = calculatePosition(x, y,
            screenSetting, eyeSetting);
        eye.setAttribute('x', newEyePosition.x);
        eye.setAttribute('y', newEyePosition.y);
    }

    function calculatePosition(x, y, screen, eye) {
        var xValid = posUtils.returnValue(x, screen.maxX, screen.minX);
        var yValid = posUtils.returnValue(y, screen.maxY, screen.minY);
        var newX = posUtils.transform(xValid, screen.minX, screen.maxX, eye.minX, eye.maxX);
        var newY = posUtils.transform(yValid, screen.minY, screen.maxY, eye.minY, eye.maxY);
        return {
            x: newX,
            y: newY
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
        if (miscUtils.isUIMessage(value)) {
            handleUIMessages(value);
        }
        if (miscUtils.isMousePositionChange(value)) {
            handleMousePositionChanges(value);
        }
    }

    function init() {
        hide();
        screenSettings = getScreenSettings();
        window.addEventListener('resize', function () {
            screenSettings = getScreenSettings();
            handleMousePositionChanges({x: 0, y: 0});
        });
    }

    function getRightMinXLeftMaxX(rect, fullScreenMove) {
        var leftMaxX;
        var rightMinX;
        var xCenter = Math.round(rect.width / 2);
        if (fullScreenMove) {
            leftMaxX = rect.width - margin;
            rightMinX = margin;
        } else {
            leftMaxX = xCenter;
            rightMinX = xCenter;
        }
        return {
            leftMax: leftMaxX,
            rightMin: rightMinX
        };
    }

    function getScreenSettings() {
        var rect = parentElement.getBoundingClientRect();
        var minMax = getRightMinXLeftMaxX(rect, fullScreenMove);
        var leftEyeScreenSettings = {
            minY: margin,
            maxY: rect.height - margin,
            minX: margin,
            maxX: minMax.leftMax
        };
        var rightEyeScreenSettings = {
            minY: margin,
            maxY: rect.height - margin,
            minX: minMax.rightMin,
            maxX: rect.width - margin
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

module.exports = Ghost;
