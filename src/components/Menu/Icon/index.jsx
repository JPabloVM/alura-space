export default function Icon({ icon, style }) {
  return (
    <li key={icon.id} className={style.menu__item}>
      <img src={icon.path} alt={icon.alt} />
      <a href="/">{icon.link}</a>
    </li>
  );
}
