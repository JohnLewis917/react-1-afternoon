import React, {Component} from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super ();
            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ''
            }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    assignEvenAndodds(userInput){
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push( parseInt(arr[i], 10))
            } else {
                odds.push( parseInt(arr[i], 10))
            }

        }

    }
    render (){
        return (
            <outline>
                <div className="puzzleBox evenAndoddPB"></div>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}></button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
                <h4>Even and odds</h4>
            </outline>
        )
    }
}