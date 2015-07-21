'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Menu = React.createClass({

  displayName: 'MaterialMenu',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      'ul',
      this.props,
      React.Children.map(this.props.children, function (child) {
        return child.type === 'li' ? mdlHelpers.updateChildWithClassName(['mdl-menu__item'], child) : child;
      })
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Menu), modifiers, misc);