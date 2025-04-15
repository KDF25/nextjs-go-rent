import { Navbar } from "@widgets/navbar";
import Landing from "./(nondashboard)/landing/page";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  );
}