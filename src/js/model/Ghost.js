'use strict';

function Ghost(settings) {
    var body = settings.body;
    var leftEye = settings.leftEye;
    var rightEye = settings.rightEye;

    return {
        run: function () {
            console.log('ghost run');
        }
    };
}

module.exports = Ghost;
