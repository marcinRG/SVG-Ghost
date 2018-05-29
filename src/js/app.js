'use strict';
var MainUI = require('./model/MainUI');
var MousePosition = require('./model/MousePosition');
var Ghost = require('./model/Ghost');
var utils = require('./utils/Observable.utils');

var uiSettings = {
    lowRezButton: document.querySelector('.low-rez-btn'),
    highRezButton: document.querySelector('.high-rez-btn'),
    goBackButton: document.querySelector('.back-btn')
};

var ghost8bitSettings = {
    body: document.querySelector('.ghost-8bit'),
    leftEye: document.querySelector('.ghost-8bit .left-eye'),
    rightEye: document.querySelector('.ghost-8bit .right-eye')
};

var mousePosSetings = {
    element: document.querySelector('.ghost-section'),
    delta: 10
};

var ghost8bit = new Ghost(ghost8bitSettings);
ghost8bit.run();

// var mousePosition = new MousePosition(mousePosSetings);
// mousePosition.run();

var mainUI = new MainUI(uiSettings);
mainUI.run();

function ObservableMousePosition(settings) {
    this.mp = new utils.ObservableWrapper(new MousePosition(settings));
    this.intialize = function () {
        utils.extend(this, this.mp);
    };
    this.intialize();
}

var obMp = new ObservableMousePosition(mousePosSetings);

var observer = {
    update: function (value) {
        console.log('updated');
        console.log(value);
        console.log(value.x);
        console.log(value.y);
    }
};
obMp.addObserver(observer);
console.log(obMp);
