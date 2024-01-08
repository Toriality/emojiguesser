import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col text-gray-400 h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        {children}
      </div>
      <Footer />
    </div>
  );
}
