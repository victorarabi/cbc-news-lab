"use client";

import { Table, Box, Progress, Flex } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { useColorMode } from "@/app/ui/color-mode";

export default function ResultsTable({ parties }: { parties: Array<Party> }) {
  const { colorMode } = useColorMode();
  const bgDark: string = "var(--bg-dark)";

  return (
    <Table.Root
      size="sm"
      suppressHydrationWarning
      width={"80%"}
      marginBottom="20px"
    >
      <Table.Header>
        <Table.Row className="text-sm" bg={{ _dark: bgDark }}>
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
            displayOrder,
            englishName,
            totalElectedLeadingSeats,
            totalVotes,
            totalVotesPercentage,
            previousTotalVotesPercentage,
            electedSeats,
            leadingSeats,
            previousElected,
          } = party;
          if (displayOrder < 4) {
            return (
              <Table.Row
                key={id}
                className="text-lg font-medium"
                color={partyColor}
                bg={{ _dark: bgDark }}
              >
                <Table.Cell
                  textAlign="end"
                  borderLeft="5px"
                  borderLeftColor={partyColor}
                  borderLeftStyle="solid"
                  color={partyColor}
                  fontWeight="bold"
                >
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
                <Table.Cell textAlign="end">{party.previousElected}</Table.Cell>
                <Table.Cell textAlign="end">
                  {totalElectedLeadingSeats - previousElected}
                </Table.Cell>
              </Table.Row>
            );
          }
        })}
      </Table.Body>
    </Table.Root>
  );
}
