"use client";
import { useGetUsers } from "@/hooks/users/useGetUsers";
import { columns } from "./columns";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { RolSelect } from "./rol-select";
import { DateRangeSelect } from "@/components/custom/date-range-select";
import { Input } from "@/components/custom/inputs/input";
import { Table } from "@/components/custom/table/table";
import { ROLES } from "@/constants/roles";
import { RANGES } from "@/constants/rangeDates";

export const UsersTableCard = () => {
  const { users } = useGetUsers();
  const [columnFilters, setColumnFilters] = useState([]);
  const [role, setRole] = useState(ROLES.USER);
  const [range, setRange] = useState(RANGES.LAST_7_DAYS);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: users,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleRolSelectChange = (value) => {
    setRole(value);
    table.getColumn("role")?.setFilterValue(value);
  };

  const handleRangeSelectChange = (value) => {
    setRange(value);
  };

  return (
    <div className="rounded-md border w-full md:p-4">
      <div className="flex justify-between w-full items-center p-2 gap-2 mb-2">
        <Input
          placeholder="Search an email..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
        />

        <RolSelect role={role} onChange={handleRolSelectChange} />

        <DateRangeSelect range={range} onChange={handleRangeSelectChange} />
      </div>

      <Table table={table} columns={columns} />
    </div>
  );
};
