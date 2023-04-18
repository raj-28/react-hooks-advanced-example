// file: themeContext.js

import React, { createContext, useState } from 'react';

// create a context object with an initial value
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// define a custom hook to access the context
export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

// define a provider component to wrap the app components
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // define a function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  // define the context value
  const contextValue = {
    theme,
    toggleTheme,
  };

  // return the provider with the context value and the app components
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
