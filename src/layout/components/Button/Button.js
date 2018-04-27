
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
   const { transparent, primary, disabled, children, style, onClick } = props;
   return (
      <button
         {...props}
         className={classnames('btn', { 'btn-transparent': transparent, 'btn-primary': primary, 'btn-disabled': disabled })}>
         {children}
      </button>
   );
}

Button.propTypes = {
   transparent: PropTypes.bool,
   primary: PropTypes.bool,
   disabled: PropTypes.bool,
   children: PropTypes.node
};

export default Button;