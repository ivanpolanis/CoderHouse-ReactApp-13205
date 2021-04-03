import {Button} from 'react-bootstrap'
import {Component} from 'react'

export default class Counter extends Component {
    constructor(){
        super();

        this.state = {
            count: 0,
        };
    }

    increment = () => this.setState({count: this.state.count+1});
    decrement = () => {
        if (this.state.count === 0){
            return;
        }
        this.setState({count: this.state.count-1});
    }
    render() {
        return(
            <>
                <div className="counter d-flex flex-wrap mx-auto">
                    <div className="count">
                        <span>{this.state.count}</span>
                    </div>
                    <div className="d-flex btn-counter">
                        <Button variant='light' className='font-size-2' onClick={this.decrement}>-</Button>
                        <Button variant='light' className='font-size-2' onClick={this.increment}>+</Button>
                    </div>
                </div>
            </>
        )
    }
}
