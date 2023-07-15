import React from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="افزایش" clicked={this.props.onIncrement} />
        <CounterControl label="کاهش" clicked={this.props.onDecrement} />
        <CounterControl label="افزودن ۲" clicked={this.props.onAdd} />
        <CounterControl label="کاهش ۲" clicked={this.props.onSub} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INC" }),
    onDecrement: () => dispatch({ type: "DEC" }),
    onAdd: () => dispatch({ type: "ADD", value: 2 }),
    onSub: () => dispatch({ type: "SUB", value: 2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
