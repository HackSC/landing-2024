import Image from "next/image";
import {
  Button,
  Colors,
  Heading,
  Input,
  Subheading,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import { FormEventHandler, useState } from "react";
import { Toaster, toast } from "sonner";
import {
  styleHeroContainer,
  styleHeroLeft,
  styleHeroRight,
  styleStairsContainer,
  styleUpdateFormContainer,
} from "./hero-section.css";
import { saveContactToList } from "@/services/sendgrid";

export const Hero = () => {
  const [updateMeEmail, setUpdateMeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitUpdateMe: FormEventHandler = (ev) => {
    ev.preventDefault();
    saveContactToList(updateMeEmail)
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
            priority
            objectFit="contain"
          />
        </StairsContainer>
      </HeroRight>
    </HeroContainer>
  );
};

const StairsContainer = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleStairsContainer} {...props}></div>
);

const UpdateFormContainer = (props: React.ComponentPropsWithoutRef<"form">) => (
  <form className={styleUpdateFormContainer} {...props}></form>
);

const HeroContainer = (props: React.ComponentPropsWithoutRef<"section">) => (
  <section className={styleHeroContainer} {...props}></section>
);

const HeroLeft = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleHeroLeft} {...props}></div>
);

const HeroRight = (props: React.ComponentPropsWithoutRef<"div">) => (
  <div className={styleHeroRight} {...props}></div>
);
