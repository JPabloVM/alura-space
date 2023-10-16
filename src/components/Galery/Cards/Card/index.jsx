import favorite from "./favorito.png";
import expand from "./open.png";
export default function Card({source, title, credits, style }) {
  return (
    <li className={style.galery__card}>
      <img className={style.galery__image} src={source} alt={title}></img>
      <p className={style.galery__description}>{title}</p>
      <div>
        <p>{credits}</p>
        <span>
          <img src={favorite} alt="Ícone de coração de curtir" />
          <img src={expand} alt="Ícone de coração de expandir" />
        </span>
      </div>
    </li>
  );
}
