import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
      </Header>

      <main className="container mx-auto flex-1">{children}</main>

      <Footer>
      </Footer>
    </div>
  );
}
