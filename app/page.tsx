import electionResults from "@/app/services.ts/electionData";
import { Flex } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { ColorModeButton } from "@/app/ui/color-mode";
import Header from "@/app/ui/header";
import ResultsTable from "@/app/ui/results-table";

export default async function Home() {
  const data = await electionResults();
  let parties: Array<Party> = await data.parties;

  return (
    <Flex bg={{ _dark: "#1a1a1a" }} direction="column" className="h-dvh">
      <Header />
      <div className="flex flex-col p-4 gap-8">
        <div className="md:max-w-[1920p] md:m-auto flex flex-col align-center">
          <div className="flex justify-end">
            <ColorModeButton />
          </div>
          <ResultsTable parties={parties} />
        </div>
      </div>
    </Flex>
  );
}
