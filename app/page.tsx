"use client";

import { Navbar } from "../components/navbar";
import { AboutUs } from "./about-us-section";
import { Hero } from "./hero-section";
import { SignatureEvents } from "./signature-events-section";
import { MeetTheTeam } from "./meet-the-team-section";
import { JoinTheTeam } from "./join-the-team-section";
import { Media } from "./media-section";
import { Footer } from "./footer";
import { PreviousSponsor } from "./previous-sponsor-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <SignatureEvents />
      {/* Temporarily removing the MeetTheTeam section due to AWS "suspended account" issue. */}
      {/* <MeetTheTeam />  */}
      <JoinTheTeam />
      <Media />
      <PreviousSponsor />
      <Footer />
    </main>
  );
}
