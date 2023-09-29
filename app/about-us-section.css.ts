import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const styleSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  padding: "10rem 5rem 0",
  alignItems: "center",
  backgroundColor: "#fef7e5",
  gap: "3rem",
});

export const styleBlock = recipe({
  base: {
    display: "flex",
    gap: "5rem",
    "@media": {
      "(max-width: 1000px)": {
        flexDirection: "column",
      },
    },
  },

  variants: {
    $reverseOnResponsive: {
      true: {
        "@media": {
          "(max-width: 1000px)": {
            flexDirection: "column-reverse",
          },
        },
      },
    },
  },
});

export const styleSubblock = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  maxWidth: "30rem",
});

export const styleFirstImageContainer = style({
  position: "relative",
  width: "450px",
  height: "360px",

  "@media": {
    "(max-width: 450px)": {
      width: "250px",
    },
  },
});

export const styleSecondImageContainer = style({
  position: "relative",
  width: "490px",
  height: "680px",

  "@media": {
    "(max-width: 450px)": {
      width: "250px",
      height: "400px",
    },
  },
});
