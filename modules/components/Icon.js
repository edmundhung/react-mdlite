'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Icon = React.createClass({

  displayName: 'MaterialIcon',

  mixins: [PureRenderMixin],

  propTypes: { className: React.PropTypes.string },

  getDefaultProps: function getDefaultProps() {
    return { className: '' };
  },

  getClassName: function getClassName() {
    var userDefinedClasses = this.props.className.split(' ');

    return ['icon', 'material-icons'].concat(userDefinedClasses).join(' ');
  },

  render: function render() {
    return React.createElement(
      'i',
      _extends({}, this.props, { className: this.getClassName() }),
      this.props.children
    );
  }

});

module.exports = Icon;