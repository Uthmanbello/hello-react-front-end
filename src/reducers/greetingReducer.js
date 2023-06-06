const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_GREETING':
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
