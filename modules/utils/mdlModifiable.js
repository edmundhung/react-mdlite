'use strict';

var React = require('react');

var mdlModifiable = function mdlModifiable(spec, modifiers, misc) {

  var mdlPrefix = 'mdl-',
      displayName = spec.displayName,
      propTypes = { className: React.PropTypes.string },
      defaultProps = { className: '' };

  Object.keys(misc).concat(modifiers).forEach(function (key) {
    propTypes[key] = React.PropTypes.bool;
    defaultProps[key] = false;
  });

  return React.createClass({

    displayName: displayName,

    propTypes: propTypes,

    getDefaultProps: function getDefaultProps() {
      return defaultProps;
    },

    getModifierClassList: function getModifierClassList() {
      var componentName = displayName.replace('Material', ''),
          baseClass = mdlPrefix + componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

      return Object.keys(misc).concat(modifiers).filter(function (modifier) {
        return !!this.props[modifier];
      }, this).map(function (key) {
        return misc[key] ? misc[key] : baseClass + '--' + key;
      });
    },

    render: function render() {
      var element = React.createElement(spec, this.props),
          classList = this.props.className.split(' '),
          modifierClassList = this.getModifierClassList();

      return React.cloneElement(element, {
        className: modifierClassList.concat(classList).join(' ')
      });
    }

  });
};

module.exports = mdlModifiable;