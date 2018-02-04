'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardTotal = [];
var wizardTotalCoat = [];
var wizardTotalEyes = [];

function getTotal(randomWiz) {
  var rand = randomWiz[Math.floor(Math.random() * randomWiz.length)];
  return rand;
}

function find(array, value) {
  var res = false;
  for (var k = 0; k < array.length; k++) {
    if (array[k] === value) {
      res = true;
    }
  }
  return res;
}

for (var i = 0; wizardTotal.length < 4; i++) {
  var randomFirstName = getTotal(wizardFirstNames);
  var randomLastName = getTotal(wizardLastNames);
  var randomPerson = randomFirstName + ' ' + randomLastName;
  if (!find(wizardTotal, randomPerson)) {
    wizardTotal.push(randomPerson);
  }
  for (var j = 0; wizardTotalCoat.length < wizardTotal.length; j++) {
    var randomCoatColor = getTotal(wizardCoatColor);
    if (!find(wizardTotalCoat, randomCoatColor)) {
      wizardTotalCoat.push(randomCoatColor);
    }
  }
  for (var h = 0; wizardTotalEyes.length < wizardTotal.length; h++) {
    var randomEyesColor = getTotal(wizardEyesColor);
    if (!find(wizardTotalEyes, randomEyesColor)) {
      wizardTotalEyes.push(randomEyesColor);
    }
  }
}
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = [];

for (var z = 0; z < 4; z++) {
  var wizard =
    {
      name: wizardTotal[z],
      coatColor: wizardTotalCoat[z],
      eyesColor: wizardTotalEyes[z]
    };
  wizards.push(wizard);
}

for (var u = 0; u < wizards.length; u++) {
  fragment.appendChild(renderWizard(wizards[u]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
