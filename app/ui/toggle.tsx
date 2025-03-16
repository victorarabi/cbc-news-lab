import { SegmentGroup } from "@chakra-ui/react";
import { ToggleItems } from "@/app/lib/types";

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
