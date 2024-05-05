import Image from "next/image";
import React from "react";

const aiData = [
  {
    title: "AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE",
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    image: "/AI1.png",
  },
  {
    title: "AI TOOLS AND MARKET",
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    image: "/AI2.png",
  },
  {
    title: "AI, CRYPTO, AND NFT MARKET",
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    image: "/AI3.png",
  },
];

const AI = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-10 py-20 pl-4 pr-5 lg:px-44 box-border w-full">
      {aiData.map((ai, index) => (
        <div
          key={index}
          className="flex flex-col-reverse lg:flex-row items-start w-full bg-[#13171dab] rounded-md"
        >
          <div className="flex flex-col items-start gap-4 lg:gap-0 p-5 lg:p-9">
            <h3 className="text-2xl lg:text-[1.979vw] uppercase font-monument">
              {ai.title}
            </h3>
            <p className="lg:text-sm">{ai.description}</p>
          </div>
          <div className="w-full flex items-center justify-center overflow-hidden">
            <Image
              src={ai.image}
              alt="AI"
              loading="lazy"
              width="1269"
              height="702"
              className="lg:rounded-tr-md lg:rounded-br-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AI;
