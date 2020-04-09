import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad';
import ResultHistory from './components/ResultHistory';

class App extends Component{

  //Consturtor method
  constructor(){
    super();
    
    //Set the initial state value
    this.state = {
      result: "",
      histories: []
    }
  }

  //Taking actions based on the calculator button clicked
  onClick = button => {
    if(button === "="){
      this.calculate()
    }else if(button === "C"){
      this.reset()
    }else if(button === "CE"){
      this.backspace()
    }else{
      this.setState({
        result: this.state.result + button
      })
    }
  }

  //Calculating the result and displaying result and history
  calculate = () => {
    try{
      //Pushing new result to result history
      let histories = this.state.histories;
      histories.push(this.state.result + " = " + eval(this.state.result));
      this.setState({histories:histories});

      this.setState({
        //eslint-disbale-next-line
        result: (eval(this.state.result) || "") + ""
      })
    }catch(e){
      this.setState({
        result: "Error"
      })
    }
  }
  
  //Reset the result box
  reset = () => {
    this.setState({
      result: ""
    })
  }

  //Remove last key from result box
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render(){
    return(
      <div>
        <div className="calculator">
          <h1>Calculator with React JS</h1>
          <ResultHistory histories={this.state.histories}/>
          <Result result={this.state.result}/>
          <KeyPad onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
