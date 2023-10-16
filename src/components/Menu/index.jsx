import styles from "./menu.module.scss";
import icons from './icons.json';
import Icon from "./Icon";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map((icon)=>{ 
          return(
            <Icon key={icon.id} icon={icon} style={styles}/>
          )
        })}
      </ul>
    </nav>
  );
}
