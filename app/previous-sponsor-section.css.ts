import { Colors } from "@hacksc/sctw-ui-kit";
import { style } from "@vanilla-extract/css";

export const styleContainer = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15rem 0 0",
  backgroundColor: Colors.Blue.Periwinkle,
  gap: "3rem",
  marginTop: "-6rem",
});
