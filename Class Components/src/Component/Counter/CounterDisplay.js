import React from 'react';

const CounterDisplay = (props) => {
    return (
        <div>
            <h2>{props.counter}</h2> {/*If this was a class component, it would be {this.props.counter}*/}
        </div>
    )
}

export default CounterDisplay;
