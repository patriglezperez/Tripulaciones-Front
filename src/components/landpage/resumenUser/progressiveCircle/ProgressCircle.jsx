import { useRef, useEffect, useState } from "react";

const ProgressCircle = ({ point, pointLap, time }) => {
  const [count, setCount] = useState(0);
  const rightCircle = useRef();
  const leftCircle = useRef();

  useEffect(() => {
    const timeInterval = 300 / point;

    const intervalPoint = setInterval(() => {
      if (count < point) {
        setCount((prevCount) => prevCount + 1);
      }
    }, timeInterval);

    return () => clearInterval(intervalPoint);
  }, [count]);

  const animateCircle = () => {
    let degress = (point % pointLap) * 3.6;

    console.log(degress, "grados");
    if (degress <= 180) {
      rightCircle.current.animate(
        [{ transform: `rotate(calc(${degress}deg - 180deg))` }],
        {
          duration: time,
          easing: "linear",
          fill: "both",
        },
      );
    } else if (degress > 180) {
      rightCircle.current.animate([{ transform: `rotate(0deg)` }], {
        duration: time,
        easing: "linear",
        fill: "both",
      });

      leftCircle.current.animate(
        [{ transform: `rotate(calc(${degress}deg  - 360deg))` }],
        {
          duration: time,
          easing: "linear",
          fill: "both",
          delay: time,
        },
      );
    }
  };

  useEffect(() => {
    animateCircle();
  }, []);

  return (
    <div className="container-circle">
      <div className="rigth-mask">
        <div ref={rightCircle} className="right-circle"></div>
      </div>
      <div className="point-center">
        <p>{count} puntos</p>
      </div>
      <div className="left-mask">
        <div ref={leftCircle} className="left-circle"></div>
      </div>
    </div>
  );
};

export default ProgressCircle;
