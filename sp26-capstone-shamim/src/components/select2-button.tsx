import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo2() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 bg-Secondary">
        <SelectValue
          placeholder="All Status
"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All Status">All Status</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Draft">Draft</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
          <SelectItem value="Low Stock">Low Stock</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
