'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlShadow = require('../utils/mdlShadow');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['selectable'],
    misc = {};

var DataTable = React.createClass({

  displayName: 'MaterialDataTable',

  mixins: [PureRenderMixin],

  traverseChildren: function traverseChildren(element, callback, level) {
    return React.Children.map(element.props.children, function (child) {
      if (level > 1) {
        return React.cloneElement(child, { children: this.traverseChildren(child, callback, level - 1) });
      } else {
        return callback(child);
      }
    }, this);
  },

  render: function render() {

    return React.createElement(
      'table',
      this.props,
      this.traverseChildren(this, function (child) {

        return mdlHelpers.updateChildWithClassName([child.props['non-numeric'] ? 'mdl-data-table__cell--non-numeric' : ''], child);
      }, 3)
    );
  }

});

module.exports = mdlShadow(mdlModifiable(mdlUpgradable(DataTable), modifiers, misc));