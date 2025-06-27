import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import HomePage from "./components/HomePage.jsx";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  function handleShowHome() {
    setPage("home");
  }

  function handleShowOrder() {
    setPage("order");
  }

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header onShowHome={handleShowHome} onShowOrder={handleShowOrder} />
        {page === "home" && <HomePage />}
        {page === "order" && <Meals />}
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
