import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <link href="/src/lib.css" rel="stylesheet" />
    <link href="/src/App.css" rel="stylesheet" />
    <App />
  </StrictMode>,
);
