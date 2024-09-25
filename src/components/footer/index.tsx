import { memo } from "react";
import style from "./footer.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <p>&copy; Desenvolvido em 2024 • Grupo 8</p>
    </footer>
  );
}

export default memo(Footer);
