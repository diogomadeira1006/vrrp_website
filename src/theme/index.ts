// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck


import { red } from '@mui/material/colors';
import { alpha, createTheme, lighten, darken } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#474056',
      light: '#757083',
      lighter: '#D2D7DF',
    },
    secondary: {
      main: '#F56960',
    },
    white: {
      main: '#FDFDFD',
    },
    black: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Arial", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: "bolder",
      color: "#000",
      fontSize: "2rem",
      // '@media (min-width:600px)': {
      //   fontSize: '0.5rem',
      // },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "1.25rem",
      // },
      marginBottom: "12px",
    },
    h2: {
      fontWeight: "bold",
      color: "#000",
      fontSize: "1rem",
      // '@media (min-width:600px)': {
      //   fontSize: '0.5rem',
      // },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "1rem",
      // },
      // marginBottom: "12px",
    },
    h3: {
      fontWeight: "bold",
      color: "#000",
      fontSize: "1rem",
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "1rem",
      // },
    },
    h4: {
      fontWeight: "bold",
      color: "#000",
      fontSize: "1.1rem",
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "1.1rem",
      // },
    },
    caption: {
      color: "#000",
      fontSize: "0.9rem",
      fontWeight: "bold",
      // '@media (min-width:600px)': {
      //   fontSize: '0.5rem',
      // },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "0.9rem",
      // },
    },
  },
});

export default theme;
