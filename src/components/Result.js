/*
* This component displays the result
*/
import React, {Component} from 'react';

class Result extends Component{
    render(){
        let {result} = this.props;
        
        return(
            <div className="result">
                <div>{result}</div>
            </div>
        )
    }
}

export default Result;