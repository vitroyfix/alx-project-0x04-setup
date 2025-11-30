import React from 'react';

interface ButtonProps {
    buttonLabel: string;
    buttonBackgroundColor?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor = 'blue', onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-semibold py-2 px-4 rounded transition duration-300`}
        >
            {buttonLabel}
        </button>
    );
};

export default Button;
