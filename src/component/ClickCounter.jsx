import React, { useState, useEffect } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let intervalId = null;
    if (isPressing) {
      if(!startTime) setStartTime(Date.now());
      intervalId = setInterval(() => {
        const holdTime = (Date.now() - startTime) / 1000;
        if(holdTime > 10){
          setCount(count => count + 50);
        }
        else if(holdTime > 5){
          setCount(count => count + 10);
        }
        else {
          setCount(count => count + 5);
        }
      }, 200);
    } 
    else if (!isPressing && count !== 0) {
      clearInterval(intervalId);
      setStartTime(null);
    }
    return () => clearInterval(intervalId);
  }, [isPressing, count, startTime]);

  return (
    <div>
      <button
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
        onMouseLeave={() => setIsPressing(false)}
        onClick={() => setCount(count + 1)}
      >
        Click ME!
      </button>
      <p>
        Clicked {count} times
      </p>
    </div>
  );
}

export default ClickCounter;
