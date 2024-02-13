import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>

  /* </React.StrictMode> */
);
