// Next
import Link from "next/link";
import { useState } from "react";

// Styles
import style from "./style.module.scss";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={style.navbar}>
      <nav className="content">
        <Link href="/">
          <img src="/assets/img/logo.png" alt="Logo do Museu Tronco, Ramos e Raízes" />
        </Link>

        <button type="button" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <img src="/assets/icons/close.svg" alt="Abrir menu" />
          ) : (
            <img src="/assets/icons/menu.svg" alt="Fechar menu" />
          )}
        </button>

        <ul className={openMenu ? "" : style.hiddenList}>
          <li>
            <span className={style.active}>
              <Link href="/">Início</Link>
            </span>
          </li>
          <li>
            <span>
              <Link href="/exhibitions/1">Exposições</Link>
            </span>
          </li>
          <li>
            <span
              onClick={() => setOpenDropdown(!openDropdown)}
              onKeyUp={() => setOpenDropdown(!openDropdown)}
              role="menu"
              className={style.dropdownButton}
              tabIndex={0}
            >
              Mídias
            </span>
            {openDropdown && (
              <ul className={style.dropdown}>
                <li>
                  <Link href="/documents/1">Documentos</Link>
                </li>
                <li>
                  <Link href="/articles">Artigos</Link>
                </li>
                <Link href="/books">Livros</Link>
                <li>Produções</li>
              </ul>
            )}
          </li>
          <li>
            <button type="button">Entrar</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
