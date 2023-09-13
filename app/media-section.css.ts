import { style } from "@vanilla-extract/css";

export const styleContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  padding: "10rem 0",
  backgroundImage: " url(/media-wavy-background-blue.svg)",
  backgroundSize: "cover",
  zIndex: 999,
});
