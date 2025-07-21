import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  products: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };

    case "EDIT_PRODUCT": {
      const updatedProducts = [...state.products];
      updatedProducts[action.payload.index] = action.payload.updatedProduct;
      return { ...state, products: updatedProducts };
    }

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
