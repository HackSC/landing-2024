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
import { FormEventHandler, useState } from "react";
import { registerWaitlist } from "../services/getwaitlist";
import { Toaster, toast } from "sonner";

export const Hero = () => {
  const [updateMeEmail, setUpdateMeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitUpdateMe: FormEventHandler = (ev) => {
    ev.preventDefault();
    registerWaitlist(updateMeEmail)
      .then(() => {
        toast.success("You've signed up for updates to HackSC!", {
          description:
            "We will send out emails and updates about our upcoming events soon. For any inquiries, please direct them to team@hacksc.com.",
        });
        setSubscribed(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops! Something went wrong", {
          description: "It's something on us. Please try again later.",
        });
      });
  };

  return (
    <HeroContainer>
      <Toaster richColors />
      <HeroLeft>
        <Heading>HackSC</Heading>
        <Subheading style={{ color: "#797979" }}>
          The multidisciplinary team behind USC’s largest innovation events!
        </Subheading>
        {subscribed && (
          <Subheading2 style={{ color: Colors.Red.Redward }}>
            Thank you! 🥳
          </Subheading2>
        )}

        {!subscribed && (
          <>
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
          </>
        )}
      </HeroLeft>
      <HeroRight>
        <StairsContainer>
          <Image
            src="/graphics/stairs.svg"
            alt={"A graphic of a staircase"}
            fill
            objectFit="contain"
          />
        </StairsContainer>
      </HeroRight>
    </HeroContainer>
  );
};

const StairsContainer = styled.div`
  position: relative;
  width: 398px;
  height: 378px;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const UpdateFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
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
  max-width: 30rem;
  display: flex;
  flex-direction: column;
`;

const HeroRight = styled.div``;
