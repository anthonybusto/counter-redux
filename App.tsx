import React from "react";
import { createStore } from "redux";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import CounterApp from "./src/CounterApp";
import { Provider } from "react-redux";
import { CounterAction, BaseState} from './src/CounterApp'

const intitalState : BaseState = {
  counter: 0,
};

// const reducer = (state: BaseState = intitalState, action: CounterAction) => {
const reducer = (state: BaseState = intitalState, action: any) => {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return { counter: state.counter + 1 };
      case CounterAction.DECREMENT:
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
