import StyledComponentsRegistry from "./registry";
import { Analytics } from "@vercel/analytics/react";

import "@hacksc/sctw-ui-kit/dist/index.css";

export const metadata = {
  title: "HackSC",
  description:
    "We host one of the largest student-run hackathons hosted at the University of Southern California, with over 800 attendees from all around the nation. We foster a community of entrepreneurs, hackers, and innovators to create a better tomorrow.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hacksc.com",
    title: "HackSC",
    description:
      "We host one of the largest student-run hackathons hosted at the University of Southern California, with over 800 attendees from all around the nation. We foster a community of entrepreneurs, hackers, and innovators to create a better tomorrow.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HackSC logo",
      },
    ],
    site_name: "HackSC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body style={{ padding: 0, margin: 0 }}>{children}</body>
    </html>
  );
}
