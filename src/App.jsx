import React, { useState, useEffect } from "react";
import AnimatedBox from "./AnimatedBox";

const App = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (animationStage === 0) {
      const timer = setTimeout(() => {
        setAnimationStage(1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animationStage]);

  const boxes = [
    {
      number: 1,
      bgColorClass: "bg-blue-500",
      initialPosition: { x: "-100%", top: "25vh" },
      finalPosition: { top: "0" },
      showInStage: 0,
      isRight: false,
    },
    {
      number: 3,
      bgColorClass: "bg-red-500",
      initialPosition: { x: "100%", top: "50vh" },
      finalPosition: { top: "25vh" },
      showInStage: 0,
      isRight: false,
    },
    {
      number: 5,
      bgColorClass: "bg-purple-500",
      initialPosition: { y: "100%", top: "75vh" },
      finalPosition: { top: "50vh" },
      showInStage: 1,
      isRight: false,
    },
    {
      number: 7,
      bgColorClass: "bg-indigo-500",
      initialPosition: { y: "100%", top: "100vh" },
      finalPosition: { top: "75vh" },
      showInStage: 1,
      isRight: false,
    },
    {
      number: 8,
      bgColorClass: "bg-pink-500",
      initialPosition: { y: "-100%", top: "-25vh" },
      finalPosition: { top: "0" },
      showInStage: 1,
      isRight: true,
    },
    {
      number: 6,
      bgColorClass: "bg-teal-500",
      initialPosition: { y: "-100%", top: "0vh" },
      finalPosition: { top: "25vh" },
      showInStage: 1,
      isRight: true,
    },
    {
      number: 2,
      bgColorClass: "bg-green-500",
      initialPosition: { x: "-100%", top: "25vh" },
      finalPosition: { top: "50vh" },
      showInStage: 0,
      isRight: true,
    },
    {
      number: 4,
      bgColorClass: "bg-yellow-500",
      initialPosition: { x: "100%", top: "50vh" },
      finalPosition: { top: "75vh" },
      showInStage: 0,
      isRight: true,
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {boxes.map((box) => (
          <AnimatedBox
            key={box.number}
            number={box.number}
            bgColorClass={box.bgColorClass}
            initialPosition={box.initialPosition}
            finalPosition={box.finalPosition}
            showInStage={box.showInStage}
            currentStage={animationStage}
            isRight={box.isRight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
