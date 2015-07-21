var React = require('react');
var mdlUpgradable = require('./mdlUpgradable');
var mdlModifiable = require('./mdlModifiable');
var mdlHelpers = require('./mdlHelpers');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var mdlToggleFactory = function (displayName, modifiers, misc, tagClasses) {

  var ToggleComponent = React.createClass({

    displayName: displayName,

    mixins: [ PureRenderMixin ],

    upgradeComponent(child) {
      var tag = child.type.displayName || child.type;
      return tagClasses[tag] ? mdlHelpers.updateChildWithClassName(tagClasses[tag], child) : child;
    },

    render: function() {
      return (
        <label {...this.props}>
          { React.Children.map(this.props.children, this.upgradeComponent) }
        </label>
      );
    }

  });

  return mdlModifiable(mdlUpgradable(ToggleComponent), modifiers, misc);

};

module.exports = mdlToggleFactory;
