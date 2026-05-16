// Theme configuration for Bhakti Kunj landing page
export const theme = {
  colors: {
    // Primary colors
    primary: {
      gold: '#D4AF37',
      darkGold: '#B8860B',
      lightGold: '#FFD700',
    },
    // Background colors
    background: {
      dark: '#0F1419',
      darkSecondary: '#1A1F26',
      light: '#FFFFFF',
      lightSecondary: '#F5F5F5',
    },
    // Text colors
    text: {
      light: '#FFFFFF',
      lightSecondary: '#E0E0E0',
      dark: '#0F1419',
      darkSecondary: '#666666',
    },
    // Accent colors
    accent: {
      green: '#4CAF50',
      teal: '#17A2B8',
      gray: '#2A2E37',
    },
  },
  typography: {
    // Heading sizes
    heading: {
      h1: {
        size: '3.5rem',
        weight: 400,
        lineHeight: '1.2',
      },
      h2: {
        size: '2.5rem',
        weight: 400,
        lineHeight: '1.3',
      },
      h3: {
        size: '1.875rem',
        weight: 600,
        lineHeight: '1.4',
      },
      h4: {
        size: '1.25rem',
        weight: 600,
        lineHeight: '1.5',
      },
    },
    // Body sizes
    body: {
      large: {
        size: '1.125rem',
        weight: 400,
        lineHeight: '1.6',
      },
      base: {
        size: '1rem',
        weight: 400,
        lineHeight: '1.6',
      },
      small: {
        size: '0.875rem',
        weight: 400,
        lineHeight: '1.5',
      },
    },
    // Button sizes
    button: {
      large: {
        size: '1rem',
        weight: 600,
      },
      base: {
        size: '0.9375rem',
        weight: 600,
      },
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
    xxxl: '6rem',
  },
};

export type Theme = typeof theme;
