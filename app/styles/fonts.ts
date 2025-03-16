import { Radio_Canada, Roboto_Slab } from "next/font/google";

export const radioCanada = Radio_Canada({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-radio-canada",
});

export const robotoSlab = Roboto_Slab({
  weight: ["100", "500"],
  subsets: ["latin"],
});
