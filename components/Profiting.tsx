import React from "react";

const Profiting = () => {
  return (
    <section className="h-screen w-full py-10 px-4 lg:px-52 flex flex-row items-start justify-center">
      <div className="w-full flex flex-col gap-2 lg:gap-0">
        <div className="flex items-start justify-start w-full">
          <h1 className="uppercase font-monument text-4xl lg:text-[3.5vw]">
            Profiting Through
          </h1>
        </div>
        <div>
          <div className="flex items-end justify-end w-full">
            <h1 className="uppercase text-end text-gradient font-monument text-2xl lg:text-[2vw]">
              AI INNOVATION & DECENTRALIZATION
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full mt-2 lg:mt-20">
          <div className="py-0 pr-2.5 pl-0 box-border w-full lg:w-[65vw]">
            <video autoPlay loop playsInline muted>
              <source src="/CREON.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full md:w-3/4 lg:w-[30.vw] h-full flex flex-col items-center justify-center py-3 lg:py-0 lg:px-3 pb-26 border-y-2 lg:border-y-0 lg:border-x-2 border-[#13171d] box-border">
            <div className="flex flex-col items-start justify-start gap-7">
              <h4 className="font-bold text-xl lg:text-[1.1vw]">
                The dynamic community driven business model of the future.
              </h4>
              <p className="text-lg lg:text-[1vw] leading-[120%]">
                At Creon, we blend the power of AI tools with the dynamic crypto
                and NFT markets, utilizing an innovative business model to drive
                profitability. This approach empowers our community, as our NFT
                and token holders directly benefit from the growth and
                prosperity of the Creon network, creating a win-win scenario for
                both our community and for the projects we launch.
              </p>
            </div>
          </div>
          <div className="h-120 w-px relative bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Profiting;
