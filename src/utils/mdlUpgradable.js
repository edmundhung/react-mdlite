var React = require('react');
var mdlHandler = require('./mdlComponentHandler');

function mdlUpgradable(spec) {

  var mdlPrefix = 'mdl-',
      jsPrefix = 'js-',
      displayName = spec.displayName,
      componentName = displayName.replace('Material', '');

  var upgradeMdlComponent = function (node) {
    mdlHandler.upgradeElement(node, displayName);
  };

  var downgradeMdlComponent = function(node) {
    mdlHandler.downgradeElements(node, displayName);
  };

  return React.createClass({

    displayName: displayName,

    propTypes: { className: React.PropTypes.string },

    getDefaultProps: function() {
      return { className: '' };
    },

    componentDidMount: function() {
      upgradeMdlComponent(this.getDOMNode());
    },

    componentWillUpdate: function() {
      downgradeMdlComponent(this.getDOMNode());
    },

    componentDidUpdate: function() {
      upgradeMdlComponent(this.getDOMNode());
    },

    componentWillUnmount: function() {
      downgradeMdlComponent(this.getDOMNode());
    },

    getUpgradedMDLClassList: function() {
      var cssClass = mdlPrefix + jsPrefix + componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
          baseClass = cssClass.replace(jsPrefix, '');

      return [baseClass, cssClass];
    },

    render: function() {

      var classList = this.props.className.split(' '),
          mdlClassList = this.getUpgradedMDLClassList();

      this.element = React.createElement(spec, this.props);

      return React.cloneElement(this.element, {
        className: mdlClassList.concat(classList).join(' ')
      });
    }

  });

}

module.exports = mdlUpgradable;
