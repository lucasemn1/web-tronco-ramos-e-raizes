import Navbar from "../../components/navbar";
import style from "./style.module.scss";

export default function MuseumTemplate({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
