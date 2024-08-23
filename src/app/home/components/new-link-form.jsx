import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/custom/inputs/input";
import { InfoPopover } from "@/components/custom/popovers/info-popover";

export const NewLinkForm = () => {
  return (
    <form className="flex flex-col items-start justify-center gap-3">
      <Input placeholder="Enter your link here" />
      
      <CustomLinkInput />

      <GenerateButton />
    </form>
  );
};

function CustomLinkInput() {
  return (
    <div className="w-full flex justify-start items-center gap-1 py-2">
      <span className="text-app-accent font-semibold ml-1">
        ShortyLink.com/
      </span>

      <Separator orientation="vertical" className="h-8 mx-3 w-[1px]" />
      
      <Input
        placeholder="Customize your link"
        className="bg-gray-100 border-none bg-background shadow-none pl-1"
      />
      
      <InfoPopover />
    </div>
  );
}

function GenerateButton() {
  return (
    <Button className="w-full bg-app-accent hover:bg-app-accent/90 flex justify-start items-center gap-2 mt-4">
      Generate your Shortly Link
    </Button>
  );
}
