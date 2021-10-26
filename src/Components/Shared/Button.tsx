import React from "react";
import styles from './Button.module.css';

type ButtonProps = {
    type: "flat"| "rounded";
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick, type, className}: ButtonProps) => {
    return (
        <button className={`${styles[type]} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button;