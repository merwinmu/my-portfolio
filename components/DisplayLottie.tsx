import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false, // Disable SSR for this component
});
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
