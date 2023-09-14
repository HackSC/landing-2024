import Link, { LinkProps } from "next/link";
import { LogoLandscape } from "./landscape-logo";
import { Colors, NavigationText } from "@hacksc/sctw-ui-kit";
import * as styles from "./navbar.css";

const homepageLink = "https://hacksc.com";
const teampageLink = "https://team.hacksc.com";
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
    </div>
  </Nav>
);

const Navlink = (props: LinkProps & React.ComponentPropsWithoutRef<"a">) => (
  <Link className={styles.styleNavlink} {...props}></Link>
);

const Nav = (props: React.ComponentPropsWithoutRef<"nav">) => (
  <nav className={styles.styleNav} {...props}></nav>
);
