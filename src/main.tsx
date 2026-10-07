import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { localeFromNavigator } from "@/i18n/routing";
import { HomePage } from "./HomePage";
import { LocaleLayout } from "./LocaleLayout";
import { ProductPage } from "./ProductPage";
import "lenis/dist/lenis.css";
import "./index.css";

function RootRedirect() {
  return <Navigate to={`/${localeFromNavigator()}`} replace />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:locale" element={<LocaleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:slug" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
