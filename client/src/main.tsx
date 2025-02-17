import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AddEditForm from "./components/AddEditForm/AddEditForm.tsx";
import Layout from "./components/Layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/product-form"
          element={
            <Layout>
              <AddEditForm />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
