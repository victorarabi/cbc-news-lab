"use client";

import { Flex, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { CloseRace, Party, Riding } from "@/app/lib/types";
import { ColorModeButton } from "@/app/ui/color-mode";
import { robotoSlab } from "@/app/styles/fonts";

const Header = dynamic(() => import("@/app/ui/header"));
const MajorityChart = dynamic(() => import("@/app/ui/majority-chart"), {
  ssr: false,
});
const ElectionChart = dynamic(() => import("@/app/ui/election-chart"), {
  ssr: false,
});
const ResultsTable = dynamic(() => import("@/app/ui/results-table"), {
  ssr: false,
});
const CloseRaces = dynamic(() => import("@/app/ui/close-race"), { ssr: false });
const Footer = dynamic(() => import("@/app/ui/footer"));

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
      justifyContent="space-between"
    >
      <Header />
      <div className="md:max-w-[1920p] md:mr-auto md:ml-auto flex flex-col align-start h-full">
        <div className="flex justify-end">
          <ColorModeButton />
        </div>
        <Box
          fontSize="6xl"
          marginTop="10px"
          marginBottom="10px"
          className={`${robotoSlab.className} antialized`}
        >
          Ontario Votes
        </Box>
        <Flex alignItems="center">
          <div>
            <MajorityChart parties={parties} />
          </div>
          <div className="w-[45%] h-[300px]">
            <ElectionChart parties={parties} />
          </div>
        </Flex>
        <ResultsTable parties={parties} />
        <CloseRaces ridings={ridings} closeRaces={closeRaces} />
      </div>
      <Footer />
    </Flex>
  );
}
