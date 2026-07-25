import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDemoProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function SelectDemo({ value, onValueChange }: SelectDemoProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full max-w-48 bg-Secondary dark:bg-foreground h-10! border-Secondary">
        <SelectValue placeholder="All Categories" className="text-input! " />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup className="bg-primary! text-black! dark:data-[slot=select-value]:text-black!">
          <SelectItem className="" value="All">
            All Categories
          </SelectItem>
          <SelectItem value="Crouse">Crouse</SelectItem>
          <SelectItem value="E-Book">E-Book</SelectItem>
          <SelectItem value="Template">Template</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
