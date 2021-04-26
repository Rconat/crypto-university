import React, { useState, useEffect } from 'react';

const Timer = ({ seconds }) => {

    const [timeLeft, setTimeLeft] = useState(300);
  
    useEffect(() => {
      // exit early when we reach 0
      if (!timeLeft) return;
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeft]);
  
    return (
        <h1>Time left : {timeLeft}</h1>
    );
  };

export default Timer