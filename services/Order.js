"use strict";

import { getProductById } from "./Menu.js";

export async function addToCart(id) {
    const product = await getProductById(id);
    const results = app.store.cart.filter((productInCart) => productInCart.product.id == id);
    if (results.length == 1) {
        app.store.cart = app.store.cart.map((p) => (p.product.id == id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }];
    }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter((p) => p.product.id !== id);
}
