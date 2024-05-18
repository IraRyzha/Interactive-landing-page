import { FooterSection } from "../FooterSection";
import { NavMenu } from "../NavMenu";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-auto relative border-4 border-yellow-300 px-52">
      <NavMenu type="main" />
      {children}
      <FooterSection />
    </div>
  );
}
