import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { connect } from "react-redux";

class CounterApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.increase(1)}
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            backgroundColor: "blue",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontSize: 30 }}>{this.props.counter}</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => this.props.decrement(1)}
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            backgroundColor: "blue",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

function mapStateToProps(state){
    return {
        counter: state.counter,
      };
}


// function mapDispatchToProps(dispatch: (arg0: { type: string; }) => void){
//     return {
//         increment: (counter: number) => {
//           dispatch({type: 'INCREMENT'});
//         },
     
//         decrement: (counter: number) => {
//           dispatch({type: 'DECREMENT'});
//         },
//       };
// }


function mapDispatchToProps(dispatch){
    return {
        increment: (counter: number) => {
          dispatch({type: 'INCREMENT'});
        },
     
        decrement: (counter: number) => {
          dispatch({type: 'DECREMENT'});
        },
      };
}


// const mapStateToProps  = (state: any) => {
//     return {
//         counter: state.counter,
//       };
// }


// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         increment: (counter: number) => {
//           dispatch({type: 'INCREMENT'});
//         },
     
//         decrement: (counter: number) => {
//           dispatch({type: 'DECREMENT'});
//         },
//       };
// }

   
  export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
