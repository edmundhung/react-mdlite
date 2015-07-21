'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = ['stretch', 'top', 'middle', 'bottom'],
    misc = {};

var Cell = React.createClass({

  displayName: 'MaterialGridCell',

  mixins: [PureRenderMixin],

  propTypes: {
    className: React.PropTypes.string,
    col: React.PropTypes.number,
    desktop: React.PropTypes.number,
    tablet: React.PropTypes.number,
    phone: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      col: 12,
      desktop: null,
      tablet: null,
      phone: null
    };
  },

  getClientModifiers: function getClientModifiers() {
    return ['desktop', 'tablet', 'phone'].filter(function (type) {
      return this.props[type] !== null;
    }, this).map(function (type) {
      var size = this.props[type],
          state = [];

      if (size > 0) {
        state.push(this.props[type], 'col');
      } else {
        state.push('hide');
      }

      return state.push(type).join('-');
    }, this);
  },

  getClassName: function getClassName() {
    var cellPrefix = 'mdl-cell',
        colClass = cellPrefix + '--' + [this.props.col, 'col'].join('-'),
        clientClasses = this.getClientModifiers().map(function (modifier) {
      return cellPrefix + '--' + modifier;
    }),
        userDefinedClasses = this.props.className.split(' ');

    return [cellPrefix, colClass].concat(clientClasses, userDefinedClasses).join(' ');
  },

  render: function render() {

    return React.createElement(
      'div',
      _extends({}, this.props, { className: this.getClassName() }),
      this.props.children
    );
  }

});

module.exports = mdlModifiable(Cell, modifiers, misc);