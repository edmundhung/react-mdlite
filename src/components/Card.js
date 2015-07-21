var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlShadow = require('../utils/mdlShadow');
var mdlHelpers = require('../utils/mdlHelpers');

var cardPrefix = 'mdl-card';
var containers = ['title', 'media', 'supporting-text', 'actions', 'menu', 'border'];

var Card = React.createClass({

  displayName: 'MaterialCard',

  mixins: [ PureRenderMixin ],

  getContainerClass(element) {
    return containers.filter(function (container) {
      return !!element.props[container];
    }).map(function (container) {
      return cardPrefix + (container === 'border' ? '--' : '__') + container;
    });
  },

  getClassName: function() {
    var userDefinedClasses = this.props.className.split(' ');

    return [cardPrefix]
      .concat(userDefinedClasses)
      .join(' ');
  },

  render: function() {
    return (
      <div {...this.props} className={this.getClassName()}>
      {
        React.Children.map(this.props.children, function(child) {
          return mdlHelpers.updateChildWithClassName(
            this.getContainerClass(child),
            child,
            React.Children.map(child.props.children, function(grandChild) {
              if (child.props.title) {
                var decorators = [];

                if (/^h[1-6]$/.test(grandChild.type)) {
                  decorators.push('title-text');
                } else {
                  decorators.push('subtitle-text');
                }

                return mdlHelpers.updateChildWithClassName(decorators.map(function(decorator) {
                  return cardPrefix + '__' + decorator;
                }), grandChild);
              } else {
                return grandChild;
              }
            })
          );

        }, this)
      }
      </div>
    );
  }

});

module.exports = mdlShadow(Card);
