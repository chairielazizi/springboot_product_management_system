import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Layout;
