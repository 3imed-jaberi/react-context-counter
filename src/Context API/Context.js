import React, { Component } from 'react';

// Use This Reducer Now Because My App Need a Single Reducers .. 
// When You Need More , Sould Be Combine All In One ROOT_REDUCER .. 
import Counter_Reducer from './reducers/counter reducer';


// Create Context API => In Some Way Like The Store In Redux 
const Context = React.createContext();



// The Context Provider ..
export class Provider extends Component {
   
      // the global state ..
    state = {
        counter : 0 ,
        dispatch : action => this.setState(state => Counter_Reducer(state,action)) 
    };

  render() {
    return (
      <Context.Provider value={this.state}>
            { 
               // all html tags replace here .. => injectable   
                  this.props.children
            }
      </Context.Provider>
    )
  }

}

// The Context Provider ..
export const Consumer = Context.Consumer ;