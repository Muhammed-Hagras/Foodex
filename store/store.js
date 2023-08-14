import create from "zustand";

export const useStore = create((set) => ({
  //cart
  cart: {
    pizzas: [],
  },

  //add pizza function
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),
}));
