"use client";

import { Navbar } from "../components/navbar";
import { AboutUs } from "./about-us-section";
import { Hero } from "./hero-section";
import { SignatureEvents } from "./signature-events-section";
import { MeetTheTeam } from "./meet-the-team-section";
import * as Tooltip from "@radix-ui/react-tooltip";
import { JoinTheTeam } from "./join-the-team-section";
import { Media } from "./media-section";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <SignatureEvents />
      <MeetTheTeam />
      <JoinTheTeam />
      <Media />
      <Footer />
    </main>
  );
}
