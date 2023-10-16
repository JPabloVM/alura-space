import Styles from "./footer.module.scss";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__icons}>
        <a href="https://facebook.com">
          <img src={Facebook} alt="Ícone do Facebook" />
        </a>

        <a href="https://instagram.com">
          <img src={Instagram} alt="Ícone do Facebook" />
        </a>

        <a href="https://twitter.com">
          <img src={Twitter} alt="Ícone do Twitter" />
        </a>
      </div>
      <p>Desenvolvido por João Pablo</p>
    </footer>
  );
}
