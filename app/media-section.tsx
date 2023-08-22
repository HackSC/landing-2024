import {
  BodyText,
  BodyTextSmall,
  Colors,
  Heading,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";
import Marquee from "react-fast-marquee";

const MediaNewCard = (props: {
  link: string;
  title: string;
  description: string;
  mediaLogo: string;
}) => (
  <div
    style={{
      backgroundColor: "white",
      padding: "2rem",
      display: "flex",
      gap: "2rem",
      minWidth: "416px",
      maxWidth: "416px",
      marginLeft: "2rem",
      height: "129px",
      wordWrap: "break-word",
      borderRadius: "5px",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flex: "2",
        top: "0px",
      }}
    >
      <Image
        src={props.mediaLogo}
        alt="Media logo for HackSC"
        width={90}
        height={90}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <BodyText style={{ fontWeight: "bold" }}>
        {" "}
        <a
          href={props.link}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {props.title}
          <Image
            src="/icons/redirect.svg"
            alt="Redirect icon"
            width={12}
            height={12}
            style={{
              marginLeft: "5px",
            }}
          />
        </a>
      </BodyText>

      <div>
        <BodyTextSmall>{props.description}</BodyTextSmall>
      </div>
    </div>
  </div>
);

export const Media = () => {
  const medias: {
    title: string;
    link: string;
    mediaLogo: string;
    description: string;
  }[] = [
    {
      title: "@HackSC",
      link: "https://twitter.com/hackscofficial/status/1648137800120774657",
      mediaLogo: "/icons/hacksc.svg",
      description:
        "This past weekend, we were so excited to help empower the next generation of innovators at #HackSCJr! It was an inspiring day filled with brilliant minds and endless possibilities. We can't wait to host more community events such as this one in the near future!  #FutureTechies",
    },
    {
      title: "@Spectacles",
      link: "https://twitter.com/Spectacles/status/1493255775522803712",
      mediaLogo: "/icons/spectacles.svg",
      description:
        "Last weekend @hackscofficial brought university student developers, designers, and builders together to explore the world in AR! They had hands-on experience with building in #LensStudio and testing on Spectacles.",
    },
    {
      title: "DailyTrojan",
      link: "https://dailytrojan.com/2018/01/17/usc-team-wins-third-hackathon/",
      mediaLogo: "/icons/dailytrojan.svg",
      description:
        "With only 24 hours at hand, seniors Cherrie Wang and Brandon Cen and alumni Izzy Benavente and Jason Lin did not expect to leave the Facebook Global Hackathon with the respect of major businesses and a tangible product with the capacity to contribute to the future of technology.",
    },
    {
      title: "DailyTrojan",
      link: "https://dailytrojan.com/news/2014/11/09/hacksc-brings-entrepreneurs-together/",
      mediaLogo: "/icons/dailytrojan.svg",
      description:
        "USC hosted HackSC, a student-run 36-hour hackathon that promotes quick learning and rapid prototyping this weekend at the Annenberg School for Communication and Journalism. ",
    },
    {
      title: "DailyTrojan",
      link: "https://dailytrojan.com/news/2013/10/13/students-create-apps-for-usc-in-hackathon/",
      mediaLogo: "/icons/dailytrojan.svg",
      description:
        "HackSC, held from Friday to Sunday, was USC’s first ever campus-focused hackathon competition. Fourteen teams participated in the competition, which was hosted by the USC Association for Computing Machinery, to create technology products for the general student body.",
    },
    {
      title: "@RippleX",
      link: "https://twitter.com/RippleXDev/status/1223752848099270667",
      mediaLogo: "/icons/ripplex.jpg",
      description:
        "Our Lead Engineer for APIs @intelliot is a @USC Alumni, so awesome for him to be back on campus for @hackscofficial to demo some of his open source work! #HackSC2020",
    },
    {
      title: "UCI Department of Informatics",
      link: "https://www.informatics.uci.edu/ics-students-win-best-web-app-at-hacksc/",
      mediaLogo: "/icons/uci.svg",
      description:
        "Last month at HackSC, a large-scale hackathon held at USC, the winner of the “Best Mobile or Web App” went to Align. Created by a team of students from the Donald Bren School of Information and Computer Sciences (ICS), the app helps people create interest-driven support groups.",
    },
  ];
  return (
    <Container>
      <Heading style={{ color: "white", textAlign: "center" }}>MEDIA</Heading>
      <Subheading2
        style={{ color: Colors.Blue.Periwinkle, textAlign: "center" }}
      >
        HackSC in the news
      </Subheading2>
      <Marquee>
        {medias.map((el, i) => (
          <div key={`${el}-${i}`}>
            <MediaNewCard
              title={el.title}
              link={el.link}
              mediaLogo={el.mediaLogo}
              description={el.description}
            />
          </div>
        ))}
      </Marquee>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 10rem 0;
  background-image: url(/media-wavy-background-blue.svg);
  background-size: cover;
  z-index: 999;
`;
