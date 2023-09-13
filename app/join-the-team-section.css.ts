import { Colors } from "@hacksc/sctw-ui-kit";
import { style } from "@vanilla-extract/css";

export const styleContainer = style({
  display: "flex",
  position: "relative",
  zIndex: 1,
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0 15rem",
  marginBottom: "-5rem",
  gap: "2rem",
  backgroundColor: Colors.Neutral.PaleBagel,
  /* background: url(/background-join-the-team.png); */
  backgroundSize: "contain",
});
