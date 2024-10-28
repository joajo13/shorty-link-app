"use client";
import { useGetUsers } from "@/hooks/users/useGetUsers";
import { columns } from "./columns";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { RolSelect } from "./rol-select";
import { DateRangeSelect } from "@/components/custom/date-range-select";
import { Input } from "@/components/custom/inputs/input";
import { Table } from "@/components/custom/table/table";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const UsersTableCard = () => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  
  const [role, setRole] = useState(searchParams.get("role") || "");
  const [createdRange, setCreatedRange] = useState(searchParams.get("range") || "");
  const [lastLoginRange, setLastLoginRange] = useState(searchParams.get("loginRange") || "");

  const { data, isLoading } = useGetUsers({
    role,
    range: createdRange,
  });
  
  const filteredData = useMemo(() => data || [], [data]);
  const table = useReactTable({
    data: filteredData,
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

  const handleParamsChange = (param, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const handleRolSelectChange = (value) => {
    if (value === role) {
      setRole("");
      table.getColumn("role")?.setFilterValue("");
      handleParamsChange("role", null);
      return;
    }

    handleParamsChange("role", value);
    setRole(value);
  };

  const handleRangeSelectChange = (value) => {
    if (value === createdRange) {
      setCreatedRange("");
      handleParamsChange("range", null);
      return;
    }

    handleParamsChange("range", value);
    setCreatedRange(value);
  };

  const handleLastLoginRangeSelectChange = (value) => {
    if (value === lastLoginRange) {
      setLastLoginRange("");
      handleParamsChange("loginRange", null);
      return;
    }

    handleParamsChange("loginRange", value);
    setLastLoginRange(value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 mb-2">
        <Input
          placeholder="Search an email..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="shadow-none"
        />

        <RolSelect
          role={role}
          onChange={handleRolSelectChange}
          setRole={setRole}
          buttonClassName="w-full md:min-w-[190px] md:w-[190px] lg:min-w-[270px] lg:w-[270px]"
          popoverClassName="w-[calc(100vw-1rem)] md:w-[190px] lg:w-[270px]"
        />

        <DateRangeSelect
          range={createdRange}
          onChange={handleRangeSelectChange}
          setRange={setCreatedRange}
          placeholder={"Created..."}
          buttonClassName="w-full md:min-w-[190px] md:w-[190px] lg:min-w-[270px] lg:w-[270px]"
          popoverClassName="w-[calc(100vw-1rem)] md:w-[190px] lg:w-[270px]"
        />

        <DateRangeSelect
          range={lastLoginRange}
          onChange={handleLastLoginRangeSelectChange}
          setRange={setLastLoginRange}
          placeholder={"Last login..."}
          buttonClassName="w-full md:min-w-[190px] md:w-[190px] lg:min-w-[270px] lg:w-[270px]"
          popoverClassName="w-[calc(100vw-1rem)] md:w-[190px] lg:w-[270px]"
        />
      </div>

      <Table table={table} columns={columns} isLoading={isLoading} />
    </div>
  );
};
