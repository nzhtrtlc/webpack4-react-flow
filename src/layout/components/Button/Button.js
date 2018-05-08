import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';
import { getUserProps } from 'Helper/helperFunctions';

const Button = (props) => {
    const { transparent, primary, disabled, children } = props;

    const classNameList = [
        'btn',
        props.className,
        {
            'btn-primary': primary,
            'btn-transparent': transparent,
            'btn-disabled': disabled
        }
    ];

    const userProps = getUserProps(props)(...Object.keys(Button.propTypes), 'className');

    return (
        <button
            {...userProps}
            className={cn(...classNameList)}>
            {children}
        </button>
    );
}

Button.propTypes = {
    transparent: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Button;