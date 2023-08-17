import { BodyText, BodyTextSmall, Colors } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import { styled } from "styled-components";

const socialMedias: { href: string; src: React.ReactNode; alt: string }[] = [
  {
    src: (
      <Image
        src={"/icons/linkedin.svg"}
        alt="Linkedin link for HackSC"
        width={30}
        height={30}
      />
    ),
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/hacksc/",
  },
  {
    src: (
      <Image
        src={"/icons/twitter.svg"}
        alt="Twitter link for HackSC"
        width={30}
        height={30}
      />
    ),
    alt: "Twitter",
    href: "https://twitter.com/hackscofficial",
  },
  {
    src: (
      <Image
        src={"/icons/facebook.svg"}
        alt="Twitter link for HackSC"
        width={30}
        height={30}
      />
    ),
    alt: "Facebook",
    href: "https://www.facebook.com/hackscofficial/",
  },
  {
    src: (
      <Image
        src={"/icons/instagram.svg"}
        alt="Instagram link for HackSC"
        width={30}
        height={30}
      />
    ),
    alt: "Instagram",
    href: "https://www.instagram.com/hackscofficial/",
  },
  {
    src: (
      <Image
        src={"/icons/email.svg"}
        alt="Email for HackSC"
        width={30}
        height={30}
      />
    ),
    alt: "Email",
    href: "mailto:team@hacksc.com",
  },
];

export const Footer = () => (
  <Container>
    <Image
      src={"/hibiscus-2024.svg"}
      alt="Hibiscus logo of HackSC"
      width={80}
      height={67}
    />
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <BodyTextSmall style={{ fontWeight: 500, color: "white" }}>
        Contact Us
      </BodyTextSmall>
      <BodyTextSmall style={{ fontWeight: 300, color: "white" }}>
        Reach out to us at{" "}
        <a href="mailto:team@hacksc.com" style={{ color: "white" }}>
          <span>team@hacksc.com</span>
        </a>
        ! or on social media if you have any questions or want more information.
      </BodyTextSmall>
      <BodyTextSmall style={{ fontWeight: 300, color: "white" }}>
        Want to talk about sponsorship? Let us know at{" "}
        <a href="mailto:sponsorship@hacksc.com" style={{ color: "white" }}>
          <span>sponsorship@hacksc.com!</span>
        </a>
      </BodyTextSmall>
    </div>
    <SocialMediaAndAffiliatesContainer>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {socialMedias.map((el) => (
          <SocialIconContainer href={el.href} target="_blank" key={el.alt}>
            {el.src}
          </SocialIconContainer>
        ))}
      </div>
      <BodyTextSmall style={{ color: "white", fontWeight: 300 }}>
        © 2023. HackSC or its affiliates. All rights reserved.
      </BodyTextSmall>
    </SocialMediaAndAffiliatesContainer>
  </Container>
);

const Container = styled.footer`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.Blue.BlueIvy};
  padding: 3rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const SocialIconContainer = styled.a`
  transition: all 0.3s ease-in-out;
  :hover {
    transform: translateY(-10%);
  }
`;

const SocialMediaAndAffiliatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 600px) {
    align-items: center;
    gap: 1rem;
  }
`;
