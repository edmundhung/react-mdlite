var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var mdlUpgradable = require('../utils/mdlUpgradable');

var Slider = React.createClass({

  displayName: 'MaterialSlider',

  mixins: [ PureRenderMixin ],

  render: function() {
    return (
      <input {...this.props} type="range" />
    );
  }

});

module.exports = mdlUpgradable(Slider);
