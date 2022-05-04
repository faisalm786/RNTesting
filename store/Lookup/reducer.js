import * as actions from "./actions";

const init = {
  loading: false,
  error: "",
};
export default (state = init, action) => {
  switch (action.type) {
    case actions.TEST:
      return { ...state, loading: true, error: "", user: {} };
    default:
      return {...state};
  }
};
