import { style } from "@vanilla-extract/css";

export const styleStairsContainer = style({
  position: "relative",
  width: "398px",
  height: "378px",

  "@media": {
    "(max-width: 400px)": {
      width: "300px",
    },
  },
});

export const styleUpdateFormContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const styleHeroContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5rem",
  gap: "5rem",

  "@media": {
    "(max-width: 800px)": {
      flexDirection: "column",
    },
  },
});

export const styleHeroLeft = style({
  maxWidth: "30rem",
  display: "flex",
  flexDirection: "column",
});

export const styleHeroRight = style({});
