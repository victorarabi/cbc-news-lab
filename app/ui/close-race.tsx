"use client";

import { Tooltip } from "@/app/ui/close-race-tooltip";
import { Activity, CloseRace, Riding } from "@/app/lib/types";
import { Table, Card, Grid, Flex, Box, JsxElement } from "@chakra-ui/react";
import { useColorMode } from "@/app/ui/color-mode";

export default function CloseRaces({
  ridings,
  closeRaces,
  activity,
}: {
  ridings: Array<Riding>;
  closeRaces: Array<CloseRace>;
  activity: Array<Activity>;
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
      <Box
        fontSize="xl"
        marginTop="10px"
        marginBottom="10px"
        display="flex"
        alignItems="center"
      >
        Close Races
        <p className="text-xs ml-[5px]">(Hove over card for more details)</p>
      </Box>
      <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap="30px">
        {closeRaceRidings.map((riding: Riding) => {
          const { id, englishName, parties } = riding;
          const { votesLead, partyCode } = parties[0];
          let secondParty: string = parties[1].partyCode;
          const totalVotesPercentageLead =
            Number(parties[0].totalVotesPercentageLead) * 100;
          let position: string = "";
          activity.map((act) => {
            if (act.riding_id === id) {
              position = act.icon_text;
            }
          });
          const partyColor: string = `var(--${partyCode.toLowerCase()}-${colorMode})`;
          const shadowColor: string = `var(--${partyCode.toLowerCase()}-${colorMode}-shadow)`;
          const data = {
            leadParty: partyCode,
            secondParty: secondParty,
            position: position,
            votes: votesLead,
            margin: totalVotesPercentageLead,
            color: partyColor,
          };
          return (
            <Tooltip key={id} data={data}>
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
            </Tooltip>
          );
        })}
      </Grid>
    </Flex>
  );
}
