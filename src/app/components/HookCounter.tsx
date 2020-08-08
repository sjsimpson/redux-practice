import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";

const counterStateSelector = (state) => {
  return state.counter;
}

export const HookCounter = () => {

  const { value, addAmount } = useSelector(counterStateSelector);
  const dispatch = useDispatch();

  const dispatchMap = {
    counterIncrement: () => dispatch({ type: actions.COUNTER_INCREMENT}),
    counterDecrement: () => dispatch({ type: actions.COUNTER_DECREMENT}),
    counterAddAmount: () => dispatch({ type: actions.COUNTER_ADD_AMOUNT}),
    counterChangeAddValue: (event) => dispatch({
      type: actions.COUNTER_CHANGE_ADD_VALUE,
      payload: event.target.value
    })
  };

  // View: the UI definition
  return (
    <div>
      <h2>
        Hook Router
      </h2>
      <div>
        Value: {value}
      </div>
      <div>
        AddAmount: {addAmount}
      </div>
      <div>
        <button onClick={dispatchMap.counterIncrement}>Increment</button>
        <button onClick={dispatchMap.counterDecrement}>Decrement</button>
      </div>
      <div>
        <input
          value={addAmount}
          onChange={dispatchMap.counterChangeAddValue}
        />
        <button onClick={dispatchMap.counterAddAmount}>Add Amount</button>
      </div>
    </div>
  )
};
