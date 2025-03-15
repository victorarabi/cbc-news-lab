"use client";

import { Table, Box, Progress, Center } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { useColorMode } from "@/components/ui/color-mode";

export default function ResultsTable({ parties }: { parties: Array<Party> }) {
  const { colorMode } = useColorMode();
  return (
    <Table.Root variant="line" size="md" width="80%">
      <Table.Header>
        <Table.Row className="text-xs">
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            63 Ridings to majority
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Votes</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Share</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">
            Previous Election Share
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Elected Seats</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Leading Seats</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">
            Total Elected Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">
            Previous Election Seats
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Net gain</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {parties.map((party) => {
          const color: string =
            colorMode === "dark"
              ? party.e.colourDarkElected
              : party.e.colourLightElected;
          if (party.displayOrder < 4) {
            return (
              <Table.Row key={party.id} className="text-red-50" color={color}>
                <Table.Cell>
                  <Box
                    background={color}
                    width="100%"
                    height="100%"
                    color={color}
                  >
                    _
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
                        backgroundColor={color}
                        color="white"
                      ></Progress.Range>
                    </Progress.Track>
                    <Progress.Label
                      textAlign="center"
                      position="absolute"
                      bottom="-4px"
                      right="125px"
                      color="white"
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
