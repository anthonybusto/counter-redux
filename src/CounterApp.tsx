import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { connect, ConnectedProps} from "react-redux";
import { ThunkAction } from 'redux-thunk'



interface BaseState {
    counter: Number
  }

  export enum CounterAction {
      INCREMENT, DECREMENT
  }


const mapStateToProps  = (state: BaseState) => {
    return {
        counter: state.counter,
      };
}

  const mapDispatchToProps = {
    // increment: (value: Number) => ({ type: CounterAction.INCREMENT }),
    // decrement: (value: Number) => ({ type: CounterAction.DECREMENT })

    increment: (value: Number) => ({ type: CounterAction.INCREMENT }),
    decrement: (value: Number) => ({ type: CounterAction.DECREMENT })
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
          <Text style={{ fontSize: 30, color: "white" }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
          }}>
          <Text style={{ fontSize: 30 }}>{this.props.counter}</Text>
          
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
          <Text style={{ fontSize: 30, color: "white" }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}




export default connector(CounterApp);




// function mapStateToProps(state: BaseState){
//     return {
//         counter: state.counter,
//       };
// }


// function mapDispatchToProps(dispatch: String){
//     return {
//         increment: (counter: number) => {
//           dispatch({type: 'INCREMENT'});
//         },
     
//         decrement: (counter: number) => {
//           dispatch({type: 'DECREMENT'});
//         },
//       };
// }


// const mapDispatchToProps = {
//     increment: (value: Number) => ({ type: 'INCREMENT' }),
//     decrement: (value: Number) => ({ type: 'DECREMENT' })
//   }


//   const MyComponent = (props: Props) => (
//     <div style={{ backgroundColor: props.backgroundColor }}>
//       <button onClick={props.toggleOn}>
//         Toggle is {props.isOn ? 'ON' : 'OFF'}
//       </button>
//     </div>
//   )

// function mapDispatchToProps(){
//     return{
//         increment: (value: Number) => ({ type: 'INCREMENT' }),
//         decrement: (value: Number) => ({ type: 'DECREMENT' })
//     }
//   }
  



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

   
// const connector = connect(mapStateToProps, mapDispatchToProps)
// export default connector(CounterApp);

//   export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
