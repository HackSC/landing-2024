import { Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { styled } from "styled-components";

export const PreviousSponsor = () => {
  const sponsorOrder = [
    "2k",
    "accenture",
    "always-ai",
    "do",
    "elastic",
    "gcp",
    "headspace",
    "honey",
    "intersystems",
    "john-deere",
    "meta",
    "ng",
    "s",
    "snap",
    "vercel",
    "x",
  ];
  return (
    <Container>
      <Heading style={{ color: Colors.Blue.BlueIvy, textAlign: "center" }}>
        PREVIOUS SPONSORS
      </Heading>
      <Marquee>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {sponsorOrder.map((el) => (
            <Image
              key={el}
              src={`/sponsors/${el}.svg`}
              alt={el}
              width={150}
              height={150}
            />
          ))}
        </div>
        <div style={{ marginRight: "1rem" }} />
      </Marquee>
      <Image
        src="/graphics/chimney-house.svg"
        width={540}
        height={621}
        alt="Chimney house"
        style={{ alignSelf: "end" }}
      />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 0 0;
  background-color: ${Colors.Blue.Periwinkle};
  gap: 3rem;
  margin-top: -6rem;
`;
