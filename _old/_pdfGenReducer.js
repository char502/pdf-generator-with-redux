const pdfGeneratorMainDefaultState = {
  id: 0
};

export default (state = pdfGeneratorMainDefaultState, action) => {
  switch (action.type) {
    case "ADD_FORM":
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
