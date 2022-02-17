import React from "react";

class ClassComponent extends React.Component {
    state = {
        counter: 0,
        counter2: 0,
        timer: 0
    };

    // componentDidMount() {
    //   console.log("componentDidMount calisti.");
    // }

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.counter !== this.state.counter) {
    //     console.log("componentDidUpdate calisti.");
    //   } else if (prevState.counter2 !== this.state.counter2) {
    //     console.log("counter2 update edildi.");
    //   }
    // }

    // componentDidMount() {
    //   this.myTimer = setInterval(() => {
    //     this.setState({ timer: this.state.timer + 1 });
    //   }, 1000);
    // }

    // componentDidUpdate() {
    //   console.log("Timer: ", this.state.timer);
    // }

    // componentWillUnmount() {
    //   clearInterval(this.myTimer);
    // }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {
        return (
            <div className="box">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <p>Counter2: {this.state.counter2}</p>
                <button onClick={() => this.increase()}>Increase</button>
                <button
                    onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}
                >
                    Increase Counter 2
                </button>
            </div>
        );
    }
}

export default ClassComponent;