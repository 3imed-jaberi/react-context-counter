import React, { Component } from 'react';
import { Consumer } from '../Context API/Context';

class Counter extends Component {

  myStyles = {
    imed_jaberi : {
      color:"grey",
      fontWeight: "bold"
    },
    plus : {
      color: "#FF1493" 
    }
  }
  

  // Dispatchers .. 
  increament = dispatch => dispatch({type:'INCREAMENT'}) ;
  
  decreament = dispatch => dispatch({type: 'DECREAMENT'}) ;


  render() {
    return (
      <Consumer>
        { 
          value => {
              const { dispatch } = value ; 
            return (
              <div>
                <center>
                <div className="uk-container">
                  <div className="uk-card uk-card-secondary uk-width-1-3@m">
                    <div className="uk-card-header">
                        <div className="uk-width-expand">
                          <h1 className="uk-card-title uk-margin-remove-bottom"> 
                            REACT REDUX COUNTER 
                          </h1>
                        </div>
                        <hr/>
                    </div>
                    <div className="uk-card-body">
                      <h1 className="counter"> { value.counter } </h1>
                    </div>
                    <div className="uk-card-footer">
                        <button className="uk-button uk-button-primary uk-button-large plus" onClick={() => this.increament(dispatch)}><h1 style={this.myStyles.plus}>+</h1></button>
                        <button className="uk-button uk-button-danger uk-button-large moins" onClick={() => this.decreament(dispatch)}><h1>-</h1></button>
                        <hr/>
                        <p> &copy; 2019 Copyright || Made by <a style={this.myStyles.imed_jaberi} href="https://github.com/3imed-jaberi" > 3imed-jaberi </a> </p>
                    </div>
                  </div>
                </div>
                </center>
              </div>
            )
          }
        }     
      </Consumer>
    )
  }

}

export default Counter ;
