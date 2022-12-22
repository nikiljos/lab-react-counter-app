import { Component } from "react";
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    increaseCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    decreaseCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    }

    resetCount() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div className="Counter">
                <h1>Counter App</h1>
                <h2>{this.state.count}</h2>
                <div className="btn-grp">
                    <button onClick={() => this.increaseCount()}>+</button>
                    <button onClick={() => this.decreaseCount()}>-</button>
                    <button onClick={() => this.resetCount()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter