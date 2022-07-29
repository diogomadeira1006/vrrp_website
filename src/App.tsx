// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@theme";
import Application from "@screens/application";
import LandingPage from "@screens/landingPage";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="*" element={<Application />} />
          {/* <Route path="/application" element={<Application />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
