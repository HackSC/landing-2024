import { BodyTextLarge, Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";
import {
  styleEventCardContainer,
  styleEventCardsContainer,
  styleSectionContainer,
} from "./signature-events-section.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const EventCard = (props: {
  hasLink?: boolean;
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
      style={{
        objectFit: "fill",
        zIndex: 0,
        transform: "scale(101%)",
        maxWidth: "450px",
      }}
      alt={`${props.title}'s image`}
    />
    <BodyTextLarge style={{ zIndex: 1, marginBottom: "1rem" }}>
      {props.hasLink && "🔗"} {props.title}
    </BodyTextLarge>
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

interface EventCardContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  $borderColor: string;
}
const EventCardContainer = ({
  $borderColor,
  ...props
}: EventCardContainerProps) => (
  <div
    className={styleEventCardContainer}
    style={assignInlineVars({ [$borderColor]: $borderColor })}
    {...props}
  ></div>
);

export const SignatureEvents = () => {
  const events: {
    title: string;
    imageUri: string;
    borderColor: string;
    buttonColor: "blue" | "black" | "red" | "yellow";
    externalLink?: string;
  }[] = [
    {
      title: "SoCal Tech Week",
      imageUri: "/graphics/sctw-eventcard.svg",
      borderColor: Colors.Yellow.Yuhlow,
      buttonColor: "yellow",
      externalLink: "https://socaltechweek.com",
    },
    {
      title: "HackSC-X",
      imageUri: "/graphics/hx-eventcard.png",
      borderColor: Colors.Red.Redward,
      buttonColor: "red",
      externalLink: "https://x.hacksc.com",
    },
    {
      title: "HackSC Jr.",
      imageUri: "/graphics/hjr-eventcard.png",
      borderColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      externalLink: "https://jr.hacksc.com",
    },
    {
      title: "Hack Nights",
      imageUri: "/graphics/hn-eventcard.png",
      borderColor: Colors.Neutral.Black,
      buttonColor: "blue",
      externalLink: "https://hack.sc/hack-nights",
    },
  ];
  return (
    <SectionContainer>
      <Heading style={{ textAlign: "center" }}>OUR SIGNATURE EVENTS</Heading>
      <EventCardsContainer>
        {events.map((el, i) => {
          if (el.externalLink === undefined) {
            return (
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
              </div>
            );
          }
          return (
            <Link
              href={el.externalLink}
              target="_blank"
              style={{
                color: "white",
              }}
              key={`${el}-${i}`}
            >
              <div
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
                  hasLink
                />
              </div>
            </Link>
          );
        })}
      </EventCardsContainer>
    </SectionContainer>
  );
};

const SectionContainer = (props: React.ComponentPropsWithoutRef<"section">) => (
  <section className={styleSectionContainer} {...props}></section>
);

const EventCardsContainer = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleEventCardsContainer} {...props}></div>
);
