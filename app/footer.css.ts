import { Colors } from "@hacksc/sctw-ui-kit";
import { style } from "@vanilla-extract/css";

export const styleContainer = style({
  display: "flex",
  gap: "3rem",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: Colors.Blue.BlueIvy,
  padding: "3rem",
  "@media": {
    "(max-width: 700px)": {
      flexDirection: "column",
    },
  },
});

export const styleSocialIconContainer = style({
  transition: "all 0.3s ease-in-out",
  ":hover": {
    transform: "translateY(-10%)",
  },
});

export const styleSocialMediaAndAffiliatesContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  "@media": {
    "(max-width: 600px)": {
      alignItems: "center",
      gap: "1rem",
    },
  },
});
