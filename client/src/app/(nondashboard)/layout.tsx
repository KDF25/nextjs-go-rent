import { Navbar } from "@widgets/navbar";
import "@shared/styles/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="flex flex-col w-full h-full pt-[var(--height-navbar)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
