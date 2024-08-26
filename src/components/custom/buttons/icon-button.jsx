import { Button } from "@/components/ui/button";

export const IconButton = ({ buttonClassName, handleClick, Icon }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={buttonClassName}
      onClick={handleClick}
    >
      <Icon size={20} />
    </Button>
  );
};
