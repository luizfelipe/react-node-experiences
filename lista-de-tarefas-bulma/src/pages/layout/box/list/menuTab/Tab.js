import React from 'react';

const Tab = ({ text, quantity, className }) => {
    return (
        <li className={className} >
            <a>
                <span className="has-text-black" > 
                    {text}
                </span> &nbsp;
                <span className="tag is-dark is-rounded is-small">
                    {quantity}
                </span>
            </a>
        </li>
    );
};

export default Tab;