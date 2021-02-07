import React from 'react';

import './Button.scss';

const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick}
            className="app-btn"
        >
            {children}
        </button> 
    )
}

export default Button;