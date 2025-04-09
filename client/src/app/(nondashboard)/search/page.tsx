import { SearchPage } from "@widgets/search/searchPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
