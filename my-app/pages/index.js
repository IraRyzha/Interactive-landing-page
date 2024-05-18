import { TopSection } from "@/components/TopSection";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full h-auto min-h-screen flex flex-col items-center justify-start border-2 ${inter.className}`}
    >
      {/* 
      
        Sections...
  
      */}
      <TopSection />
    </main>
  );
}
