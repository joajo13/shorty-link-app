"use client";
import { flexRender } from "@tanstack/react-table";
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function Table({ table, columns, isLoading }) {
  return (
    <div className="border rounded-lg">
      <ShadcnTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        {isLoading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Skeleton className="h-32" />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-56 text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400">No data found.</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </ShadcnTable>
    </div>
  );
}
