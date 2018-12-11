'use strict';

function Ghost(settings) {
    var isVisble = false;
    var parentElement = settings.parentElement;
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
        getElementRect();
        window.addEventListener('resize', function () {
            getElementRect();
        });
    }

    function getElementRect() {
        var rect = parentElement.getBoundingClientRect();
        console.log('left:' + rect.left);
        console.log('width:' + rect.width);
        console.log('height:' + rect.height);
        console.log(rect.bottom);
        console.log(rect.right);
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
