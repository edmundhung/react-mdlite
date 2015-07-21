var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Icon = React.createClass({

  displayName: 'MaterialIcon',

  mixins: [ PureRenderMixin ],

  propTypes: { className: React.PropTypes.string },

  getDefaultProps: function() {
    return { className: '' };
  },

  getClassName: function() {
    var userDefinedClasses = this.props.className.split(' ');

    return ['icon', 'material-icons']
      .concat(userDefinedClasses)
      .join(' ');
  },

  render: function() {
    return (
      <i {...this.props} className={this.getClassName()}>
        { this.props.children }
      </i>
    );
  }

});

module.exports = Icon;
