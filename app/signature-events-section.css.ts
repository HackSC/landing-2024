import { createVar, style } from "@vanilla-extract/css";

export const $borderColor = createVar();

export const styleEventCardContainer = style({
  position: "relative",
  width: "276.931px",
  height: "425.742px",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  zIndex: 9,
  alignItems: "center",
  justifyContent: "end",
  border: `10px solid ${$borderColor}`,
  color: "white",

  transition: "all 0.1s ease-in-out",
  ":hover": {
    transform: "scale(1.02)",
  },
});

export const styleSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  padding: "5rem 4rem",
});

export const styleEventCardsContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
  flexWrap: "wrap",
});
