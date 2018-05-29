'use strict';

function MainUI(settings) {
    var lowRezButton = settings.lowRezButton;
    var highRezButton = settings.highRezButton;
    var goBackButton = settings.goBackButton;
    var message = '';

    function init() {
        addBtnHandler(lowRezButton, message, '8-bit resolution');
        addBtnHandler(highRezButton, message, 'hd resolution');
        addBtnHandler(goBackButton, message, 'go back');
    }

    function print() {
        init();
    }

    return {
        run: print,
        message: message
    };
}

function addBtnHandler(btn, msg, msgTxt) {
    if (btn || btn.addEventListener) {
        btn.addEventListener('click', function () {
            msg = msgTxt;
        });
    }
}

module.exports = MainUI;
