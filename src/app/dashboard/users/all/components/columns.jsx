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
  HiArrowsUpDown,
  HiEllipsisHorizontal,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

const ActionCell = ({ row }) => {
  const user = row.original;

  return (
    <div className="flex items-center justify-center w-full">
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
            <HiOutlinePencilSquare />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between text-destructive cursor-pointer hover:bg-destructive/10 hover:text-destructive w-full"
            >
              Delete
              <HiOutlineTrash />
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const ActionHeader = () => {
  return <div className="px-4 text-center">Actions</div>;
};

const DateCell = ({ row }) => {
  const date = new Date(row.original.createdAt);
  return <div className="px-4 text-center">{date.toLocaleDateString()}</div>;
};

const DateHeader = (header) => {
  return <div className="px-4 text-center">{header}</div>;
};

const NoWrapCell = ({ row, field }) => {
  return <div className="whitespace-nowrap px-4">{row.original[field]}</div>;
};

const NoWrapHeader = (header, column) => {
  return (
    <div className="whitespace-nowrap">
      <Button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        variant="ghost"
        className="flex gap-2 items-center"
      >
        {header}
        <HiArrowsUpDown size={12} />
      </Button>
    </div>
  );
};

export const columns = [
  {
    accessorKey: "email",
    header: ({ column }) => NoWrapHeader("Email", column),
    cell: ({ row }) => <NoWrapCell row={row} field="email" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => NoWrapHeader("Name", column),
    cell: ({ row }) => <NoWrapCell row={row} field="name" />,
  },
  {
    accessorKey: "role",
    header: ({ column }) => NoWrapHeader("Role", column),
    cell: ({ row }) => <NoWrapCell row={row} field="role" />,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => NoWrapHeader("Created at", column),
    cell: DateCell,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => NoWrapHeader("Updated at", column),
    cell: DateCell,
  },
  {
    accessorKey: "actions",
    header: ActionHeader,
    cell: ActionCell,
  },
];
