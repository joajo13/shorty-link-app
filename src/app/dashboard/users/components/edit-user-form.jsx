import { RolSelect } from "@/app/dashboard/users/components/rol-select";
import { Input } from "@/components/custom/inputs/input";
import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { useForm, Controller } from "react-hook-form";

export const EditUserForm = ({ user }) => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });

  const onSubmit = async (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 px-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              label="Name"
              placeholder="Name"
              name="name"
              type="text"
              required
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              required
              {...field}
            />
          )}
        />

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <RolSelect
              buttonClassName="w-full"
              popoverClassName="w-full"
              onChange={field.onChange}
              role={field.value}
              setRole={field.onChange}
            />
          )}
        />
      </div>

      <DrawerFooter>
        <Button className="w-full bg-app-accent hover:bg-app-accent/90 gap-2 text-center">
          Submit
        </Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </form>
  );
};
