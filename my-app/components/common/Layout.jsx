import AppContext from "@/context/AppContext";
import { FooterSection } from "../FooterSection";
import { NavMenu } from "../NavMenu";

export default function Layout({ children }) {
  return (
    <AppContext>
      <div className="w-full h-auto flex flex-col relative xl:px-52 lg:px-32 md:px-20 sm:px-12 px-10 scroll-smooth">
        <NavMenu />
        {children}
        <FooterSection />
      </div>
    </AppContext>
  );
}
