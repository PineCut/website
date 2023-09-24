import React from "react";
import Typed from "typed.js";


const Hero = () => {
  const pElement = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(pElement.current, {
      strings: ["Professionals", "Individuals"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
   <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Cut the Pine
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4l text-xl font-bold">
            Software for <span ref={pElement} />{" "}
          </p>

          <p className="md:text-2xl text-xl font-bold text-[#223240]">
            Perfect tool for any user around the world
          </p>

          <button className="bg-[#9FD996] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#223240]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
