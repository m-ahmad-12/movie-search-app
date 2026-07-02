import useFetch from "../hooks/useFetch";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./Home.module.css";

const trending = ["Batman", "Avengers", "Inception", "Interstellar", "Spider-Man", "The Dark Knight", "Joker", "Avatar"];

function Home() {
  const [favorite, setFavorite] = useLocalStorage('favorites', []);
  let [search, setSearch] = useState();
  const ref = useRef(null);

  function searching() {
    setSearch(ref.current.value);
  }

  function searchChip(term) {
    ref.current.value = term;
    setSearch(term);
  }

  const { data, loading, error } = useFetch(
    search ? `https://www.omdbapi.com/?apikey=80c57c46&s=${search}` : null
  );

  let content;
  if (loading) {
    content = <p className={styles.message}>Loading...</p>;
  } else if (error) {
    content = <p className={styles.message}>Something went wrong. Try again.</p>;
  } else if (data?.Response === "False") {
    content = <p className={styles.message}>{data.Error}</p>;
  } else if (data?.Search) {
    content = (
      <div className={styles.grid}>
        {data.Search.map((itm) => {
          const isAdded = favorite.some((fav) => fav.imdbID === itm.imdbID);
          return (
            <div key={itm.imdbID} className={styles.card}>
              <Link to={`/movie/${itm.imdbID}`}>
                <img src={itm.Poster} alt={itm.Title} />
                <p>{itm.Title}</p>
              </Link>
              <button
                className={styles.addBtn}
                onClick={() => setFavorite([...favorite, itm])}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add to Favorites"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for a movie..." ref={ref} />
        <button onClick={searching}>Search</button>
      </div>

      {!search && (
        <div className={styles.trending}>
          <p>Trending Searches</p>
          <div className={styles.chips}>
            {trending.map((term) => (
              <button key={term} className={styles.chip} onClick={() => searchChip(term)}>
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>{content}</div>
    </div>
  );
}

export default Home;