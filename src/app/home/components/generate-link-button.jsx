import { Button } from "@/components/ui/button";

export const GenerateLinkButton = ({text}) => {
  return (
    <Button
      type="submit"
      className="w-full bg-app-accent hover:bg-app-accent/90 flex justify-start items-center gap-2 mt-2"
    >
      {text}
    </Button>
  );
};
