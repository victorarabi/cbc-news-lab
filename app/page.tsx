import Image from "next/image";
import SVGIMG from "@/public/cbcLogo.svg";
import electionResults from "@/app/services.ts/electionData";
import { Party } from "@/app/lib/types";
import ResultsTable from "@/app/ui/ResultsTable";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Stack, Flex } from "@chakra-ui/react";

export default async function Home() {
  const data = await electionResults();
  let parties: Array<Party> = await data.parties;

  return (
    <div className="flex flex-col p-4 gap-8 ">
      <div className="flex justify-between">
        <Image width={40} src={SVGIMG} alt={""} /> <ColorModeButton />{" "}
      </div>
      <ResultsTable parties={parties} />
    </div>
  );
}
