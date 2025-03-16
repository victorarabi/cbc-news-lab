"use client";

import { Table, Box, Progress, Flex } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { useColorMode } from "@/app/ui/color-mode";
import { robotoSlab } from "../styles/fonts";

export default function ResultsTable({ parties }: { parties: Array<Party> }) {
  const { colorMode } = useColorMode();
  const bgDark: string = "var(--bg-dark)";
  return (
    <Flex direction="column">
      <Box
        fontSize="6xl"
        marginTop="10px"
        marginBottom="10px"
        className={`${robotoSlab.className} antialized`}
      >
        Ontario Votes
      </Box>
      <Table.Root size="sm" suppressHydrationWarning>
        <Table.Header>
          <Table.Row className="text-sm" bg={{ _dark: bgDark }}>
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

            const {
              id,
              englishName,
              totalElectedLeadingSeats,
              totalVotes,
              totalVotesPercentage,
              previousTotalVotesPercentage,
              electedSeats,
              leadingSeats,
              previousElected,
            } = party;
            if (party.displayOrder < 4) {
              return (
                <Table.Row
                  key={id}
                  className="text-lg font-medium"
                  color={partyColor}
                  bg={{ _dark: bgDark }}
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
                  <Table.Cell>{englishName}</Table.Cell>
                  <Table.Cell>
                    <Progress.Root
                      max={124}
                      value={totalElectedLeadingSeats}
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
                    {new Intl.NumberFormat().format(totalVotes)}
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    {(totalVotesPercentage * 100).toFixed(2)}%
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    {(previousTotalVotesPercentage * 100).toFixed(2)}%
                  </Table.Cell>
                  <Table.Cell textAlign="end">{electedSeats}</Table.Cell>
                  <Table.Cell textAlign="end">{leadingSeats}</Table.Cell>
                  <Table.Cell textAlign="end">
                    {totalElectedLeadingSeats}
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    {party.previousElected}
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    {totalElectedLeadingSeats - previousElected}
                  </Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}
