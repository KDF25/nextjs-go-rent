import { cn } from "@shared/lib";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui";
import { FC, JSX } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { label: string; value: string; icon?: JSX.Element }[];
  className?: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  value,
  onChange,
  placeholder,
  options,
  className = "",
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("rounded-xl border-primary-400", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map(({ label, value, icon }) => (
          <SelectItem key={value} value={value}>
            <div className="flex items-center">
              {icon && <span className="mr-2">{icon}</span>}
              {label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
