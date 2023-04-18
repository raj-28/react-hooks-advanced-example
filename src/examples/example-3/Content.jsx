// file: Content.js

import React from 'react';
import { useThemeContext } from './themeContext'; // importing the custom hook to access the context

const Content = () => {
  const { theme } = useThemeContext(); // using the custom hook to access the context
  const contentClassName = `content ${theme}`;

  return (
    <div className={contentClassName}>
      <h2>Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Content;
