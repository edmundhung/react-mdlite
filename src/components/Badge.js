var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = ['no-background'],
    misc = { 'icon': 'material-icons' };

var Badge = React.createClass({

  displayName: 'MaterialBadge',

  mixins: [ PureRenderMixin ],

  getClassName: function() {
    var userDefinedClasses = this.props.className.split(' ');

    return ['mdl-badge']
      .concat(userDefinedClasses)
      .join(' ');
  },

  render: function() {
    return (
      <span {...this.props} className={this.getClassName()}>
        { this.props.children }
      </span>
    );
  }

});

module.exports = mdlModifiable(Badge, modifiers, misc);
