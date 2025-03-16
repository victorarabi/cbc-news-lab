"use client";

import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { CloseRace, Party, Riding } from "@/app/lib/types";
import { ColorModeButton } from "@/app/ui/color-mode";
const Header = dynamic(() => import("@/app/ui/header"), { ssr: false });
const ResultsTable = dynamic(() => import("@/app/ui/results-table"), {
  ssr: false,
});
const CloseRaces = dynamic(() => import("@/app/ui/close-race"), { ssr: false });

export default function App({
  parties,
  ridings,
  closeRaces,
}: {
  parties: Array<Party>;
  ridings: Array<Riding>;
  closeRaces: Array<CloseRace>;
}) {
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
