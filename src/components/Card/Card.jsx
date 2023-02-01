import styles from '../../styles/_Card.module.scss';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <article className={styles.card}>
      <Link className={styles.card__link} to={'/housing/' + props.id}>
        <div className={styles.card__imgContainer}>
          <img
            className={styles.card__imgContainer__img}
            src={props.cover}
            alt="Housing"
          />
        </div>
        <h2 className={styles.card__title}>{props.title}</h2>
      </Link>
    </article>
  );
}

export default Card;
