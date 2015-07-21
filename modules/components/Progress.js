'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = [],
    misc = { indeterminate: 'mdl-progress__indeterminate' };

var Progress = React.createClass({

  displayName: 'MaterialProgress',

  mixins: [PureRenderMixin],

  propTypes: {
    progress: React.PropTypes.number,
    buffer: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      progress: 0,
      buffer: 100
    };
  },

  componentDidMount: function componentDidMount() {
    this.getDOMNode().addEventListener('mdl-componentupgraded', this.onUpgrade);
  },

  componentDidUpdate: function componentDidUpdate() {
    this.getDOMNode().addEventListener('mdl-componentupgraded', this.onUpgrade);
  },

  onUpgrade: function onUpgrade() {
    var el = this.getDOMNode();
    el.MaterialProgress.setProgress(this.props.progress);
    el.MaterialProgress.setBuffer(this.props.buffer);
  },

  render: function render() {
    return React.createElement('div', this.props);
  }

});

module.exports = mdlModifiable(mdlUpgradable(Progress), modifiers, misc);