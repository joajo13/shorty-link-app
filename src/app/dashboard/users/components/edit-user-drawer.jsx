import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { EditUserForm } from "./edit-user-form";
import { forwardRef } from "react";

const EditUserDrawer = forwardRef(({user}, ref) => {
  const { name, email, id, rol } = user;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-between text-primary cursor-pointer hover:bg-primary/10 hover:text-primary w-full px-2"
        >
          Edit
          <HiOutlinePencilSquare />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
      >
        <DrawerHeader>
          <DrawerTitle>Edit user</DrawerTitle>
        </DrawerHeader>

        <div>
          <EditUserForm user={user}/>
        </div>
      </DrawerContent>
    </Drawer>
  );
});

EditUserDrawer.displayName = "EditUserDrawer";

export default EditUserDrawer;