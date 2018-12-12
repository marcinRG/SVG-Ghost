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
    var menuPanel = settings.menuPanel;
    var ghostsPanel = settings.ghostsPanel;

    function update(value) {
        if (miscUtils.isUIMessage(value)) {
            if (value.message === messages[2]) {
                changeVisibility(ghostsPanel, false);
                changeVisibility(menuPanel, true);
            } else {
                changeVisibility(ghostsPanel, true);
                changeVisibility(menuPanel, false);
            }
        }
    }

    function init() {
        addBtnHandler(lowRezButton, ui, messages[0]);
        addBtnHandler(highRezButton, ui, messages[1]);
        addBtnHandler(goBackButton, ui, messages[2]);
        changeVisibility(menuPanel, true);
        changeVisibility(ghostsPanel, false);
    }

    return {
        run: init,
        update: update,
        addObserver: function (observer) {
            ui.addObserver(ui.observers, observer);
        }
    };
}

function changeVisibility(element, visible) {
    if (visible) {
        element.style.visibility = 'visible';
    }
    else {
        element.style.visibility = 'hidden';
    }
}

function addBtnHandler(btn, messagesObj, msgTxt) {
    if (btn || btn.addEventListener) {
        btn.addEventListener('click', function () {
            messagesObj.message = msgTxt;
        });
    }
}

module.exports = ObservableMainUIMessages;
