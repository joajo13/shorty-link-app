import { Combobox } from "@/components/ui/combobox";
import { ROLES } from "@/constants/roles";

export const RangeSelect = ({range, onChange}) => {
  return (
    <Combobox
      options={[
        { label: "Last 7 days", value: ROLES.ADMIN },
        { label: "Last 1 month", value: ROLES.USER },
        { label: "Last 3 months", value: "" }
      ]}
      commandEmptyLabel="No roles found."
      placeholder="Select a role..."
      value={range}
      onChange={(value) => onChange(value)}
    />
  );
};
