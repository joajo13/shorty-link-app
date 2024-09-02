import { Button } from "@/components/ui/button";
import Link from "next/link";

export const IconButton = ({ buttonClassName, href, Icon }) => {
  return (
    <Button variant="outline" size="icon" className={buttonClassName} asChild>
      <Link href={href}>
        <Icon size={20} />
      </Link>
    </Button>
  );
};
