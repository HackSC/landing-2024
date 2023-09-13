import { Colors } from "@hacksc/sctw-ui-kit";
import { style } from "@vanilla-extract/css";

export const styleSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: Colors.Blue.BlueIvy,
  gap: "2rem",
  padding: "5rem 0",
});

export const styleAvatarContainer = style({
  transition: "transform 1s ease-out",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const styleTeamMembersContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  width: "100%",
  flexWrap: "wrap",
  padding: "0.3rem 0",
});
