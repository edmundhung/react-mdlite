'use strict';

var mdlToggleFactory = require('../utils/mdlToggleFactory');

var modifiers = [],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Checkbox = mdlToggleFactory('MaterialCheckbox', modifiers, misc, {
  input: 'mdl-checkbox__input',
  span: 'mdl-checkbox__label'
});

module.exports = Checkbox;