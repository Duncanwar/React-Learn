import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() {
        const {onReset,counters, onDelete, onIncrement, onDecrement} = this.props; 
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        onDecrement={onDecrement}
                         />)}
            </div>
         );
    }
}
 
export default Counters;