/*
* This component displays the history of result
*/
import React, {Component} from 'react';

class ResultHistory extends Component{
    render(){
        return(
            <div className="result-history">
                {
                //map array data
                this.props.histories.map(function(history){
                return <div>{history}</div>
                })
                }
            </div>
        )
    }
}

export default ResultHistory;