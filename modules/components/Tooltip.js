'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['large'],
    misc = {};

var Tooltip = React.createClass({

  displayName: 'MaterialTooltip',

  mixins: [PureRenderMixin],

  getClassName: function getClassName() {
    var userDefinedClasses = this.props.className.split(' ');

    return userDefinedClasses.filter(mdlHelpers.withNoJsPrefix).join(' ');
  },

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: this.getClassName() }),
      this.props.children
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Tooltip), modifiers, misc);