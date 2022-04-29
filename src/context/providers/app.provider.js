import React, { createContext, useEffect, useContext, useMemo, useReducer } from 'react';
import {getStorageKey, saveStorageKey} from "../../utils/localStorage";
import appActionTypes from "../actions/app.actions";
import appReducer from  '../reducers/app.reducer';

const initialAppState = {
  cart: [],
  totalQty: 0,
  locale: 'az',
  user: {}
}

// const localAppState = getStorageKey('_APP_');

// const AppContext = createContext(localAppState || initialAppState);
const AppContext = createContext( initialAppState);

const AppProvider = ({ children }) => {
  // const [appState, dispatch] = useReducer(appReducer, localAppState || initialAppState);
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  // useEffect(() => {
  //   saveStorageKey('_APP_', appState);
  // }, [appState]);

  const value = useMemo(() => [appState, dispatch], [appState]);
  return (<AppContext.Provider value={value}>
    { children }
  </AppContext.Provider>);
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppContext ");
  }
  return context;
}

export { AppContext, AppProvider, useAppContext, appActionTypes };
