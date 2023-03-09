import { Card } from "antd";
import React, { useEffect, useState } from "react";

export default function WorkTimer() {
  const [timerId, setTimerId] = useState<NodeJS.Timer>();
  const [timer, setTimer] = useState(0);

  const onStart = () => {
    setTimerId(
      setInterval(() => {
        setTimer((state) => state + 1);
      }, 1000)
    );
  };

  const onStop = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <Card>
      <button type="button" onClick={onStart}>
        start
      </button>
      <button type="button" onClick={onStop}>
        stop
      </button>
      <div>{timer}</div>
    </Card>
  );
}
