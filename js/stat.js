"use strict";

window.renderStatistics = function(ctx, names, times) {

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WEIGHT = 420;
var CLOUD_HEIGHT = 270;
var FONT_TEXT = "16px PT Mono";
var COLOR_TEXT = "black";
var CLOUD_BG = "white";
var CLOUD_SHADOW = "rgba(0, 0, 0, 0.7)";
var CLOUD_CHANGE = 10;

var maxPercent = 100;
var maxResult = 0;
var isTopResult = false;

function getCloud (color, position, x , y) {
 ctx.fillStyle = color;
 ctx.fillRect(x + position, y + position, CLOUD_WEIGHT, CLOUD_HEIGHT );
}

getCloud("rgba(0, 0, 0, 0.7)", CLOUD_CHANGE, CLOUD_X, CLOUD_Y);
getCloud(CLOUD_BG , 0 , CLOUD_X, CLOUD_Y);

var getMaxElement = function(arr) {
var maxElement = arr[0];

for (var i = 0; i < arr.length; i++) {
 if (arr[i] > maxElement) {
 maxElement = arr[i];
}
}
return maxElement;
};

maxResult = getMaxElement(times);
var histSpace = 0;
for (var i = 0; i < names.length; i++) {
 histSpace = CLOUD_X + 35 + (i * 90);
 ctx.fillStyle = COLOR_TEXT;
 ctx.font = FONT_TEXT;
 ctx.fillText(names[i], histSpace, 265);
 var histPersLength = ((times[i] * maxPercent) / maxResult);
 ctx.fillStyle = "rgba(0, 0, 255," + Math.random() + ")";
  if (names[i] === "Вы") {
   ctx.fillStyle = "rgba(255, 0, 0, 1)";

  if (times[i] === maxResult) {
   isTopResult = true;
}
}

var histMaxLength = histPersLength * 1.5;
ctx.fillRect(histSpace, 240 - (histMaxLength), 40, histMaxLength);
ctx.fillText(Math.round(times[i]), histSpace, 230 - (histMaxLength));
}

ctx.fillStyle = COLOR_TEXT;
ctx.font = FONT_TEXT;
if (isTopResult) {
 ctx.fillText("Ура вы победили! У вас максимум!", 130, 40);
 } else {
 ctx.fillText("Ура вы победили! Но максимум не ваш", 130, 40);
}
ctx.fillText("Список результатов:", 130, 55);
}
