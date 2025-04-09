import { cn } from "@shared/lib";
import { VIEW_MODE } from "@shared/store";
import { Grid, List } from "lucide-react";
import { FC } from "react";
import { Button } from "./shadcn";

interface ViewModeProps {
  viewMode: VIEW_MODE;
  onClickList: () => void;
  onClickGrid: () => void;
}

export const ViewMode: FC<ViewModeProps> = ({
  viewMode,
  onClickList,
  onClickGrid,
}) => {
  return (
    <div className="flex border rounded-xl">
      <Button
        variant="ghost"
        className={cn(
          "px-3 py-1 rounded-none rounded-l-xl hover:bg-primary-600 hover:text-primary-50",
          viewMode === VIEW_MODE.LIST ? "bg-primary-700 text-primary-50" : "",
        )}
        onClick={onClickList}
      >
        <List className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "px-3 py-1 rounded-none rounded-r-xl hover:bg-primary-600 hover:text-primary-50",
          viewMode === VIEW_MODE.GRID ? "bg-primary-700 text-primary-50" : "",
        )}
        onClick={onClickGrid}
      >
        <Grid className="w-5 h-5" />
      </Button>
    </div>
  );
};
