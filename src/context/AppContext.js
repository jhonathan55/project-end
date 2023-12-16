import React, { createContext, useReducer } from 'react';

const initialState = {
  // Estado global inicial
};

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    // Manejar acciones para actualizar el estado global
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;