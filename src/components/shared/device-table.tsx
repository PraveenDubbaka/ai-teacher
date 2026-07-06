"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { devices } from "@/mock-data/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type DeviceRow = (typeof devices)[number];

const columns: ColumnDef<DeviceRow>[] = [
  { accessorKey: "name", header: "Device" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "battery", header: "Battery", cell: ({ row }) => `${row.original.battery}%` },
  { accessorKey: "wifi", header: "WiFi" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "Offline" ? "danger" : row.original.status === "Updating" ? "warning" : "default"}>
        {row.original.status}
      </Badge>
    ),
  },
];

export function DeviceTable() {
  const table = useReactTable({ data: devices, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <Card className="overflow-hidden p-0">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 dark:bg-slate-800/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-200">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-slate-100 dark:border-slate-800">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) ?? String(cell.getValue())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
