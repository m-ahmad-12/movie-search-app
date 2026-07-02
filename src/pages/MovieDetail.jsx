import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./MovieDetail.module.css";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.omdbapi.com/?apikey=80c57c46&i=${id}&plot=full`
  );

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>Something went wrong.</p>;
  if (data?.Error) return <p className={styles.message}>{data.Error}</p>;
  if (!data) return null;

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className={styles.detail}>
        <img src={data.Poster} alt={data.Title} />
        <div className={styles.info}>
          <h2>{data.Title}</h2>
          <span className={styles.rating}>⭐ {data.imdbRating}</span>
          <p><span>Year:</span> {data.Year}</p>
          <p><span>Genre:</span> {data.Genre}</p>
          <p><span>Director:</span> {data.Director}</p>
          <p><span>Actors:</span> {data.Actors}</p>
          <p><span>Plot:</span> {data.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;