import React from "react";
import { createStore } from "redux";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import CounterApp from "./src/CounterApp";
import { Provider } from "react-redux";

const intitalState = {
  counter: 0,
};

const reducer = (state = intitalState, action: any) => {
  switch (action) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;
