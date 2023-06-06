import axios from 'axios';

export const setRandomGreeting = (greeting) => ({
  type: 'SET_RANDOM_GREETING',
  payload: greeting,
});

export const getRandomGreeting = () => (dispatch) => {
  axios.get('http://localhost:3000/greeting')
    .then((response) => {
      dispatch(setRandomGreeting(response.data.greeting));
    })
    .catch((error) => error);
};
