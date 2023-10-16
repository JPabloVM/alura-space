import styles from "./galery.module.scss";
import Tags from "../Tags";
import photos from "./photos.json";
import Cards from "./Cards";
import { useState } from "react";

export default function Galery() {
  const [itens,setItens] = useState(photos);
  const tags = [...new Set(photos.map((photo) => photo.tag))];

  const filter = (tag) =>{
    const newPhotos = photos.filter((photo)=>{
      return photo.tag === tag;
    });
    setItens(newPhotos);
  }
  return (
    <section className={styles.galery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filter={filter} setItens={setItens}/>
      <Cards photos={itens} styles={styles} />
    </section>
  );
}
