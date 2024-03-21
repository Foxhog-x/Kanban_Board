import { createTheme } from "@mui/material/styles";

export const whiteTheme = createTheme({
  palette: {
    mode: "light", // Set the base mode to light
    primary: {
      main: "#007bff", // Adjust colors for white theme
    },
    secondary: {
      main: "#ffc107",
    },
    background: {
      default: "#fff", // Light background
      paper: "#f5f5f5", // Lighter paper color
    },
    text: {
      primary: "#000", // Dark text for readability
      secondary: "#6c757d",
    },
  },
  typography: {
    // Customize typography as needed for white theme
  },
  // Other optional theme customizations (spacing, breakpoints, etc.)
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the base mode to dark
    primary: {
      main: "#3f51b5", // Adjust colors for dark theme
    },
    secondary: {
      main: "#f57c00",
    },
    background: {
      default: "#121212", // Dark background
      paper: "#212121", // Darker paper for components
    },
    text: {
      primary: "#fff", // Light text for readability
      secondary: "#ccc",
    },
  },
  typography: {
    // Customize typography as needed for dark theme
  },
  // Other optional theme customizations (spacing, breakpoints, etc.)
});
