import { BodyText, Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import {
  styleBlock,
  styleFirstImageContainer,
  styleSecondImageContainer,
  styleSectionContainer,
  styleSubblock,
} from "./about-us-section.css";

export const AboutUs = () => (
  <SectionContainer>
    <Block $reverseOnResponsive={false}>
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
        <FirstImageContainer>
          <Image
            src="/team-pics/who-we-are-pic.png"
            fill
            objectFit="cover"
            alt="A picture of the HackSC team at HackSC 2023, depicting one of our speakers, the CEO of Strava"
            style={{
              boxShadow: `14px 16px 0px 4px ${Colors.Yellow.Yuhlow}`,
              borderRadius: "10px",
            }}
          />
        </FirstImageContainer>
      </Subblock>
    </Block>
    <Block $reverseOnResponsive>
      <Subblock>
        <SecondImageContainer>
          <Image
            src="graphics/palm-tree-red-blue.svg"
            alt="A graphic of 2 palm trees, one red and one blue"
            fill
            objectFit="contain"
          />
        </SecondImageContainer>
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

const SectionContainer = (props: React.ComponentPropsWithoutRef<"section">) => (
  <section className={styleSectionContainer} {...props}></section>
);

interface BlockProps extends React.ComponentPropsWithoutRef<"div"> {
  $reverseOnResponsive?: boolean;
}
const Block = ({ $reverseOnResponsive, ...props }: BlockProps) => (
  <div className={styleBlock({ $reverseOnResponsive })} {...props}></div>
);

const Subblock = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleSubblock} {...props}></div>
);

const FirstImageContainer = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleFirstImageContainer} {...props}></div>
);

const SecondImageContainer = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleSecondImageContainer} {...props}></div>
);
