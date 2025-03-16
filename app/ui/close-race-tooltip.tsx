import { Tooltip as ChakraTooltip, Portal, Box, Flex } from "@chakra-ui/react";
import { DarkMode } from "@/app/ui/color-mode";
import * as React from "react";

export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
  data: {
    leadParty: string;
    secondParty: string;
    position: string;
    votes: number;
    margin: number;
    color: string;
  };
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      data,
      showArrow,
      children,
      disabled,
      portalled = true,
      contentProps,
      portalRef,
      ...rest
    } = props;

    const parties: { PC: string; NDP: string; LIB: string } = {
      PC: "Progressive Conservative",
      NDP: "New Democrat",
      LIB: "Liberal",
    };
    const leadParty: string =
      data.leadParty === "PC" || "NDP" || "LIB"
        ? parties[data.leadParty as keyof typeof parties]
        : "OTHER";
    const secondParty: string =
      data.leadParty === "PC" || "NDP" || "LIB"
        ? parties[data.secondParty as keyof typeof parties]
        : "OTHER";
    const position: string = data.position.length > 0 ? data.position : "LEAD";

    if (disabled) return children;

    return (
      <ChakraTooltip.Root {...rest}>
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <ChakraTooltip.Positioner>
            <ChakraTooltip.Content
              ref={ref}
              {...contentProps}
              backgroundColor="#33393d"
            >
              {showArrow && (
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip />
                </ChakraTooltip.Arrow>
              )}
              <DarkMode>
                <Flex
                  direction="column"
                  width="100%"
                  bgColor="#33393d"
                  padding="10px"
                  borderRadius="xl"
                >
                  <Box
                    paddingLeft="5px"
                    paddingRight="5px"
                    backgroundColor={data.color}
                    width="fit-content"
                    borderRadius="xl"
                    marginBottom="5px"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    {position}
                  </Box>
                  <Box fontSize="12px" textAlign="center">
                    {leadParty} leads {secondParty} by {data.votes} votes (
                    {data.margin}% margin).
                  </Box>
                </Flex>
              </DarkMode>
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    );
  }
);
