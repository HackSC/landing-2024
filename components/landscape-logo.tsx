"use client";

import Image from "next/image";
import { Subheading } from "@hacksc/sctw-ui-kit";

export const LogoLandscape = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Image
      src={"/hibiscus-2024.svg"}
      alt="Hibiscus logo of HackSC"
      width={51.97}
      height={43}
    />
    <Subheading>HackSC</Subheading>
  </div>
);
