import Styles from './tags.module.scss';
import photos from '../Galery/photos.json'
export default function Tags({tags, filter,setItens}) {
  return (
    <div className={Styles.tags}>
      <p>Filtre por TAGS:</p>
      <ul className={Styles.tags__list}>
        {tags.map((tag) =>{
          return(
            <li key={tag} onClick={()=> filter(tag)}>{tag}</li>
          )
        })}
        <li onClick={()=> setItens(photos)}>Todas</li>
      </ul>
    </div>
  );
}
