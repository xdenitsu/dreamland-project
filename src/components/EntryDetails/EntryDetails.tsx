import style from './EntryDetails.module.scss';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

  const { id } = useParams();
  const { data : entry, error, isPending } = useFetch('http://localhost:8000/entries/' + id);
  const navigate = useNavigate();

function EntryDetails() {


  const handleClick = async () => {
      await fetch('http://localhost:8000/entries/' + entry.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
      });
  }

  return (
    <div className={style.root}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {entry && (
        <article>
          <h2 className={style.title}>{entry.title}</h2>
          <p>Written by {entry.author}</p>
          <div>{entry.body}</div>
          <button className={style.delete} onClick={handleClick}>Delete</button>
        </article>
      )}
      {!isPending && !entry && <div>Entry not found</div>}
    </div>
  );
}

export default EntryDetails;
