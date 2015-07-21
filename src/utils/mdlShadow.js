var React = require('react');

function supportMdlShadow(spec) {

  var shadowPrefix = 'mdl-shadow';

  return React.createClass({

    displayName: spec.displayName,

    propTypes: {
      className: React.PropTypes.string,
      shadow: React.PropTypes.string
    },

    getDefaultProps: function() {
      return {
        className: '',
        shadow: null
      };
    },

    getShadowClassName: function() {
      var shadow = this.props.shadow;
      if (shadow >= 1 && shadow <= 6) {
        var depth = 2;

        switch (shadow) {
          case '1': depth = 2; break;
          case '2': depth = 3; break;
          case '3': depth = 4; break;
          case '4': depth = 6; break;
          case '5': depth = 8; break;
          case '6': depth = 16; break;
        }

        return shadowPrefix + '--' + depth + 'dp';
      } else if (shadow && shadow.replace('dp', '') > 0){
        return shadowPrefix + '--' + shadow;
      } else {
        return '';
      }
    },

    render: function() {
      var element = React.createElement(spec, this.props),
          classList = this.props.className.split(' '),
          shadowClass = this.getShadowClassName();

      return React.cloneElement(element, {
        className: [shadowClass].concat(classList).join(' ')
      });
    }

  });

}

module.exports = supportMdlShadow;
