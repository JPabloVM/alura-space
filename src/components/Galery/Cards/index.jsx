import Card from "./Card";

export default function Cards({ photos, styles }) {
  return (
    <div>
      <ul className={styles.galery__cards}>
        {photos.map((photo) => {
          return (
            <Card
              key={photo.id}
              source={photo.image}
              title={photo.title}
              credits={photo.credits}
              style={styles}
            />
          );
        })}
      </ul>
    </div>
  );
}
