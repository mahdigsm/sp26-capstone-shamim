import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDemo2Props {
  value: string;
  onValueChange: (value: string) => void;
}

export function SelectDemo2({ value, onValueChange }: SelectDemo2Props) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full max-w-48 bg-Secondary border-Secondary dark:bg-foreground h-10!">
        <SelectValue placeholder="All Status" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup className="bg-primary! text-black! dark:data-[slot=select-value]:text-black!">
          <SelectItem value="All">All Status</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Draft">Draft</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
          <SelectItem value="Low Stock">Low Stock</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
