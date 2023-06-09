const initialState = {
    getHome: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HOME_DATA':
        return {...state,  getHome: action.payload};
      default:
        return state;
    }
  };
  
  export default reducer;
  