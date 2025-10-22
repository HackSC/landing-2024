import { Colors, Heading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { styleContainer } from "./previous-sponsor-section.css";

export const PreviousSponsor = () => {
  const sponsorOrder = [
    "2k",
    "accenture",
    "always-ai",
    "amino",
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
    "piara2",
  ];
  return (
    <Container>
      <Heading style={{ color: Colors.Blue.BlueIvy, textAlign: "center" }}>
        PREVIOUS SPONSORS
      </Heading>
      <Marquee speed={50}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {sponsorOrder.map((el) => (
            <div key={el} style={{ borderRadius: "10%", overflow: "hidden" }}>
              <Image
                src={`/sponsors/${el}.svg`}
                alt={el}
                width={170}
                height={170}
              />
            </div>
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

const Container = (props: React.ComponentPropsWithoutRef<"section">) => (
  <section className={styleContainer} {...props}></section>
);
