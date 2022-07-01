import React, { useEffect, useRef, useState } from "react";
import { TimerInput } from "./TimerInput";
export const Timer = () => {
  const [time, setTime] = useState(null);

  const [isTimerRunning, setTimerRunning] = useState(false);
  // const [id, setID] = useState(null);

  //we can use  useref instead of these state
  //if you update the ueref it doesnt  cause re-render at any time.It doesnt trigger a re-render
  const timerRef = useRef(null);

  useEffect(() => {
    if (time == 0) {
      //before useRef
      // clearInterval(id);
      //after using useRef
      clearInterval(timerRef.current);
    }
    // }, [time, id]);
  }, [time]);

  useEffect(() => {
    //cleanup will only get called before unmounting
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  const handleUpdate = (time) => {
    setTime(time);
    // setTimerRunning(true);--before useRef

    handleStart();
  };
  const handleStart = () => {
    // if (id !== null) return;
    if (timerRef.current !== null) return;
    if (time === 0) return;
    // const _id = setInterval(() => {
    timerRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    // setID(_id);--before useref
    setTimerRunning(true);
  };
  const handleStop = () => {
    // clearInterval(id);
    setTimerRunning(false);
    // setID(null);
    //after useRef
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  return (
    <div>
      {time === null ? (
        <TimerInput handleUpdate={handleUpdate} />
      ) : (
        <>
          <div>Timer:{time}</div>
          {isTimerRunning ? (
            <button onClick={handleStop}>PAUSE</button>
          ) : (
            <button onClick={handleStart}>START</button>
          )}

          <button onClick={handleReset}>RESET</button>
        </>
      )}
    </div>
  );
};

