const initialState = {
  homeData: [],
  chatData: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOME_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_HOME_SUCCESS":
      return { ...state, homeData: action.payload, loading: false };
    case "GET_HOME_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "GET_CHAT_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_CHAT_SUCCESS":
      return { ...state, chatData: action.payload, loading: false };
    case "GET_CHAT_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
