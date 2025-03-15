"use client";

import { Table, Box, Progress } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { useColorMode } from "@/app/ui/color-mode";

export default function ResultsTable({ parties }: { parties: Array<Party> }) {
  const { colorMode } = useColorMode();
  return (
    <Table.Root size="md">
      <Table.Header>
        <Table.Row className="text-sm" bg={{ _dark: "#1a1a1a" }}>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            63 Seats to Majority
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Votes
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Share
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Previous Election Share
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Elected Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Leading Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Total Elected Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Previous Election Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader
            textAlign="end"
            borderBottom="2px"
            borderBottomStyle="solid"
          >
            Net gain
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {parties.map((party) => {
          const partyColor: string =
            colorMode === "dark"
              ? party.e.colourDarkElected
              : party.e.colourLightElected;
          if (party.displayOrder < 4) {
            return (
              <Table.Row
                key={party.id}
                className="text-lg font-medium"
                color={partyColor}
                bg={{ _dark: "#1a1a1a" }}
              >
                <Table.Cell>
                  <Box
                    background={partyColor}
                    color={partyColor}
                    maxWidth="4px"
                    className="grow-0"
                  >
                    |
                  </Box>
                </Table.Cell>
                <Table.Cell>{party.englishName}</Table.Cell>
                <Table.Cell>
                  <Progress.Root
                    max={124}
                    value={party.totalElectedLeadingSeats}
                    width={"250px"}
                    size="lg"
                  >
                    <Progress.Track className="flex">
                      <Progress.Range
                        backgroundColor={partyColor}
                        color="white"
                      ></Progress.Range>
                    </Progress.Track>
                    <Progress.Label
                      textAlign="center"
                      position="absolute"
                      bottom="-3px"
                      right="125px"
                      color={colorMode === "light" ? "grey" : "white"}
                    >
                      |
                    </Progress.Label>
                  </Progress.Root>
                </Table.Cell>
                <Table.Cell textAlign="end">
                  {new Intl.NumberFormat().format(party.totalVotes)}
                </Table.Cell>
                <Table.Cell textAlign="end">
                  {(party.totalVotesPercentage * 100).toFixed(2)}%
                </Table.Cell>
                <Table.Cell textAlign="end">
                  {(party.previousTotalVotesPercentage * 100).toFixed(2)}%
                </Table.Cell>
                <Table.Cell textAlign="end">{party.electedSeats}</Table.Cell>
                <Table.Cell textAlign="end">{party.leadingSeats}</Table.Cell>
                <Table.Cell textAlign="end">
                  {party.totalElectedLeadingSeats}
                </Table.Cell>
                <Table.Cell textAlign="end">{party.previousElected}</Table.Cell>
                <Table.Cell textAlign="end">
                  {party.totalElectedLeadingSeats - party.previousElected}
                </Table.Cell>
              </Table.Row>
            );
          }
        })}
      </Table.Body>
    </Table.Root>
  );
}
