import Link from "next/link";
import { LogoLandscape } from "./landscape-logo";
import { styled } from "styled-components";
import { BodyTextLarge } from "@hacksc/sctw-ui-kit";

export const Navbar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 3rem",
    }}
  >
    <div>
      <LogoLandscape />
    </div>
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <a href="">
        <Navlink>Overview</Navlink>
      </a> */}
    </div>
  </nav>
);

const Navlink = styled(BodyTextLarge)`
  color: var(--redward, #ff514f);
  font-family: ABeeZee;
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
`;
