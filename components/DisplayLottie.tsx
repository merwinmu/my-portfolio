import React from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
  height: number;
  width: number;
};

const GreetingLottie = ({ animationPath, height, width }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
    height: height,
    width: width,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
