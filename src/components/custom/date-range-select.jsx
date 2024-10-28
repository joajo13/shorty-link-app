"use client";
import { Combobox } from "../ui/combobox";

const ranges = [
  { label: "Today", value: '1' },
  { label: "Yesterday", value: '2' },
  { label: "Last 7 days", value: '7' },
  { label: "Last month", value: '30' },
  { label: "Last 3 months", value: '90' },
];

export function DateRangeSelect({ range, onChange, setRange, placeholder, buttonClassName = '', popoverClassName = '' }) {
  return (
    <Combobox
      options={ranges}
      onChange={onChange}
      value={range}
      commandEmptyLabel="No ranges found."
      placeholder={placeholder ?? "Select a range..."}
      className="shadow-none"
      setValue={setRange}
      buttonClassName={buttonClassName}
      popoverClassName={popoverClassName}
    />
  );
}
