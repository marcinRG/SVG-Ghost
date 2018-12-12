'use strict';
var MainUIMessages = require('./model/MainUIMessages');
var MousePosition = require('./model/MousePosition');
var Ghost = require('./model/Ghost');

var mousePosSetings = {
    element: document.querySelector('.ghost-section'),
    delta: 5
};

var messages = [
    '8-bit resolution',
    'hd resolution',
    'go back'
];

var mousePosition = new MousePosition(mousePosSetings);
mousePosition.run();

var mainUISettings = {
    lowRezButton: document.querySelector('.low-rez-btn'),
    highRezButton: document.querySelector('.high-rez-btn'),
    goBackButton: document.querySelector('.back-btn'),
    messages: messages
};

var mainUI = new MainUIMessages(mainUISettings);
mainUI.run();

var lowRezLeftEyeSettings = {
    minY: 220,
    maxY: 320,
    minX: 50,
    maxX: 130
};

var lowRezRightEyeSettings = {
    minY: 220,
    maxY: 320,
    minX: 300,
    maxX: 380
};

var lowRezEyes = {
    leftEye: lowRezLeftEyeSettings,
    rightEye: lowRezRightEyeSettings
};

var lowRezLeftEyeBallsSettings = {
    minY: 40,
    maxY: 80,
    minX: 0,
    maxX: 80
};

var ghost8bitSettings = {
    parentElement: document.querySelector('.ghost-section'),
    body: document.querySelector('.ghost-8bit'),
    leftEye: document.querySelector('.ghost-8bit .left-eye'),
    leftEyeBall: document.querySelector('.ghost-8bit .left-eye .ghost-eyeball-8b'),
    rightEye: document.querySelector('.ghost-8bit .right-eye'),
    rightEyeBall: document.querySelector('.ghost-8bit .right-eye .ghost-eyeball-8b'),
    eyesSettings: lowRezEyes,
    eyeBallsSettings: lowRezLeftEyeBallsSettings,
    messageToShow: messages[0]
};
var ghost8bit = new Ghost(ghost8bitSettings);
ghost8bit.run();

var ghostHDSettings = {
    parentElement: document.querySelector('.ghost-section'),
    body: document.querySelector('.ghost-hd'),
    leftEye: document.querySelector('.ghost-hd .left-eye'),
    rightEye: document.querySelector('.ghost-hd .right-eye'),
    messageToShow: messages[1]
};
var ghostHD = new Ghost(ghostHDSettings);
ghostHD.run();

mainUI.addObserver(ghost8bit);
mainUI.addObserver(ghostHD);
mousePosition.addObserver(ghost8bit);
mousePosition.addObserver(ghostHD);
