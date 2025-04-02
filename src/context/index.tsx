import React, { createContext, useContext, useReducer, ReactNode, useState } from 'react';

interface State {
  // Define your state structure here
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  // Initialize your state here
};

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Define your reducer logic here
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const MyContext = createContext({});



interface MyContextProviderProps {

  children: ReactNode;

}



export const MyContextProvider = ({ children }: MyContextProviderProps) => {

  const [state, setState] = useState({});



  return (

    <MyContext.Provider value={{ state, setState }}>

      {children}

    </MyContext.Provider>

  );

};