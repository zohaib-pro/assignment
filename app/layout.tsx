'use client';
import { BorderColor } from '@mui/icons-material';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', 
      },
      secondary: {
        main: '#9c27b0', 
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: '#7B5AFF',
            borderRadius: '9999px', 
            textTransform: 'none',
            color: 'white',
            '&:hover': {
              backgroundColor: '#40a9ff',
            },
          },
          outlined: {
            border: '1px solid grey',
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              color: '#40a9ff', // Set text color on hover
              borderColor: '#40a9ff',
              backgroundColor: 'white',
            },
          },
        },
      },
    },
    // typography: {
    //   fontFamily: 'Roboto, sans-serif',
    //   h1: {
    //     fontSize: '2.5rem',
    //     fontWeight: 700,
    //   },
    // },
  });

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Normalize styles across browsers */}
          {children} {/* Render the content of the page */}
        </ThemeProvider>
      </body>
    </html>
  );
}
