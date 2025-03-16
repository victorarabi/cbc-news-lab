import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

/**
 * Loading component.
 *
 * @component
 * @returns loading component that displays while data is compiled/fetched.
 */
export default function Loading() {
  return (
    <Stack gap="6" maxW="xl">
      <HStack width="full">
        <SkeletonText noOfLines={4} />
      </HStack>
      <Skeleton height="200px" />
    </Stack>
  );
}
