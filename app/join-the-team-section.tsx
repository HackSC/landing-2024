import { BodyTextLarge, Button, Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";
import Marquee from "react-fast-marquee";

export const TeamMembersImageCarousel = () => {
  const imagesToShow = 11; // MUST BE EXACT
  return (
    <Marquee direction="right">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {Array.from({ length: imagesToShow }, (_, index) => index + 1).map(
          (el) => (
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "300px",
                marginRight: "1rem",
              }}
              key={el}
            >
              <Image
                fill
                priority
                style={{
                  objectFit: "cover",

                  boxShadow: "2px 6px 25px 0px rgba(135,135,135,0.75)",
                  borderRadius: "6.52px",
                }}
                src={`/join-the-team/${el}.png`}
                alt={"Image of HackSC members"}
              />
            </div>
          ),
        )}
      </div>
    </Marquee>
  );
};

export const JoinTheTeam = () => (
  <Container>
    <Heading style={{ textAlign: "center" }}>JOIN THE TEAM</Heading>
    <BodyTextLarge style={{ textAlign: "center" }}>
      Love what we do and want to be a part of it? Join the team!
    </BodyTextLarge>
    <a href="https://team.hacksc.com" target="_blank">
      <Button variant={"outline"} color="red">
        LEARN MORE
      </Button>
    </a>
    <div style={{ height: "1rem" }} />
    <TeamMembersImageCarousel />
  </Container>
);

const Container = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 15rem;
  margin-bottom: -5rem;
  gap: 2rem;
  background-color: ${Colors.Neutral.PaleBagel};
  /* background: url(/background-join-the-team.png); */
  background-size: contain;
`;
