// Components
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

// Style
import style from "./style.module.scss";

export default function MuseumTemplate({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
