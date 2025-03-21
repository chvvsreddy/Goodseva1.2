import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Page";


export const metadata: Metadata = {
  title: "GoodSeva",
  description: "Your Logistic Partner",
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

        <Header/>
        {children}
        <Footer/>
      
    </div>
  );
}
