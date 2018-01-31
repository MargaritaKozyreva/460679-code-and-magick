// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');

var names_firstname = ["Иван" , "Хуан" , "Себастьян" , "Мария" , "Кристоф" , "Виктор" , "Юлия" , "Люпита" , "Вашингтон"];
var names_lastname = ["да Марья " , "Верон" , "Мирабелла" , "Вальц" , "Онопко" , "Топольницкая" , "Нионго" , "Ирвинг"];
var color_coat = ["rgb(101, 137, 164)" , "rgb(241, 43, 107)" , "rgb(146, 100, 161)" , "rgb(56, 159, 117)" , "rgb(215, 210, 55)" , "rgb(0, 0, 0)"];
var color_eyes = ["black" , "red" , "blue" , "yellow" , "green"];



wizards = [
{

  name: names_firstname[0],
  coatColor: color_coat[0],
  eyesColor: color_eyes[0]

}
]
userDialog.querySelector('.setup-similar').classList.remove('hidden');
for (var i = 0; i < wizards.length ; i++) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);
  similarListElement.appendChild(wizards[i]);
}
