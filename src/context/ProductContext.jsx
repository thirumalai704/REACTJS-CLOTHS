import { createContext, useContext, useReducer } from "react";

const UploadContext = createContext();
const initialState = {
  active: [],
  inactive: [],
  outOfStock: [],
  expenses: [],
  stocks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const { status, product } = action.payload;
      return {
        ...state,
        [status]: [...state[status], product],
      };
    }
    case "ADD_EXPENSE": {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case "ADD_STOCKS": {
      return {
        ...state,
        stocks: [...state.stocks, action.payload],
      };
    }
    case "EDIT_STOCKS": {
      const newStocks = [...state.stocks];
      newStocks[action.payload.index] = action.payload.data;
      return {
        ...state,
        stocks: newStocks,
      };
    }

    default:
      return state;
  }
}

export function UploadProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UploadContext.Provider value={{ state, dispatch }}>
      {children}
    </UploadContext.Provider>
  );
}

export const useUploadContext = () => useContext(UploadContext);
