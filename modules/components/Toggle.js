'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Checkbox = require('./Checkbox');
var Radio = require('./Radio');
var IconToggle = require('./IconToggle');

var Toggle = React.createClass({

  displayName: 'MaterialToggle',

  mixins: [PureRenderMixin],

  render: function render() {

    var toggleType = null;

    React.Children.forEach(this.props.children, function (child) {

      if (child.type === 'input') {
        switch (child.props.type) {
          case 'checkbox':
            toggleType = Checkbox;
            break;
          case 'radio':
            toggleType = Radio;
            break;
        }
      } else if (child.type.displayName === 'MaterialIcon') {
        toggleType = IconToggle;
      }
    }, this);

    return React.createElement(toggleType, this.props, this.props.children);
  }

});

module.exports = Toggle;