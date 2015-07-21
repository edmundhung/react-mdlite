'use strict';

var React = require('react');
var mdlUpgradable = require('./mdlUpgradable');
var mdlModifiable = require('./mdlModifiable');
var mdlHelpers = require('./mdlHelpers');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var mdlToggleFactory = function mdlToggleFactory(displayName, modifiers, misc, tagClasses) {

  var ToggleComponent = React.createClass({

    displayName: displayName,

    mixins: [PureRenderMixin],

    upgradeComponent: function upgradeComponent(child) {
      var tag = child.type.displayName || child.type;
      return tagClasses[tag] ? mdlHelpers.updateChildWithClassName(tagClasses[tag], child) : child;
    },

    render: function render() {
      return React.createElement(
        'label',
        this.props,
        React.Children.map(this.props.children, this.upgradeComponent)
      );
    }

  });

  return mdlModifiable(mdlUpgradable(ToggleComponent), modifiers, misc);
};

module.exports = mdlToggleFactory;