var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');
var mdlModifiable = require('../utils/mdlModifiable');

var modifiers = [],
    misc = { indeterminate: 'mdl-progress__indeterminate' };

var Progress = React.createClass({

  displayName: 'MaterialProgress',

  mixins: [ PureRenderMixin ],

  propTypes: {
    progress: React.PropTypes.number,
    buffer: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      progress: 0,
      buffer: 100
    };
  },

  componentDidMount: function() {
    this.getDOMNode().addEventListener('mdl-componentupgraded', this.onUpgrade);
  },

  componentDidUpdate: function() {
    this.getDOMNode().addEventListener('mdl-componentupgraded', this.onUpgrade);
  },

  onUpgrade: function() {
    var el = this.getDOMNode();
    el.MaterialProgress.setProgress(this.props.progress);
    el.MaterialProgress.setBuffer(this.props.buffer);
  },

  render: function() {
    return (
      <div {...this.props}></div>
    );
  }

});

module.exports = mdlModifiable(mdlUpgradable(Progress), modifiers, misc);
