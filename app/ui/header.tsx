"use client";

import Image from "next/image";
import SVGIMG from "@/public/cbcLogo.svg";
import Link from "next/link";
import { DarkMode } from "@/app/ui/color-mode";

export default function Header() {
  return (
    <header className="bg-[#272c30]">
      <DarkMode>
        <div className="m-auto max-w-[1920px] flex p-2">
          <Image width={20} src={SVGIMG} alt={""} />
          <Link
            href="https://www.cbc.ca/news"
            className="flex items-center text-[20px] color-[#efefef]"
          >
            <p className="font-semibold" color={`#efefef`}>
              CBC
            </p>
            <p className="font-thin" color={`#efefef`}>
              NEWS
            </p>
          </Link>
        </div>
      </DarkMode>
    </header>
  );
}
