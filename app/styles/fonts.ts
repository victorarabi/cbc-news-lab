import { Radio_Canada, Roboto_Slab } from "next/font/google";

// Main font of the page
export const radioCanada = Radio_Canada({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-radio-canada",
});

// used to highlight titles
export const robotoSlab = Roboto_Slab({
  weight: ["100", "500"],
  subsets: ["latin"],
});
