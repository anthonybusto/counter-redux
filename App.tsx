import React from "react";
import { createStore } from "redux";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import CounterApp from "./src/CounterApp";
import { Provider } from "react-redux";
// import {CounterAction} from "./src/CounterApp/CounterAction";
import { CounterAction, BaseState} from './src/CounterApp'

// import CounterAction.INCREMENT from "./src/CounterApp";

// const intitalState: BaseState = {
//   counter: 115,
// };

const intitalState : BaseState = {
  counter: 0,
};

// const reducer = (state = intitalState, action: CounterAction) => {
//   switch (action.type) {
//     case CounterAction.INCREMENT:
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//   }
//   return state;
// };

// const reducer = (state = intitalState, action: CounterAction) => {
//   switch (action) {
//     case CounterAction.INCREMENT:
//       return { counter: state.counter + 1 };
//       case CounterAction.DECREMENT:
//       return { counter: state.counter - 1 };
//   }
//   return state;
// };


// const reducer = (state: BaseState = intitalState, action: CounterAction) => {

  const reducer = (state: BaseState = intitalState, action: any) => {
  // if(action.type === CounterAction.INCREMENT){
  //   return { counter: state.counter + 1 };
  // } else  if(action.type === CounterAction.DECREMENT){
  //   return { counter: state.counter - 1 };
  // } else {
  //   return state;
  // }
  
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
