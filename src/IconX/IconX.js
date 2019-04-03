import React from "react";
import PropTypes from "prop-types";
import { Icon as IconM } from '@rmwc/icon';
import '@rmwc/icon/icon.css';

function Icon(props) {
  return (
      <IconM {...props} style={props.style} />
  );
}

Icon.propTypes = {
    icon: PropTypes.object,
    iconOptions: PropTypes.object,
    style: PropTypes.object,
    customProp: (props, propName, componentName) => {
      if (props[propsName] === 'some_invalid_value') {
        return new Error(`Invalid prop "${propName}" in "${componentName}".`);
      }
    },
};

export { Icon as default };
