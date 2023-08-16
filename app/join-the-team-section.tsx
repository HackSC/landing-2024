import { BodyTextLarge, Button, Colors, Heading } from "@hacksc/sctw-ui-kit";
import { styled } from "styled-components";

export const JoinTheTeam = () => (
  <Container>
    <Heading>JOIN THE TEAM</Heading>
    <BodyTextLarge>DEscription</BodyTextLarge>
    <a href="https://team.hacksc.com" target="_blank">
      <Button variant={"outline"} color="red">
        LEARN MORE
      </Button>
    </a>
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  gap: 2rem;
  background-color: ${Colors.Neutral.PaleBagel};
`;
