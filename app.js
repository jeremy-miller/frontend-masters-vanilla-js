"use strict";

import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// link Web Components
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import CartItem from "./components/CartItem.js";
import ProductItem from "./components/ProductItem.js";

window.app = {
    store: Store,
    router: Router,
};

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});

window.addEventListener("appcartchange", (event) => {
    const badge = document.getElementById("badge");
    const quantity = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = quantity;
    badge.hidden = quantity === 0;
});
