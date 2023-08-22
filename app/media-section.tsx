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
import Redirect from "../public/icons/redirect.svg";

const containerStyle = {
  width: "100%",
  display: "flex",
};
const paragraphStyle = {
  wordWrap: "break-word",
  lineHeight: "1.4",
};
const scrollableItemStyle = {
  display: "inline-block",
  width: "416px",
  height: "129px",
  overflow: "hidden",
  margin: "0 10px",
  padding: "10px",
  backgroundColor: "white",
};

const waveStyles = {
  position: "relative",
  height: "70px",
  width: "600px",
  background: "#e0efe3",
};

const waveBeforeStyles = {
  content: '""',
  display: "block",
  position: "absolute",
  borderRadius: "100% 50%",
  width: "340px",
  height: "80px",
  backgroundColor: "white",
  right: "-5px",
  top: "40px",
};

const waveAfterStyles = {
  content: '""',
  display: "block",
  position: "absolute",
  borderRadius: "100% 50%",
  width: "300px",
  height: "70px",
  backgroundColor: "#e0efe3",
  left: "0",
  top: "27px",
};

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
        <a href={props.link}>
          {props.title}
          <img src="/icons/redirect.svg" alt="Icon" height={12} />
        </a>
      </BodyText>

      <div>
        <BodyTextSmall>{props.description}</BodyTextSmall>
      </div>
    </div>
  </div>
);

export const Media = () => {
  return (
    <div>
      <div
        style={{
          margin: 0,
          padding: 0,
          marginBottom: "-5px",
          backgroundColor: "#FEF7E5",
        }}
      >
        <img src="/graphics/wav_top.svg" alt="top" />
      </div>
      <Container>
        <Heading style={{ color: "white", textAlign: "center" }}>MEDIA</Heading>
        <Subheading2
          style={{ color: Colors.Blue.Periwinkle, textAlign: "center" }}
        >
          HackSC in the news
        </Subheading2>
        <Marquee>
          <MediaNewCard
            mediaLogo="/icons/hacksc.svg"
            link="https://twitter.com/hackscofficial/status/1648137800120774657"
            title={"@HackSC"}
            description="This past weekend, we were so excited to help empower the next generation of innovators at #HackSCJr! It was an inspiring day filled with brilliant minds and endless possibilities. We can't wait to host more community events such as this one in the near future!  #FutureTechies"
          />
          <MediaNewCard
            mediaLogo="/icons/spectacles.svg"
            link="https://twitter.com/Spectacles/status/1493255775522803712"
            title={"@Spectacles"}
            description="Last weekend 
      @hackscofficial
      brought university student developers, designers, and builders together to explore the world in AR! They had hands-on experience with building in #LensStudio and testing on Spectacles."
          />
          <MediaNewCard
            mediaLogo="/icons/dailytrojan.svg"
            link="https://dailytrojan.com/news/2014/11/09/hacksc-brings-entrepreneurs-together/"
            title={"DailyTrojan"}
            description="With only 24 hours at hand, seniors Cherrie Wang and Brandon Cen and alumni Izzy Benavente and Jason Lin did not expect to leave the Facebook Global Hackathon with the respect of major businesses and a tangible product with the capacity to contribute to the future of technology."
          />
          <MediaNewCard
            mediaLogo="/icons/dailytrojan.svg"
            link="https://dailytrojan.com/news/2014/11/09/hacksc-brings-entrepreneurs-together/"
            title={"DailTrojan"}
            description="USC hosted HackSC, a student-run 36-hour hackathon that promotes quick learning and rapid prototyping this weekend at the Annenberg School for Communication and Journalism.With over 700 participants, including students from Stanford and the University of California ..."
          />
          <MediaNewCard
            mediaLogo="/icons/dailytrojan.svg"
            link="https://dailytrojan.com/news/2013/10/13/students-create-apps-for-usc-in-hackathon/"
            title={"DailyTrojan"}
            description="HackSC, held from Friday to Sunday, was USC’s first ever campus-focused hackathon competition. Fourteen teams participated in the competition, which was hosted by the USC Association for Computing Machinery, to create technology products for the general student body."
          />
          <MediaNewCard
            mediaLogo="/icons/spectacles.svg"
            link="https://twitter.com/RippleXDev/status/1223752848099270667"
            title={"@RippleX"}
            description="Our Lead Engineer for APIs 
      @intelliot
      is a 
      @USC
      Alumni, so awesome for him to be back on campus for 
      @hackscofficial
      to demo some of his open source work! #HackSC2020"
          />
          <MediaNewCard
            mediaLogo="/icons/uci.svg"
            link="https://www.informatics.uci.edu/ics-students-win-best-web-app-at-hacksc/"
            title={"UCI Department of Informatics"}
            description="Last month at HackSC, a large-scale hackathon held at USC, the winner of the “Best Mobile or Web App” went to Align. Created by a team of students from the Donald Bren School of Information and Computer Sciences (ICS), the app helps people create interest-driven support groups."
          />
        </Marquee>
      </Container>
      <div
        style={{
          margin: 0,
          padding: 0,
          marginBottom: "-5px",
          backgroundColor: "#94B0F8",
        }}
      >
        <img src="/graphics/wav_bottom.svg" alt="top" />
      </div>
    </div>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 0rem;
  padding: 5rem 0;
  background-color: #001e69;
`;
