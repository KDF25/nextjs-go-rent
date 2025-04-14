import { Loader2 } from "lucide-react";
import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center gap-2 bg-background/50">
      <Loader2 className="w-6 h-6 animate-spin text-primary-700" />
      <span className="text-sm font-medium text-primary-700">Loading...</span>
    </div>
  );
};
