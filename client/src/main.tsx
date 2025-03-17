import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AddEditForm from "./components/AddEditForm/AddEditForm.tsx";
import Layout from "./components/Layout/Layout.tsx";
import TableList from "./components/TableList/TableList.tsx";

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
        <Route
          path="/product-form/:productId"
          element={
            <Layout>
              <AddEditForm />
            </Layout>
          }
        />
        <Route
          path="/product-management"
          element={
            <Layout>
              <TableList />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
