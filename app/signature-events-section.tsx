import { Button, Colors, Heading } from "@hacksc/sctw-ui-kit";
import { Inter } from "next/font/google";
import Image from "next/image";
import { styled } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const EventCard = (props: {
  title: string;
  borderColor: string;
  imageUri: string;
}) => (
  <div
    style={{
      position: "relative",
      width: "276.931px",
      height: "425.742px",
      borderRadius: "31.831px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "end",
    }}
  >
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
        opacity: 0.9,
        borderRadius: "31.831px",

        border: `10px solid ${props.borderColor}`,
      }}
    />{" "}
    <Image src={props.imageUri} fill alt={`${props.title}'s image`} />
    {/* overlay */}
    <EventCardTitleText>{props.title}</EventCardTitleText>
  </div>
);

const EventCardTitleText = styled.p`
  color: #fff;
  z-index: 2;
  text-shadow: 0px 0px 11.936684608459473px rgba(0, 0, 0, 0.2);
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.25px;
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
      imageUri: "graphics/sctw-eventcard-image.svg",
      borderColor: Colors.Yellow.Yuhlow,
      buttonColor: "yellow",
    },
    {
      title: "HackSC-X",
      imageUri: "graphics/sctw-eventcard-image.svg",
      borderColor: Colors.Red.Redward,
      buttonColor: "red",
    },
    {
      title: "HackSC Jr.",
      imageUri: "graphics/sctw-eventcard-image.svg",
      borderColor: Colors.Blue.Bloo,
      buttonColor: "blue",
    },
    {
      title: "Hack Nights",
      imageUri: "graphics/sctw-eventcard-image.svg",
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
