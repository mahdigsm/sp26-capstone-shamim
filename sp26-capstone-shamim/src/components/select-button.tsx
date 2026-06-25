import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 bg-Secondary">
        <SelectValue placeholder="Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All Categories">All Categories</SelectItem>
          <SelectItem value="Course">Course</SelectItem>
          <SelectItem value="E-Book">E-Book</SelectItem>
          <SelectItem value="Tamplate">Tamplate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
