var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['floating-label', 'expandable'],
    misc = {};

var Textfield = React.createClass({

  displayName: 'MaterialTextfield',

  mixins: [ PureRenderMixin ],

  upgradeComponent(child) {

    switch (child.type) {
      case 'input':
      case 'textarea':
        return mdlHelpers.updateChildWithClassName(['mdl-textfield__input'], child);
      case 'label':
        return mdlHelpers.updateChildWithClassName(['mdl-textfield__label'], child);
      case 'span':
        return mdlHelpers.updateChildWithClassName(['mdl-textfield__error'], child);
      default:
        return child;
    }

  },

  render: function() {
    return (
      <div {...this.props}>
      {
        React.Children.map(this.props.children, function(child) {

          if (this.props.expandable) {

            if (child.type === 'div') {

              var grandChildren = React.Children.map(child.props.children, function(grandChild) {
                return this.upgradeComponent(grandChild);
              }, this);

              return mdlHelpers.updateChildWithClassName(['mdl-textfield__expandable-holder'], child, grandChildren);
            } else {
              return child;
            }

          }

          return this.upgradeComponent(child);
        }, this)
      }
      </div>
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Textfield), modifiers, misc);
