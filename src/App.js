import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/detail-page/:id" element={<DetailsPage />} />
          <Route exact path="/shop-page" element={<ShopPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/cart-page" element={<CartPage />} />
          <Route exact path="/order-page" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
