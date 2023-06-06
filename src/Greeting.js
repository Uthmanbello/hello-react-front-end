import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from './actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h4>Random Greeting</h4>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
