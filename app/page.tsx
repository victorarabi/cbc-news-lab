import electionResults from "@/app/services.ts/electionData";
import { Flex } from "@chakra-ui/react";
import { CloseRace, Party, Riding } from "@/app/lib/types";
import { ColorModeButton } from "@/app/ui/color-mode";
import Header from "@/app/ui/header";
import ResultsTable from "@/app/ui/results-table";
import CloseRaces from "@/app/ui/close-race";

export default async function Home() {
  const data = await electionResults();
  const {
    parties,
    ridings,
  }: { parties: Array<Party>; ridings: Array<Riding> } = await data;
  const { closeRaces }: { closeRaces: Array<CloseRace> } = await data.extras;
  return (
    <Flex
      bg={{ _dark: "#1a1a1a" }}
      direction="column"
      className="h-dvh"
      suppressHydrationWarning
    >
      <Header />
      <div className="flex flex-col p-4 gap-8">
        <div className="md:max-w-[1920p] md:m-auto flex flex-col align-center">
          <div className="flex justify-end">
            <ColorModeButton />
          </div>
          <ResultsTable parties={parties} />
          <CloseRaces ridings={ridings} closeRaces={closeRaces} />
        </div>
      </div>
    </Flex>
  );
}
