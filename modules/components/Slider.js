'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');

var Slider = React.createClass({

  displayName: 'MaterialSlider',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement('input', _extends({}, this.props, { type: 'range' }));
  }

});

module.exports = mdlUpgradable(Slider);