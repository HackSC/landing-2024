import Link from "next/link";
import { LogoLandscape } from "./landscape-logo";
import { styled } from "styled-components";
import { Colors, NavigationText } from "@hacksc/sctw-ui-kit";

const homepageLink = "https://hacksc.com";
const teampageLink = "https://team.hacksc.com";
export const Navbar = () => (
  <Nav>
    <div>
      <LogoLandscape />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <Navlink href={homepageLink} style={{ color: Colors.Neutral.Black }}>
        <NavigationText>Overview</NavigationText>
      </Navlink>
      <Navlink href={teampageLink}>
        <NavigationText>Team</NavigationText>
      </Navlink>
    </div>
  </Nav>
);

const Navlink = styled(Link)`
  color: var(--redward, #ff514f);
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 3rem;
  gap: 1rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
