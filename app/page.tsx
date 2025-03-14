import Image from "next/image";
import SVGIMG from "@/public/cbcLogo.svg";
import electionResults from "@/app/services.ts/electionData";

export default async function Home() {
  const data = await electionResults();
  const { parties, ridings, extras } = data;
  return (
    <div className="flex flex-col p-4 gap-8">
      <Image width={40} src={SVGIMG} alt={""} />
      <p>Hello, World!</p>
    </div>
  );
}
