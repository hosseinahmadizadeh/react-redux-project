const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "RES":
      return {
        ...state,
        result: state.result.concat(state.counter),
      };
    default:
      return state;
  }
};

export default reducer;
