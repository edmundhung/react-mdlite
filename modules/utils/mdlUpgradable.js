'use strict';

var React = require('react');
var mdlHandler = require('./mdlComponentHandler');

function mdlUpgradable(spec) {

  var mdlPrefix = 'mdl-',
      jsPrefix = 'js-',
      displayName = spec.displayName,
      componentName = displayName.replace('Material', '');

  var upgradeMdlComponent = function upgradeMdlComponent(node) {
    mdlHandler.upgradeElement(node, displayName);
  };

  var downgradeMdlComponent = function downgradeMdlComponent(node) {
    mdlHandler.downgradeElements(node, displayName);
  };

  return React.createClass({

    displayName: displayName,

    propTypes: { className: React.PropTypes.string },

    getDefaultProps: function getDefaultProps() {
      return { className: '' };
    },

    componentDidMount: function componentDidMount() {
      upgradeMdlComponent(this.getDOMNode());
    },

    componentWillUpdate: function componentWillUpdate() {
      downgradeMdlComponent(this.getDOMNode());
    },

    componentDidUpdate: function componentDidUpdate() {
      upgradeMdlComponent(this.getDOMNode());
    },

    componentWillUnmount: function componentWillUnmount() {
      downgradeMdlComponent(this.getDOMNode());
    },

    getUpgradedMDLClassList: function getUpgradedMDLClassList() {
      var cssClass = mdlPrefix + jsPrefix + componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
          baseClass = cssClass.replace(jsPrefix, '');

      return [baseClass, cssClass];
    },

    render: function render() {

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