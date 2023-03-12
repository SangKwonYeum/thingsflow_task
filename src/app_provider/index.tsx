import React from 'react';
import { ThemeProvider } from '@emotion/react';
import IssueProvider from 'context/IssueProvider';
import { theme } from 'styles/theme';

interface Props {
  children: JSX.Element;
}

export default function AppProvider({ children }: Props): JSX.Element {
  return (
    <IssueProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IssueProvider>
  );
}
