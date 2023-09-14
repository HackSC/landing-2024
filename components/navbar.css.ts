import { style } from "@vanilla-extract/css";

export const styleNavlink = style({
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const styleNav = style({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "1rem 3rem",
  gap: "1rem",

  "@media": {
    "(max-width: 400px)": {
      flexDirection: "column",
    },
  },
});
