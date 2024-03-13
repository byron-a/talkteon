import { Metadata } from "next";
import AsideNav from "@/components/dashboard/AsideNav";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "",
  };

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <main className="bg-[white] w-full h-full">
            <AsideNav />
           {children}
        </main>
    )
}