import { combineReducers } from "redux";
import * as constants from "../../redux/constants";

const initialState = {
  view: {
    status: null,
    data: {
      id: null,
      serviceRegion: ["EMEA", "APAC", "NA & LATAM"],
      areaSelectedOption: [],
      customerInformation: "",
      sowType: [
        "ProductSow",
        "Teradata Customer SOW",
        "Custom Professional Services SOW"
      ],
      sowTypeSelectedOption: [],
      // componentList: {
      //   ProductSow: "component for productSow",
      //   "Teradata Customer SOW": "component for 2nd option", "Custom Professional Services SOW": "component for 3rd option"
      // },
      prodSowTestInformation: "",
      product_families: []
      // productFamilyNew: {
      //     product_family: ""
      // }
    }
  },
  edit: {
    status: null,
    data: null,
    changed: null
  }
};

function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.edit, action) {
  switch (action.type) {
    case constants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        data: newForm
      };
    case constants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form
      };
    case constants.EDIT_FORM_PENDING:
      return {
        ...state,
        status: constants.EDIT_FORM_PENDING
      };
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: false,
        data: action.form,
        status: constants.EDIT_FORM_SUCCESS
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer
});
