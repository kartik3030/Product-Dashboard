import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProductListPage from "./pages/ProductListPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<ProductListPage />}
        />

        <Route
          path="/add-product"
          element={<AddProductPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;