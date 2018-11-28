const simpleTestDefaultState = {
  test: ""
};

export default (state = simpleTestDefaultState, action) => {
  switch (action.type) {
    case "SIMPLE_TEST":
      return {
        ...state,
        test: action.test
      };
    default:
      return state;
  }
};
