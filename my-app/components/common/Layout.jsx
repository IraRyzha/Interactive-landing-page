import { FooterSection } from "../FooterSection";
import { NavMenu } from "../NavMenu";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-[2100px] relative border-4 border-yellow-300 px-40">
      <NavMenu />
      {children}
      <FooterSection />
    </div>
  );
}
