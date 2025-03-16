"use client";

import { useState } from "react";
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {
  Activity,
  CloseRace,
  Party,
  Riding,
  ToggleItems,
} from "@/app/lib/types";
import { ColorModeButton } from "@/app/ui/color-mode";
import { robotoSlab } from "@/app/styles/fonts";

const Header = dynamic(() => import("@/app/ui/header"));
const ElectionToggle = dynamic(() => import("@/app/ui/toggle"));
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
  activity,
}: {
  parties: Array<Party>;
  ridings: Array<Riding>;
  closeRaces: Array<CloseRace>;
  activity: Array<Activity>;
}) {
  const [electionDataToDisplay, setElectionDataToDisplay] = useState("current");
  const electionToggleOptions: Array<ToggleItems> = [
    { value: "current", label: "Current" },
    { value: "previous", label: "Previous" },
  ];
  return (
    <Flex
      bg={{ _dark: "#1a1a1a" }}
      direction="column"
      className="m-h-[1286px] h-auto"
      justifyContent="space-between"
    >
      <Header />
      <div className="md:max-w-[1920p] md:mr-auto md:ml-auto flex flex-col align-start h-auto">
        <div className="flex justify-end">
          <ColorModeButton />
        </div>
        <Box
          fontSize="6xl"
          marginTop="10px"
          marginBottom="10px"
          className={`${robotoSlab.className} antialized leading-[60px]`}
        >
          Ontario Votes
          <span className="font-thin block">2025</span>
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          <p className="font-semibold mb-[10px] text-xl">
            Doug Ford’s PCs cruise to rare 3rd-straight majority
          </p>
          <p className="mb-[10px]">
            It’s the first time since 1959 that a party leader has won three
            consecutive majorities.
          </p>
          <Link
            href="https://www.cbc.ca/news/canada/toronto/ontario-election-2025-results-ford-1.7470513"
            className="text-blue-400 underline"
          >
            Read more coverage here
          </Link>
        </Box>
        <div className="w-fit">
          <p className="m-b-[5px] text-center leading-[60px]">
            Election to display
          </p>
          <ElectionToggle
            items={electionToggleOptions}
            value={electionDataToDisplay}
            setValue={setElectionDataToDisplay}
          />
        </div>
        <Flex alignItems="center">
          <div>
            <MajorityChart
              parties={parties}
              electionDataToDisplay={electionDataToDisplay}
            />
          </div>
          <div className="w-[45%] h-[300px]">
            <ElectionChart
              parties={parties}
              electionDataToDisplay={electionDataToDisplay}
            />
          </div>
        </Flex>
        <ResultsTable parties={parties} />
        <CloseRaces
          ridings={ridings}
          closeRaces={closeRaces}
          activity={activity}
        />
      </div>
      <Footer />
    </Flex>
  );
}
