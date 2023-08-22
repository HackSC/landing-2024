import { Button, Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const EventCard = (props: {
  title: string;
  borderColor: string;
  imageUri: string;
}) => (
  <EventCardContainer $borderColor={props.borderColor}>
    <Overlay />
    {/* overlay */}
    <Image
      src={props.imageUri}
      fill
      style={{ objectFit: "fill", zIndex: 0, transform: "scale(101%)" }}
      alt={`${props.title}'s image`}
    />
    <EventCardTitleText className={inter.className}>
      {props.title}
    </EventCardTitleText>
  </EventCardContainer>
);

const Overlay = () => (
  <div
    style={{
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      background: "linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
      opacity: 0.9,
      borderRadius: "31px", // as much as the image
      transform: "scale(101%)",
    }}
  />
);

const EventCardContainer = styled.div<{ $borderColor: string }>`
  position: relative;
  width: 276.931px;
  height: 425.742px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  z-index: 9;
  align-items: center;
  justify-content: end;
  border: 10px solid ${(props) => props.$borderColor};

  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const EventCardTitleText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  z-index: 2;
  text-shadow: 0px 0px 11.936684608459473px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const SignatureEvents = () => {
  const events: {
    title: string;
    imageUri: string;
    borderColor: string;
    buttonColor: "blue" | "black" | "red" | "yellow";
  }[] = [
    {
      title: "SoCal Tech Week",
      imageUri: "/graphics/sctw-eventcard.svg",
      borderColor: Colors.Yellow.Yuhlow,
      buttonColor: "yellow",
    },
    {
      title: "HackSC-X",
      imageUri: "/graphics/hx-eventcard.png",
      borderColor: Colors.Red.Redward,
      buttonColor: "red",
    },
    {
      title: "HackSC Jr.",
      imageUri: "/graphics/hjr-eventcard.png",
      borderColor: Colors.Blue.Bloo,
      buttonColor: "blue",
    },
    {
      title: "Hack Nights",
      imageUri: "/graphics/hn-eventcard.png",
      borderColor: Colors.Neutral.Black,
      buttonColor: "blue",
    },
  ];
  return (
    <SectionContainer>
      <Heading style={{ textAlign: "center" }}>OUR SIGNATURE EVENTS</Heading>
      <EventCardsContainer>
        {events.map((el, i) => (
          <div
            key={`${el}-${i}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <EventCard
              title={el.title}
              imageUri={el.imageUri}
              borderColor={el.borderColor}
            />
            <Button color={el.buttonColor} variant="outline">
              LEARN MORE
            </Button>
          </div>
        ))}
      </EventCardsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 5rem 4rem;
`;

const EventCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;
