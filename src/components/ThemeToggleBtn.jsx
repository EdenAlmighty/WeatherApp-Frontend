import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="container">
            <label className="toggle_label">
                <input
                    type="checkbox"
                    id="mode"
                    className="toggle"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <span className="slider">
                    <img src='/moon.svg' alt='Moon icon' className="moon" aria-label="Moon icon"></img>
                    <img src='/sun.svg' alt='Sun icon' className="sun" aria-label="Sun icon"></img>
                </span>
            </label>
        </div>
    );
};

export default ThemeToggleButton;
