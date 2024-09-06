"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HiEllipsisHorizontal,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiTrash,
} from "react-icons/hi2";

const ActionCell = ({ row }) => {
  const user = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 w-10 p-0">
          <span className="sr-only">Open menu</span>
          <HiEllipsisHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(user.id)}
        >
          Copy user ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-between">
          Edit
          <HiOutlinePencilSquare className="text-app-accent" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between text-destructive hover:bg-destructive/10 hover:text-destructive">
          Delete
          <HiOutlineTrash />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DateCell = ({ row }) => {
  const date = new Date(row.original.createdAt);
  return date.toLocaleDateString();
};

const NoWrapHeader = (header) => {
  return <div className="whitespace-nowrap">{header}</div>;
};

const EmailCell = ({ row }) => {
  return <div className="whitespace-nowrap px-4">{row.original.email}</div>;
};

const RoleCell = ({ row }) => {
  return <div className="whitespace-nowrap px-4">{row.original.role}</div>;
};

const NameCell = ({ row }) => {
  return <div className="whitespace-nowrap px-4">{row.original.name}</div>;
};

export const columns = [
  {
    accessorKey: "email",
    header: "Email",
    cell: EmailCell,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: NameCell,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: RoleCell,
  },
  {
    accessorKey: "createdAt",
    header: () => NoWrapHeader("Created at"),
    cell: DateCell,
  },
  {
    accessorKey: "updatedAt",
    header: () => NoWrapHeader("Last update"),
    cell: DateCell,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ActionCell,
  },
];
