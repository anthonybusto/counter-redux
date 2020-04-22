import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { connect, ConnectedProps} from "react-redux";
import { ThunkAction } from 'redux-thunk'

export interface BaseState {
    counter: number
}

export enum CounterAction {INCREMENT, DECREMENT}

const mapStateToProps  = (state: BaseState) => {
    return {
        counter: state.counter,
      };
}

  const mapDispatchToProps = {
    increment: (value: number) => ({ type: CounterAction.INCREMENT }),
    decrement: (value: number) => ({ type: CounterAction.DECREMENT })
  }
  
const connector = connect(mapStateToProps, mapDispatchToProps)

class CounterApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.increment(1)}}
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            backgroundColor: "blue",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 40, color: "white" }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
          }}>
          <Text style={{ fontSize: 125 }}>{this.props.counter}</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => {this.props.decrement(1)}}
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            backgroundColor: "blue",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 40, color: "white" }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connector(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});