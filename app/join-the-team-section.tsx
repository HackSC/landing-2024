import { BodyTextLarge, Button, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { styleContainer } from "./join-the-team-section.css";

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

const Container = (props: React.ComponentPropsWithoutRef<"section">) => (
  <section className={styleContainer} {...props}></section>
);
