import axios from 'axios';

export const getRandomGreeting = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/greeting')
      .then((response) => {
        dispatch(setRandomGreeting(response.data.greeting));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setRandomGreeting = (greeting) => {
  return {
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  };
};
