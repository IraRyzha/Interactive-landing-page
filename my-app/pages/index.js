import { DescriptionSection } from "@/components/DescriptionSection";
import { ItemsSection } from "@/components/ItemsSection";
import { TopSection } from "@/components/TopSection";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full h-auto flex flex-col items-center border-2 border-indigo-500 ${inter.className}`}
    >
      <TopSection />
      <DescriptionSection />
      <ItemsSection />
    </main>
  );
}
