'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = ['single-color'],
    misc = { 'active': 'is-active' };

var Progress = React.createClass({

  displayName: 'MaterialSpinner',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement('div', this.props);
  }

});

module.exports = mdlModifiable(mdlUpgradable(Progress), modifiers, misc);