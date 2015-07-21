'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlShadow = require('../utils/mdlShadow');
var mdlHelpers = require('../utils/mdlHelpers');

var cardPrefix = 'mdl-card';
var containers = ['title', 'media', 'supporting-text', 'actions', 'menu', 'border'];

var Card = React.createClass({

  displayName: 'MaterialCard',

  mixins: [PureRenderMixin],

  getContainerClass: function getContainerClass(element) {
    return containers.filter(function (container) {
      return !!element.props[container];
    }).map(function (container) {
      return cardPrefix + (container === 'border' ? '--' : '__') + container;
    });
  },

  getClassName: function getClassName() {
    var userDefinedClasses = this.props.className.split(' ');

    return [cardPrefix].concat(userDefinedClasses).join(' ');
  },

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: this.getClassName() }),
      React.Children.map(this.props.children, function (child) {
        return mdlHelpers.updateChildWithClassName(this.getContainerClass(child), child, React.Children.map(child.props.children, function (grandChild) {
          if (child.props.title) {
            var decorators = [];

            if (/^h[1-6]$/.test(grandChild.type)) {
              decorators.push('title-text');
            } else {
              decorators.push('subtitle-text');
            }

            return mdlHelpers.updateChildWithClassName(decorators.map(function (decorator) {
              return cardPrefix + '__' + decorator;
            }), grandChild);
          } else {
            return grandChild;
          }
        }));
      }, this)
    );
  }

});

module.exports = mdlShadow(Card);