const init = {value: 0};

const reducer = (state, action) => {
  switch(action.type) {
    case "Increment":
      return {value: state.value + 1};
    case "Decrement":
      return {value: state.vaule - 1};
    case "Square":
      return {value: Math.pow(state.vaule, 2)};
    case "Sqrt":
      return {value: Math.sqrt(state.value, 2)};
    case "Zero":
      return {value: 0};
    default:
      return {value: state.value};
  }
}


export default [reducer, init]