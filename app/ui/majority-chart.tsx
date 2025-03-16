"use client";

import { Table, Progress } from "@chakra-ui/react";
import { Party } from "@/app/lib/types";
import { useColorMode } from "@/app/ui/color-mode";

export default function MajorityChart({ parties }: { parties: Array<Party> }) {
  const { colorMode } = useColorMode();
  const bgDark: string = "var(--bg-dark)";
  const otherPartyColor = "var(--other-party)";
  let otherTotalElectedLeadingSeats: number = 0;

  return (
    <Table.Root size="sm" suppressHydrationWarning>
      <Table.Header>
        <Table.Row className="text-sm" bg={{ _dark: bgDark }}>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            63 Seats to Majority
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {parties.map((party, index) => {
          const partyColor: string =
            colorMode === "dark"
              ? party.e.colourDarkElected
              : party.e.colourLightElected;

          const { id, displayOrder, englishName, totalElectedLeadingSeats } =
            party;
          if (displayOrder < 4) {
            return (
              <Table.Row
                key={id}
                className="text-lg font-medium"
                color={partyColor}
                bg={{ _dark: bgDark }}
              >
                <Table.Cell
                  borderLeft="5px"
                  borderLeftColor={partyColor}
                  borderLeftStyle="solid"
                  color={partyColor}
                  fontWeight="bold"
                >
                  {englishName}
                </Table.Cell>
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
              </Table.Row>
            );
          } else if (index <= parties.length - 1) {
            otherTotalElectedLeadingSeats =
              otherTotalElectedLeadingSeats + totalElectedLeadingSeats;

            if (index === parties.length - 1) {
              return (
                <Table.Row
                  key={id}
                  className="text-lg font-medium"
                  color={otherPartyColor}
                  bg={{ _dark: bgDark }}
                >
                  <Table.Cell
                    borderLeft="5px"
                    borderLeftColor={otherPartyColor}
                    borderLeftStyle="solid"
                    color={otherPartyColor}
                    fontWeight="bold"
                  >
                    Other
                  </Table.Cell>
                  <Table.Cell>
                    <Progress.Root
                      max={124}
                      value={otherTotalElectedLeadingSeats}
                      width={"250px"}
                      size="lg"
                    >
                      <Progress.Track className="flex">
                        <Progress.Range
                          backgroundColor={otherPartyColor}
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
                </Table.Row>
              );
            }
          }
        })}
      </Table.Body>
    </Table.Root>
  );
}
