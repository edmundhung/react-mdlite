var mdlToggleFactory = require('../utils/mdlToggleFactory');

var modifiers = [],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var IconToggle = mdlToggleFactory('MaterialIconToggle', modifiers, misc, {
  input: 'mdl-icon-toggle__input',
  MaterialIcon: 'mdl-icon-toggle__label'
});

module.exports = IconToggle;
