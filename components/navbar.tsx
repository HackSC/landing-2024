import Link, { LinkProps } from "next/link";
import { LogoLandscape } from "./landscape-logo";
import { Button, Colors, NavigationText } from "@hacksc/sctw-ui-kit";
import * as styles from "./navbar.css";

const homepageLink = "/";
const teampageLink = "https://team.hacksc.com";
const applyLink = "https://usc.qualtrics.com/jfe/form/SV_3sKstom47IoMdtI";
export const Navbar = () => (
  <Nav>
    <div>
      <LogoLandscape />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <Navlink href={homepageLink} style={{ color: Colors.Red.Redward }}>
        <NavigationText>Overview</NavigationText>
      </Navlink>
      <Navlink href={teampageLink}>
        <NavigationText>Team</NavigationText>
      </Navlink>
      <a href={applyLink} target="_blank" rel="noopener noreferrer">
        <Button
          variant="solid"
          color="red"
          fitWidth
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            whiteSpace: "nowrap",
            fontFamily: '"filson-pro", sans-serif',
            fontSize: "1.125rem",
            padding: "0.75rem 1.5rem",
          }}
        >
          Apply to AI @ USC Hackathon
          <ArrowRight />
        </Button>
      </a>
    </div>
  </Nav>
);

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Navlink = (props: LinkProps & React.ComponentPropsWithoutRef<"a">) => (
  <Link className={styles.styleNavlink} {...props}></Link>
);

const Nav = (props: React.ComponentPropsWithoutRef<"nav">) => (
  <nav className={styles.styleNav} {...props}></nav>
);
