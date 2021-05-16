import Link from "next/link";
import style from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={`content ${style.navbar}`}>
      <img
        src="/assets/img/logo.png"
        alt="Logo do Museu Tronco, Ramos e Raízes"
      />

      <ul>
        <li>
          <span className={style.active}>
            <Link href="#">Início</Link>
          </span>
        </li>
        <li>
          <span>
            <Link href="#">Exposições</Link>
          </span>
        </li>
        <li>
          <span>
            <Link href="#">Documentos</Link>
          </span>
        </li>
        <li>
          <button type="button">Entrar</button>
        </li>
      </ul>
    </div>
  );
}
