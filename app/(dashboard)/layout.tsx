import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { AmbientBackground } from "@/components/kylro/ambient-background";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full relative">
      <AmbientBackground />
      <Sidebar />
      <div className="pl-[76px] h-full">
        <div className="flex gap-x-5 h-full p-4 md:p-6">
          <OrgSidebar />
          <div className="h-full flex-1 flex flex-col min-w-0">
            <Navbar />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
