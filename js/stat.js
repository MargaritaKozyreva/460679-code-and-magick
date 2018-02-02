'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var FONT_TEXT = '16px PT Mono';
  var COLOR_TEXT = 'black';
  var CLOUD_BG = 'white';
  var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_CHANGE_POSITION = 10;


  function renderRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function renderText(text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  renderRectangle(
      CLOUD_X + CLOUD_CHANGE_POSITION, CLOUD_Y + CLOUD_CHANGE_POSITION, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_SHADOW);

  renderRectangle(
      CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_BG);

  var getMaxElement = function (arr) {
    var maxElement = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var MAX_PERCENT = 100;
  var maxResult = 0;
  var isTopResult = false;

  maxResult = getMaxElement(times);
  var INITIAL_TEXT_NAME_Y = 265;
  for (var i = 0; i < names.length; i++) {
    var initialX = CLOUD_X + 35 + (i * 90);
    renderText(names[i], initialX, INITIAL_TEXT_NAME_Y, FONT_TEXT, COLOR_TEXT);


    var histPersLength = ((times[i] * MAX_PERCENT) / maxResult);
    var color;
    color = "rgba(0, 0, 255," + Math.random() + ")";
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
      if (times[i] === maxResult) {
        isTopResult = true;
      }
    }

    var histMaxLength = histPersLength * 1.5;
    renderRectangle(initialX, 240 - (histMaxLength), 40, histMaxLength, color);
    renderText(Math.round(times[i]), initialX, 230 - (histMaxLength), FONT_TEXT, color);
  }

  if (isTopResult) {
    renderText('Ура вы победили! У вас максимум!', 130, 40, FONT_TEXT, COLOR_TEXT);
  } else {
    renderText('Ура вы победили! Но максимум не ваш!', 130, 40, FONT_TEXT, COLOR_TEXT);
  }
  renderText('Список результатов:', 130, 55, FONT_TEXT, COLOR_TEXT);
};
