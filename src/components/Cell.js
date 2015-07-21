var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = ['stretch', 'top', 'middle', 'bottom'],
    misc = {};

var Cell = React.createClass({

  displayName: 'MaterialGridCell',

  mixins: [ PureRenderMixin ],

  propTypes: {
    className: React.PropTypes.string,
    col: React.PropTypes.number,
    desktop: React.PropTypes.number,
    tablet: React.PropTypes.number,
    phone: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      className: '',
      col: 12,
      desktop: null,
      tablet: null,
      phone: null
    };
  },

  getClientModifiers: function() {
    return ['desktop', 'tablet', 'phone']
      .filter(function (type) {
        return this.props[type] !== null;
      }, this)
      .map(function (type) {
        var size = this.props[type], state = [];

        if (size > 0) {
          state.push(this.props[type], 'col');
        } else {
          state.push('hide');
        }

        return state.push(type).join('-');
      }, this);
  },

  getClassName: function() {
    var cellPrefix = 'mdl-cell',
        colClass = cellPrefix + '--' + [this.props.col, 'col'].join('-'),
        clientClasses = this.getClientModifiers().map(function (modifier) {
          return cellPrefix + '--' + modifier;
        }),
        userDefinedClasses = this.props.className.split(' ');

    return [cellPrefix, colClass]
      .concat(clientClasses, userDefinedClasses)
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

module.exports = mdlModifiable(Cell, modifiers, misc);
