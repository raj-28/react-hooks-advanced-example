// file: Header.jsx

import React from 'react';
import { useThemeContext } from './themeContext';

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const headerStyle = {
    backgroundColor: theme === 'light' ? '#f2f2f2' : '#333',
    color: theme === 'light' ? '#333' : '#f2f2f2',
    padding: '2rem',
  };

  return (
    <header style={headerStyle}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
