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

  transition: "all 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const styleEventCardTitleText = style({
  color: "#fff",
  fontSize: "1.5rem",
  zIndex: 2,
  textShadow: "0px 0px 11.936684608459473px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
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
