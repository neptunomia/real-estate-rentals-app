import styles from '../../styles/_Banner.module.scss';

function Banner(props) {
  return props.page === 'home' ? (
    <div className={`${styles.banner} ${styles.banner__home}`}>
      <h1>
        Chez vous, <br className={styles.banner__h1__br} />
        partout et ailleurs
      </h1>
    </div>
  ) : (
    <div className={`${styles.banner} ${styles.banner__about}`}></div>
  );
}

export default Banner;
