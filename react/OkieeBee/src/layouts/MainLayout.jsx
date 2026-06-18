import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
