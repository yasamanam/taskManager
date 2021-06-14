import React, { createContext, useState } from "react";

//Initial state
const initialState = {
  isDark: false,
};

// Create context
export const ThemeContext = createContext(initialState);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(initialState.isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
