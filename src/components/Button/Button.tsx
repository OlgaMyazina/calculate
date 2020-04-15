import React from 'react';
import './Button.css';

export interface ButtonProps {
    title?: string;
    className?: string;
}

export const Button = ({title}: ButtonProps) => {
    return (
        <div className="button-wrapper">
            <input type="button" value={title} className="button"/>
        </div>
    )

}