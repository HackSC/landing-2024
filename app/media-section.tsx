import {
  BodyText,
  BodyTextSmall,
  Colors,
  Heading,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";

const MediaNewCard = (props: {
  link: string;
  title: string;
  description: string;
  mediaLogo: string;
}) => (
  <div
    style={{
      backgroundColor: "white",
      padding: "3rem",
      display: "flex",
      gap: "1rem",
    }}
  >
    <Image
      src={props.link}
      alt="Media logo for HackSC"
      width={90}
      height={90}
    />
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <BodyText style={{ fontWeight: "bold" }}>{props.title}</BodyText>
      <BodyTextSmall>{props.description}</BodyTextSmall>
    </div>
  </div>
);

export const Media = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Heading style={{ color: "white", textAlign: "center" }}>MEDIA</Heading>
        <Subheading2
          style={{ color: Colors.Blue.Periwinkle, textAlign: "center" }}
        >
          HackSC in the news
        </Subheading2>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem;
  background-color: ${Colors.Blue.BlueIvy};
`;
