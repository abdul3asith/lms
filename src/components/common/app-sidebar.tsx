import { Calendar, Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "CSCE 5430 Software Engineering",
    season: "Fall 2024",
    url: "#",
    icon: Home,
  },
  {
    title: "CSCE 5300 Real time Operating Systems",
    season: "Fall 2024",
    url: "#",
    icon: Inbox,
  },
  {
    title: "CSCE 5230 Big Data and Data Science",
    season: "Fall 2024",
    url: "#",
    icon: Calendar,
  },
  {
    title: "CSCE 5230 Big Data and Data Science",
    season: "Fall 2024",
    url: "#",
    icon: Calendar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Logo</SidebarGroupLabel>
          <div className="relative flex ">
            <SidebarGroupLabel className="text-2xl my-5 text-black right-0  ">
              Courses
            </SidebarGroupLabel>
          </div>
          {/* <div className="w-full h-1 bg-black rounded-lg mb-7"></div> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="bg-purple-300 rounded-lg hover:bg-purple-400 text-black"
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.icon /> */}
                      <div className="text-center text-base">
                        <div>{item.title}</div>
                        <div>{item.season}</div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
