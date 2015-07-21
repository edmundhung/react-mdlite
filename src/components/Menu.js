var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    misc = { 'ripple': 'mdl-js-ripple-effect' };

var Menu = React.createClass({

  displayName: 'MaterialMenu',

  mixins: [ PureRenderMixin ],

  render: function() {
    return (
      <ul {...this.props}>
      {
        React.Children.map(this.props.children, function(child) {
          return child.type === 'li' ? mdlHelpers.updateChildWithClassName(['mdl-menu__item'], child) : child;
        })
      }
      </ul>
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Menu), modifiers, misc);
