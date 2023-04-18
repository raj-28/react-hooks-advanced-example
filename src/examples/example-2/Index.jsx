import React, { createContext, useContext, useReducer } from 'react';




// define the initial state
const initialState = {
  count: 0,
  name: '',
  email: '',
};


// define the reducer function to update the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

// create the context object
const MyContext = createContext(null);

// define a custom hook to access the context
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: 'setName', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'setEmail', payload: e.target.value });
  };

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <MyContext.Provider value={{ state, handleNameChange, handleEmailChange, handleIncrement, handleDecrement }}>
      {children}
    </MyContext.Provider>
  );
};

const Counter = () => {
  const { state, handleIncrement, handleDecrement } = useMyContext();
  const { count } = state;

  return (
    <div className="counter" >
      <h2>Counter</h2>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

const Form = () => {
  const { state, handleNameChange, handleEmailChange } = useMyContext();
  const { name, email } = state;

  return (
    <div className="form">
      <h2>Form</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
    </div>
  );
};


const Index = () => {
  
  return (
    <MyContextProvider>
      <div>
        <Counter />
        <Form />
      </div>
    </MyContextProvider>
  );
};

export default Index;
