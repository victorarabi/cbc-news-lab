import Image from "next/image";
import Link from "next/link";
import { DarkMode } from "@/app/ui/color-mode";
import SVGIMG from "@/public/cbcLogo.svg";

/**
 * Footer component.
 *
 * @component
 * @returns Footer.
 */
export default function Footer() {
  return (
    <div className="bg-[#030303]">
      <DarkMode>
        <div className="m-auto max-w-[1920px] flex p-4 justify-between items-center">
          <Link
            href="http://www.cbc.radio-canada.ca/"
            className="flex items-center text-[15px] color-[#efefef] font-medium"
          >
            <p>CBC</p>
            <Image width={20} src={SVGIMG} alt={""} />
            <p>Radio-Canada</p>
          </Link>
          <div className="color-[#efefef] font-normal text-[10px]">
            ©2025 CBC/Radio-Canada. All rights reserved.
          </div>
          <Link
            href="http://ici.radio-canada.ca/"
            className="flex items-center text-[15px] color-[#efefef] font-medium"
          >
            Visitez Radio-Canada.ca
          </Link>
        </div>
      </DarkMode>
    </div>
  );
}
