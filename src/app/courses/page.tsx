import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/app-sidebar";
import Main from "@/components/courses/main";

const CoursesHome = () => {
  return (
    <SidebarProvider>
      <div className="">
        <AppSidebar />
      </div>
      <main className="w-[79vw] ">
        {/* <SidebarTrigger /> */}
        <Main />
      </main>
    </SidebarProvider>
  );
};

export default CoursesHome;
