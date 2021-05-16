// Components
import Navbar from "../../components/navbar";

export default function MuseumTemplate({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
