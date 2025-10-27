import React from "react";

const WaveAnimation = () => {
  return (
    <div className="relative w-full h-[120px] overflow-hidden">
      <div className="absolute w-[200%] h-full bg-[url('https://i.ibb.co/GF6Scp1/wave.png')] bg-repeat-x animate-wave" />
      <div className="absolute w-[200%] h-full bg-[url('https://i.ibb.co/GF6Scp1/wave.png')] bg-repeat-x opacity-60 bottom-2.5 animate-wave-slow" />
      <div className="absolute w-[200%] h-full bg-[url('https://i.ibb.co/GF6Scp1/wave.png')] bg-repeat-x opacity-40 bottom-5 animate-wave-slower" />
    </div>
  );
};

export default WaveAnimation;
