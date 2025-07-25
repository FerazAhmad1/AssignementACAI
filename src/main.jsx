import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ItemProvider from "./context/ItemProvider.jsx";
import OwnerProvider from "./context/OwnerProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ItemProvider>
        <OwnerProvider>
          <App />
        </OwnerProvider>
      </ItemProvider>
    </StrictMode>
  </BrowserRouter>
);
