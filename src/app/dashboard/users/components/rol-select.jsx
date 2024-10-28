import { Combobox } from "@/components/ui/combobox";
import { ROLES } from "@/constants/roles";

const roles = [
  { label: "Admin", value: ROLES.ADMIN },
  { label: "User", value: ROLES.USER },
];

export const RolSelect = ({role, onChange, setRole, buttonClassName = '', popoverClassName = ''}) => {
  return (
    <Combobox
      options={roles}
      commandEmptyLabel="No roles found."
      placeholder="Select a role..."
      value={role}
      onChange={(value) => onChange(value)}
      className="shadow-none"
      setValue={setRole}
      buttonClassName={buttonClassName}
      popoverClassName={popoverClassName}
    />
  );
};
