"use client";

import { SegmentGroup } from "@chakra-ui/react";
import { ToggleItems } from "@/app/lib/types";

/**
 * Toggle button component.
 *
 * @component
 * @param items - array of options for the toggle button
 * @param value - current value of the toggle
 * @param setValue - function that updates toggle value when a different value is pressed
 * @returns Reusable toggle component that allows to toggle data visualization.
 */
export default function Toggle({
  items,
  value,
  setValue,
}: {
  items: Array<ToggleItems>;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <SegmentGroup.Indicator />
      {items.map((item) => (
        <SegmentGroup.Item key={item.value} value={item.value}>
          <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
