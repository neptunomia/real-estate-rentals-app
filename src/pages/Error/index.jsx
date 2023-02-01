import error from '../../assets/images/error.jpg';
import { Link } from 'react-router-dom';
import styles from '../../styles/_Error.module.scss';

function Error() {
  return (
    <section className={styles.error}>
      <img src={error} alt="Error" />
      <h1>
        Oups! La page que
        <br /> vous demandez n'existe pas.
      </h1>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  );
}

export default Error;
