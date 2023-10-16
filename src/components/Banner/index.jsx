import BannerImg from "./banner.png";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={BannerImg} alt="A imagem da terra vista do espaço" />
    </div>
  );
}
