const features = [
  "Pre-launch investment opportunities for upcoming AI projects",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects",
];
const CreonPass = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10 py-20 pl-4 pr-2 lg:px-52 box-border w-full text-left text-white">
      <div className="flex flex-col items-start justify-start gap-8 h-full w-full">
        <h2 className="text-4xl lg:text-[3.5vw] uppercase font-monument font-bold pb-2 border-b-2 border-[#13171d] leading-[110%]">
          Creon Pass NFT
        </h2>
        <h4 className="text-gradient font-bold text-xl lg:text-[1.1vw]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools.
        </h4>
        <div className="flex flex-col items-start gap-3">
          {features.map((feature, index) => (
            <p
              key={index}
              className="text-lg lg:text-[1vw] px-4 py-2 border-2 border-[#13171d] rounded-md"
            >
              {feature}
            </p>
          ))}
        </div>
        <button className="w-full lg:w-2/3 h-[45px] lg:h-[3vw] bg-gradient lg:text-[1.1vw] font-bold p-4 rounded-md flex flex-col items-center justify-center overflow-hidden btn-animation">
          <span className="">Buy Creon Pass</span>
          <span className="">Buy Creon Pass</span>
        </button>
      </div>
      <div className="flex items-center justify-center size-full video-container relative">
        <video
          className="size-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="/NFT.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default CreonPass;
