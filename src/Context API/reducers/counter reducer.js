import Counter_Actions from '../actions/counter actions';


const Counter_Reducer = ( state , action ) => {

     switch(action.type){
          case Counter_Actions.__INCREAMENT__:
              return {
                  counter: state.counter + 1
              }
              
          case Counter_Actions.__DECREAMENT__:
              return {
                  counter: state.counter - 1
              }
  
          default:
              return state;
      }   
          
}

export default Counter_Reducer ;