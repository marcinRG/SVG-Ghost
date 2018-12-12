'use strict';
var MainUIMessages = require('./model/MainUIMessages');
var MousePosition = require('./model/MousePosition');
var Ghost = require('./model/Ghost');
var settings = require('./settings/app.settings');

var mousePosition = new MousePosition(settings.mousePosition);
mousePosition.run();
var mainUI = new MainUIMessages(settings.mainUI);
mainUI.run();

var ghost8bit = new Ghost(settings.ghost8bit);
ghost8bit.run();

var ghostHD = new Ghost(settings.ghostHD);
ghostHD.run();

mainUI.addObserver(ghost8bit);
mainUI.addObserver(ghostHD);
mainUI.addObserver(mainUI);

mousePosition.addObserver(ghost8bit);
mousePosition.addObserver(ghostHD);
