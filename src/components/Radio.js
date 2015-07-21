var mdlToggleFactory = require('../utils/mdlToggleFactory');

var modifiers = [],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Radio = mdlToggleFactory('MaterialRadio', modifiers, misc, {
  input: 'mdl-radio__button',
  span: 'mdl-radio__label'
});

module.exports = Radio;
