import styles from '../../styles/_Banner.module.scss';
import banner from '../../assets/images/banner.jpg';
import bannerAbout from '../../assets/images/banner_about.jpg';

function Banner(props) {
  const bgHome = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${banner})`;
  const bgAbout = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${bannerAbout})`;
  return props.page === 'home' ? (
    <div
      className={styles.banner}
      style={{
        backgroundImage: bgHome,
      }}
    >
      <h1>
        Chez vous, <br className={styles.banner__h1__br} />
        partout et ailleurs
      </h1>
    </div>
  ) : (
    <div
      className={styles.banner}
      style={{
        backgroundImage: bgAbout,
      }}
    ></div>
  );
}

export default Banner;
