// import { Palette, PaletteColor, TypeBackground } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor
  }

  interface TypeBackground {
    light: string
  }
}