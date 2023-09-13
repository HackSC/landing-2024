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
      false: {
        "@media": {
          "(max-width: 1000px)": {
            flexDirection: "column",
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
    "(max-width: 400px)": {
      width: "300px",
    },
  },
});

export const styleSecondImageContainer = style({
  position: "relative",
  width: "490px",
  height: "680px",

  "@media": {
    "(max-width: 400px)": {
      width: "350px",
      height: "500px",
    },
  },
});
