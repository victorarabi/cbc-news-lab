"use client";

import { CloseRace, Riding } from "@/app/lib/types";
import { Table, Card, Grid, Flex, Box } from "@chakra-ui/react";
import { useColorMode } from "@/app/ui/color-mode";

export default function CloseRaces({
  ridings,
  closeRaces,
}: {
  ridings: Array<Riding>;
  closeRaces: Array<CloseRace>;
}) {
  const bgColor: string = "#111111";
  const { colorMode } = useColorMode();
  const closeRaceRidings: Array<Riding> = [];

  closeRaces.map((closeRace) => {
    ridings.map((riding) => {
      if (closeRace.id == riding.id) {
        closeRaceRidings.push(riding);
      }
    });
  });

  return (
    <Flex direction="column" marginBottom="30px">
      <Box fontSize="xl" marginTop="10px" marginBottom="10px">
        Close Races
      </Box>
      <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap="30px">
        {closeRaceRidings.map((riding: Riding) => {
          const { id, englishName, parties } = riding;
          const { votesLead, partyCode } = parties[0];
          const totalVotesPercentageLead =
            Number(parties[0].totalVotesPercentageLead) * 100;
          const partyColor: string = `var(--${partyCode.toLowerCase()}-${colorMode})`;
          const shadowColor: string = `var(--${partyCode.toLowerCase()}-${colorMode}-shadow)`;
          return (
            <Card.Root key={id} shadow={`2px 2px 7px 2px ${shadowColor}`}>
              <Card.Header>{englishName}</Card.Header>
              <Card.Body>
                <Table.Root size="sm">
                  <Table.Body>
                    <Table.Row bg={{ _dark: bgColor }} fontSize="xl">
                      <Table.Cell
                        borderLeft="5px"
                        borderLeftColor={partyColor}
                        borderLeftStyle="solid"
                        color={partyColor}
                        fontWeight="bold"
                      >
                        {partyCode}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        <p>
                          {totalVotesPercentageLead > 0
                            ? totalVotesPercentageLead
                            : 0}
                          %
                        </p>
                        <p className="text-sm">margin</p>
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        <p>{votesLead}</p>
                        <p className="text-sm">votes</p>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Grid>
    </Flex>
  );
}
