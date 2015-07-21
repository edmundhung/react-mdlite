'use strict';

var React = require('react');

var mdlHelpers = {

  withNoJsPrefix: function withNoJsPrefix(className) {
    return className.indexOf('js-') === -1;
  },

  updateChildWithClassName: function updateChildWithClassName(mdlClasses, child, grandChildren) {
    var classes = child.props.className ? child.props.className.split(' ') : [];

    return React.cloneElement(child, {
      className: classes.concat(mdlClasses).join(' '),
      children: typeof grandChildren === 'undefined' ? child.props.children : grandChildren
    });
  }

};

module.exports = mdlHelpers;