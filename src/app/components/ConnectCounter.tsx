import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const ConnectCounter = (props) => {
  const { counter } = props;
  const {
    counterIncrement,
    counterDecrement,
    counterAddAmount,
    counterChangeAddValue
  } = props;
  // State: a counter value
  // const value = useSelector((state) => state.value);
  // const [value, setValue ] = useState(0);

  // View: the UI definition
  return (
    <div>
      <h2>
        Connect Router
      </h2>
      <div>
        Value: {counter.value}
      </div>
      <div>
        AddAmount: {counter.addAmount}
      </div>
      <div>
        <button onClick={counterIncrement}>Increment</button>
        <button onClick={counterDecrement}>Decrement</button>
      </div>
      <div>
        <input value={counter.addAmount} onChange={counterChangeAddValue}/>
        <button onClick={counterAddAmount}>Add Amount</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  let counter = state.counter;

  return {
    counter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    counterIncrement() {
      dispatch(actions.counterIncrement());
    },
    counterDecrement() {
      dispatch(actions.counterDecrement());
    },
    counterAddAmount() {
      dispatch(actions.counterAddAmount());
    },
    counterChangeAddValue(event) {
      dispatch(actions.counterChangeAddValue(event.target.value));
    }
  }
}

export const ConnectCounterContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectCounter);