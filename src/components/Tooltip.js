var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');
var mdlHelpers = require('../utils/mdlHelpers');

var modifiers = ['large'],
    misc = {};

var Tooltip = React.createClass({

  displayName: 'MaterialTooltip',

  mixins: [ PureRenderMixin ],

  getClassName: function() {
    var userDefinedClasses = this.props.className.split(' ');

    return userDefinedClasses
      .filter(mdlHelpers.withNoJsPrefix)
      .join(' ');
  },

  render: function() {
    return (
      <div {...this.props} className={this.getClassName()}>
        { this.props.children }
      </div>
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Tooltip), modifiers, misc);
