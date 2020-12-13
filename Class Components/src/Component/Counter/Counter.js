import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';

export default class Counter extends Component {
    constructor(props) {
        super(props) //@ <-- makes it so that props is now being bound into this component (allows props to be passed down from the parent class component (unlocks "this" keyword))
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState({
            counter: (this.state.counter +1)
        })
    }

    decrement() {
        this.setState({
            counter: (this.state.counter -1)
        })
    }

    render() {
        return(
            <div>
                <CounterDisplay counter={this.state.counter} />
                <button onClick={() => this.increment()}>Plus 1</button>
                <button onClick={() => this.decrement()}>Minus 1</button>
            </div>
        )
    }
}
