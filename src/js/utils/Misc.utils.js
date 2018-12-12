'use strict';

function isUIMessage(value) {
    return (value && value.message);
}

function isMousePositionChange(value) {
    return (value && value.x && value.y);
}

module.exports = {
    isUIMessage: isUIMessage,
    isMousePositionChange: isMousePositionChange
};
