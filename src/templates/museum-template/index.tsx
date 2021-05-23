// Components
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function MuseumTemplate({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main style={{ height: "100px" }}>{children}</main>
      <Footer />
    </div>
  );
}
