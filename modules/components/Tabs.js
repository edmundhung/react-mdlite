'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

// REVIEW # Array.isArray(this.props.children) - False refer to text only

var modifiers = [],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

//, 'active': 'is-active'
var Tabs = React.createClass({

  displayName: 'MaterialTabs',

  mixins: [PureRenderMixin],

  render: function render() {

    var tabsCount = 0;

    return React.createElement(
      'div',
      this.props,
      React.Children.map(this.props.children, function (child) {

        if (tabsCount === 0) {
          tabsCount = React.Children.count(child.props.children);

          var grandChildren = React.Children.map(child.props.children, function (grandChild) {
            return mdlHelpers.updateChildWithClassName(['mdl-tabs__tab', grandChild.props.active ? 'is-active' : ''], grandChild);
          });

          return mdlHelpers.updateChildWithClassName(['mdl-tabs__tab-bar'], child, grandChildren);
        } else {
          return mdlHelpers.updateChildWithClassName(['mdl-tabs__panel', child.props.active ? 'is-active' : ''], child);
        }
      })
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Tabs), modifiers, misc);