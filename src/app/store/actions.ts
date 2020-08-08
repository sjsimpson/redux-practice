export const COUNTER_INCREMENT = "counter/increment";
export const COUNTER_DECREMENT = "counter/decrement";
export const COUNTER_ADD_AMOUNT = "counter/addAmount";
export const COUNTER_CHANGE_ADD_VALUE = "counter/changeAddValue";

export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT
  }
}

export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT
  }
}

export const counterAddAmount = () => {
  return {
    type: COUNTER_ADD_AMOUNT
  }
}

export const counterChangeAddValue = (addValue) => {
  return {
    type: COUNTER_CHANGE_ADD_VALUE,
    payload: addValue
  }
}