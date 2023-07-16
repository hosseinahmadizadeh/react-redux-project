import React from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="افزایش" clicked={this.props.onIncrement} />
        <CounterControl label="کاهش" clicked={this.props.onDecrement} />
        <CounterControl label="افزودن ۲" clicked={this.props.onAdd} />
        <CounterControl label="کاهش ۲" clicked={this.props.onSub} />
        <div>
          <button onClick={this.props.onStoreResult}>نمایش</button>
          {this.props.str.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    str: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INC" }),
    onDecrement: () => dispatch({ type: "DEC" }),
    onAdd: () => dispatch({ type: "ADD", value: 2 }),
    onSub: () => dispatch({ type: "SUB", value: 2 }),
    onStoreResult: () => dispatch({ type: "RES" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
