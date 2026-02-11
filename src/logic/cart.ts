import type { Product } from "../types/product";

export type CartItem = Product & {
  quantity: number;
};

export const addToCartLogic = (
  cart: CartItem[],
  product: Product
): CartItem[] => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const removeFromCart = (
  cart: CartItem[],
  id: string
): CartItem[] => {
  return cart.filter((item) => item.id !== id);
};

export const updateQuantity = (
  cart: CartItem[],
  id: string,
  quantity: number
): CartItem[] => {
  return cart.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
};