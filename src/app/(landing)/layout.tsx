//Layout Components
import Header from "@/components/homePage/Header";
import Footer from "@/components/homePage/Footer";


export default function RootLayout({children,}:{children: React.ReactNode;}) {
  
  return (
    <main> 
      <Header />
      {children}
      <Footer />
    </main>
    
  );
}
