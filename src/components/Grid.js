var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Cell = require('./Cell');

var Grid = React.createClass({

  displayName: 'MaterialGrid',

  mixins: [ PureRenderMixin ],

  propTypes: { className: React.PropTypes.string },

  getDefaultProps: function() {
    return { className: '' };
  },

  getClassName: function() {
    var userDefinedClasses = this.props.className.split(' ');

    return ['mdl-grid']
      .concat(userDefinedClasses)
      .join(' ');
  },

  render: function() {
    return (
      <div {...this.props} className={this.getClassName()}>
      {
        React.Children.map(this.props.children, function(cell) {
          return React.createElement(Cell, cell.props, cell.props.children);
        })
      }
      </div>
    );

  }

});

module.exports = Grid;
