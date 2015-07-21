var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');

// REVIEW # Array.isArray(this.props.children) - False refer to text only

var modifiers = ['fab', 'mini-fab', 'icon', 'raised', 'colored', 'accent'],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Button = React.createClass({

  displayName: 'MaterialButton',

  mixins: [ PureRenderMixin ],

  propTypes: { 'wrapper': React.PropTypes.string },

  getDefaultProps: function() {
    return { 'wrapper': 'button' };
  },

  render: function() {
    return React.createElement(this.props.wrapper, this.props);
  }

});

module.exports = mdlModifiable(mdlUpgradable(Button), modifiers, misc);
