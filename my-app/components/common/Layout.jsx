import AppContext from "@/context/AppContext";
import { FooterSection } from "../FooterSection";
import { NavMenu } from "../NavMenu";

export default function Layout({ children }) {
  return (
    <AppContext>
      <div className="w-screen h-auto relative border-4 border-yellow-300 xl:px-52 lg:px-32 md:px-20 sm:px-12 px-10">
        <NavMenu />
        {children}
        <FooterSection />
      </div>
    </AppContext>
  );
}
