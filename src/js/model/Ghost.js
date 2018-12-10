'use strict';

function Ghost(settings) {
    var isVisble = false;
    var ghostBody = settings.body;
    var leftEye = settings.leftEye;
    var rightEye = settings.rightEye;
    var messageToShow = settings.messageToShow;

    function handleMousePositionChanges(value) {
        if (isVisble) {
            var x = value.x;
            console.log(x);
        }
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
