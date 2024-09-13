import { Combobox } from "@/components/ui/combobox";
import { ROLES } from "@/constants/roles";

export const RolSelect = ({role, onChange}) => {
  return (
    <Combobox
      options={[
        { label: "Admin", value: ROLES.ADMIN },
        { label: "User", value: ROLES.USER },
        { label: "All", value: "" }
      ]}
      commandEmptyLabel="No roles found."
      placeholder="Select a role..."
      value={role}
      onChange={(value) => onChange(value)}
    />
  );
};
