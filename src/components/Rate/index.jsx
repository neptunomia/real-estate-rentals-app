import styles from '../../styles/_Rate.module.scss';
import redStar from '../../assets/icons/star_red.png';
import greyStar from '../../assets/icons/star_grey.png';

function Rate(props) {
  const rate = parseInt(props.rate);
  //console.log(rate);
  let id = 1;
  const redStars = Array(rate)
    .fill()
    .map(() => {
      return {
        id: id++,
        url: redStar,
      };
    });
  const greyStars = Array(5 - rate)
    .fill()
    .map(() => {
      return {
        id: id++,
        url: greyStar,
      };
    });
  const stars = redStars.concat(greyStars);
  //console.log(stars);

  return (
    <div className={styles.stars}>
      {stars.map((star) => (
        <img key={star.id} src={star.url} alt="Star" />
      ))}
    </div>
  );
}

export default Rate;
