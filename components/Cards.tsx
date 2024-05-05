import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const cardsData = [
  {
    title: "TOKEN",
    description: "The Gateway token to the world of AI",
    image: "/token.webp",
    content:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "REVENUE",
    description: "Driving income and growth through decentralization",
    image: "/revenue.webp",
    content:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
  },
  {
    title: "LAUNCHPAD",
    description: "Driving the future of AI Innovation",
    image: "/launchpad.webp",
    content:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];

const Cards = () => {
  return (
    <section className="lg:h-screen w-full grid grid-cols-1 lg:grid-cols-3 gap-20 items-center justify-between py-20 px-4 lg:px-52">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="w-full lg:w-[23vw] h-[600px] lg:h-[550px] pt-2 bg-[#13171dab] border-0 text-white relative comingsoon"
        >
          <CardHeader className="lg:min-h-[152px]">
            <CardTitle className="font-monument lg:text-[2vw]">
              {card.title}
            </CardTitle>
            <CardDescription className="text-gradient font-bold text-xl lg:text-[1.1vw]">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="w-full my-3 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                loading="lazy"
                width="1269"
                height="702"
                className="hover:scale-110 transition-transform"
              />
            </div>
            <p className="lg:text-sm py-3">{card.content}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Cards;
