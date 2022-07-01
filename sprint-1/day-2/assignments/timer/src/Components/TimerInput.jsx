
import { useState } from "react";

export const TimerInput = ({ handleUpdate }) => {
    const [time, setTime] = useState(0);
  
    const handleTimeUpdate = (value) => {
      if (Number.isNaN(value)) {
        alert("please input number");
        return;
      }
      setTime(Number(value));
    };
  
    return (
      <div>
        <input
          value={time}
          onChange={(e) => handleTimeUpdate(e.target.value)}
        ></input>
        <button onClick={() => handleUpdate(time)}>start timer</button>
      </div>
    );
  };
  