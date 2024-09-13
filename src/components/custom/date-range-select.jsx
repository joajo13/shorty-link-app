"use client";
import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RANGES } from "@/constants/rangeDates";

const ranges = [
  { label: "Today", value: RANGES.TODAY },
  { label: "Yesterday", value: RANGES.YESTERDAY },
  { label: "Last 7 days", value: RANGES.LAST_7_DAYS },
  { label: "Last 30 days", value: RANGES.LAST_30_DAYS },
  { label: "Last month", value: RANGES.LAST_MONTH },
];

export function DateRangeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] md:min-w-[200px] justify-between"
        >
          {value
            ? ranges.find((range) => range.value === value)?.label
            : "Select range..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {ranges.map((range) => (
                <CommandItem
                  key={range.value}
                  value={range.value}
                  onSelect={() => {
                    onChange(range.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  {range.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === range.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
