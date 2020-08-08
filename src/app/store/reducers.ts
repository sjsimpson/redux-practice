import { defaultState } from "../../server/defaultState";
import * as actions from "./actions";

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
 
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
  users
});

const counter = (counter = defaultState.counter, action) => {
  switch(action.type) {
    case actions.COUNTER_INCREMENT:
      return {
        ...counter,
        value: counter.value + 1
      }
    case actions.COUNTER_DECREMENT:
      return {
        ...counter,
        value: counter.value - 1
      }
    case actions.COUNTER_ADD_AMOUNT:
      return {
        ...counter,
        value: counter.value + counter.addAmount
      }
    case actions.COUNTER_CHANGE_ADD_VALUE:
      console.log("ACTION:", action.payload);
      let addAmount = (action.payload === "") ? 0 : parseInt(action.payload);
      console.log("ADD AMOUNT:", addAmount);
      return {
        ...counter,
        addAmount: addAmount
      }
  }
  return counter;
}

const users = (users = defaultState.users, action) => {
  return users;
}

export default createRootReducer;
