import Button from 'components/Button'
import photosPopulares from './photos-popular.json'
import styles from './Popular.module.scss'

export default function Popular() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
{photosPopulares.map((photoPopular) =>{
    return(
        <li key={photoPopular.id} >
            <img src={photoPopular.path} alt={photoPopular.alt} />
        </li>
    )
})}
        </ul>
        <Button text='Ver mais fotos' />
    </aside>
  )
}
