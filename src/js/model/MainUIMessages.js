'use strict';
var utils = require('./../utils/Observable.utils');
var miscUtils = require('./../utils/Misc.utils');

function MainUIMessages() {
    var message = '';
    return {
        message: message
    };
}

function ObservableMainUIMessages(settings) {
    var ui = new utils.ObservableWrapper(new MainUIMessages());
    var lowRezButton = settings.lowRezButton;
    var highRezButton = settings.highRezButton;
    var goBackButton = settings.goBackButton;
    var messages = settings.messages;

    function update(value) {
        if (miscUtils.isUIMessage(value)) {
            console.log('mainUI');
            console.log(value);
        }
    }

    function init() {
        addBtnHandler(lowRezButton, ui, messages[0]);
        addBtnHandler(highRezButton, ui, messages[1]);
        addBtnHandler(goBackButton, ui, messages[2]);
    }

    return {
        run: init,
        update: update,
        addObserver: function (observer) {
            ui.addObserver(ui.observers, observer);
        }
    };
}

function addBtnHandler(btn, messagesObj, msgTxt) {
    if (btn || btn.addEventListener) {
        btn.addEventListener('click', function () {
            messagesObj.message = msgTxt;
        });
    }
}

module.exports = ObservableMainUIMessages;
