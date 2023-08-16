import { BodyText, Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";

export const AboutUs = () => (
  <SectionContainer>
    <Block>
      <Subblock>
        <Heading>WHO WE ARE</Heading>
        <BodyText>
          We are the driving force behind innovation and collaboration at USC.
          With a passion for technology and creativity, we unite diverse minds
          to cultivate an inclusive and dynamic hackathon experience. Our
          community is a hub for aspiring creators, developers, and visionaries,
          shaping the future through hands-on problem-solving and boundless
          imagination.
        </BodyText>
      </Subblock>
      <Subblock>
        <Image
          src="/team-pics/who-we-are-pic.png"
          width={481}
          height={396}
          alt="A picture of the HackSC team at HackSC 2023, depicting one of our speakers, the CEO of Strava"
          style={{
            boxShadow: `14px 16px 0px 4px ${Colors.Yellow.Yuhlow}`,
            borderRadius: "10px",
          }}
        />
      </Subblock>
    </Block>
    <Block>
      <Subblock>
        <Image
          src="graphics/palm-tree-red-blue.svg"
          alt="A picture of the HackSC team at HackSC 2023, depicting one of our speakers, the CEO of Strava"
          width={500}
          height={700}
        />
      </Subblock>
      <Subblock>
        <Heading>WHAT WE DO</Heading>
        <BodyText>
          At HackSC, we curate transformative hackathons and conferences that
          empower participants to push the boundaries of their potential.
          Through our carefully crafted events, like the ones showcased on our
          events page, we foster an environment where learning, experimenting,
          and networking thrive.
        </BodyText>
      </Subblock>
    </Block>
  </SectionContainer>
);

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 5rem 0;
  background-color: #fef7e5;
`;

const Block = styled.div`
  display: flex;
  gap: 5rem;
`;

const Subblock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
