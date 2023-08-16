import Image from "next/image";
import { styled } from "styled-components";
import {
  Button,
  Colors,
  Heading,
  Input,
  Subheading,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import { useState } from "react";

export const Hero = () => {
  const [updateMeEmail, setUpdateMeEmail] = useState("");

  const onSubmitUpdateMe = () => {};

  return (
    <HeroContainer>
      <HeroLeft>
        <Heading>HackSC</Heading>
        <Subheading style={{ color: "#797979" }}>
          The multidisciplinary team behind USC’s largest innovation events!
        </Subheading>
        <Subheading2 style={{ color: Colors.Blue.Bloo }}>
          Subscribe to our email updates!
        </Subheading2>

        <UpdateFormContainer onSubmit={onSubmitUpdateMe}>
          <Input
            placeholder="email@hacksc.com"
            type={"email"}
            required
            onChange={(ev: any) => setUpdateMeEmail(ev.target.value)}
            value={updateMeEmail}
          />
          <Button type="submit" variant="solid" color="blue" fitWidth>
            Sign up for updates
          </Button>
        </UpdateFormContainer>
      </HeroLeft>
      <HeroRight>
        <Image
          src="/graphics/stairs.svg"
          width={398}
          height={378}
          alt={"A graphic of a staircase"}
        />
      </HeroRight>
    </HeroContainer>
  );
};

const UpdateFormContainer = styled.form`
  display: flex;
  gap: 10px;
`;

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroRight = styled.div``;
