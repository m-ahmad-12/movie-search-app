import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./Favorites.module.css";

function Favorites() {
  const [favorite, setFavorite] = useLocalStorage('favorites', []);

  if (favorite.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>My Favorites</h2>
        <p className={styles.empty}>No favorites yet — go search for some movies!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Favorites</h2>
      <div className={styles.grid}>
        {favorite.map((itm) => (
          <div key={itm.imdbID} className={styles.card}>
            <Link to={`/movie/${itm.imdbID}`}>
              <img src={itm.Poster} alt={itm.Title} />
              <p>{itm.Title}</p>
            </Link>
            <button
              className={styles.removeBtn}
              onClick={() => setFavorite(favorite.filter((item) => item.imdbID !== itm.imdbID))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;