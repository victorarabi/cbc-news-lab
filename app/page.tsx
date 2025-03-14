import Image from "next/image";
import SVGIMG from "./cbcLogo.svg";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-8">
      <Image width={40} src={SVGIMG} alt={""} />
      <p>Hello, World!</p>
    </div>
  );
}
