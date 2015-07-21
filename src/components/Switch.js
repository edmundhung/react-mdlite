var mdlToggleFactory = require('../utils/mdlToggleFactory');

var modifiers = [],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Switch = mdlToggleFactory('MaterialSwitch', modifiers, misc, {
  input: 'mdl-switch__input',
  span: 'mdl-switch__label'
});

module.exports = Switch;
