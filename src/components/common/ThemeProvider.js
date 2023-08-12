import React from 'react';
import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const theme = useSelector(state => state.settings.theme);
  const mode = useSelector(state => state.settings.mode);

  return <div className={`${mode} theme-${theme}`}>{children}</div>;
}
