import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-40 ${inter.className}`}
    >
      {/* 
      
        Sections...
  
      */}
      <h1>Hello</h1>
    </main>
  );
}
