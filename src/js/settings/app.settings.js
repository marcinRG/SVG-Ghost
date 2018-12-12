'use strict';
var messages = [
    '8-bit resolution',
    'hd resolution',
    'go back'
];

var mousePosSetings = {
    element: document.querySelector('.ghost-section'),
    delta: 2
};

var mainUISettings = {
    lowRezButton: document.querySelector('.low-rez-btn'),
    highRezButton: document.querySelector('.high-rez-btn'),
    goBackButton: document.querySelector('.back-btn'),
    messages: messages
};

var lowRezLeftEyeSettings = {
    minY: 220,
    maxY: 320,
    minX: 50,
    maxX: 130
};

var lowRezLeftEyeBallSettings = {
    minY: 260,
    maxY: 400,
    minX: 50,
    maxX: 210
};

var lowRezRightEyeBallSettings = {
    minY: 260,
    maxY: 400,
    minX: 300,
    maxX: 460
};

var lowRezRightEyeSettings = {
    minY: 220,
    maxY: 320,
    minX: 300,
    maxX: 380
};
var lowRezEyes = {
    leftEye: lowRezLeftEyeSettings,
    leftEyeball: lowRezLeftEyeBallSettings,
    rightEye: lowRezRightEyeSettings,
    rightEyeball: lowRezRightEyeBallSettings
};

var ghost8bitSettings = {
    parentElement: document.querySelector('.ghost-section'),
    body: document.querySelector('.ghost-8bit'),
    leftEye: document.querySelector('.ghost-8bit .left-eye'),
    leftEyeBall: document.querySelector('.ghost-8bit .left-eyeball'),
    rightEye: document.querySelector('.ghost-8bit .right-eye'),
    rightEyeBall: document.querySelector('.ghost-8bit .right-eyeball'),
    eyesSettings: lowRezEyes,
    fullScreenMove: true,
    messageToShow: messages[0]
};

var hiRezLeftEyeSettings = {
    minX: 95,
    maxX: 155,
    minY: 105,
    maxY: 190
};

var hiRezLeftEyeBallSettings = {
    minY: 150,
    maxY: 310,
    minX: 130,
    maxX: 230
};

var hiRezRightEyeSettings = {
    minX: 285,
    maxX: 345,
    minY: 105,
    maxY: 190
};

var hiRezRightEyeBallSettings = {
    minY: 150,
    maxY: 310,
    minX: 320,
    maxX: 420
};

var hiRezEyes = {
    leftEye: hiRezLeftEyeSettings,
    leftEyeball: hiRezLeftEyeBallSettings,
    rightEye: hiRezRightEyeSettings,
    rightEyeball: hiRezRightEyeBallSettings
};

var ghostHDSettings = {
    parentElement: document.querySelector('.ghost-section'),
    body: document.querySelector('.ghost-hd'),
    leftEye: document.querySelector('.ghost-hd .left-eye'),
    leftEyeBall: document.querySelector('.ghost-hd .left-eyeball'),
    rightEye: document.querySelector('.ghost-hd .right-eye'),
    rightEyeBall: document.querySelector('.ghost-hd .right-eyeball'),
    eyesSettings: hiRezEyes,
    fullScreenMove: false,
    messageToShow: messages[1]
};

module.exports = {
    messages: messages,
    mousePosition: mousePosSetings,
    ghost8bit: ghost8bitSettings,
    ghostHD: ghostHDSettings,
    mainUI: mainUISettings
};
