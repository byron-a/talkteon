import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authenication Process",
    description: "",
  };
  
  export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
          {children}
        </main>
    );
  }