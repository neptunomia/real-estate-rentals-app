import { useState } from 'react';
import leftArrow from '../../assets/icons/arrow_left.png';
import rightArrow from '../../assets/icons/arrow_right.png';
import styles from '../../styles/_Gallery.module.scss';

function Slideshow(props) {
  const pictures = props.pictures.pictures;
  //console.log(pictures)

  const [index, setIndex] = useState(0);

  function previous() {
    index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1);
  }

  function next() {
    index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return pictures.length === 1 ? (
    <div className={styles.slider}>
      <img
        className={styles.slider__slide}
        src={pictures[index]}
        alt="Housing"
      />
    </div>
  ) : (
    <div className={styles.slider}>
      <img
        className={`${styles.slider__arrow} ${styles.slider__leftArrow}`}
        src={leftArrow}
        alt="Left arrow"
        onClick={previous}
      />
      <img
        className={styles.slider__slide}
        src={pictures[index]}
        alt="Housing"
      />
      <img
        className={`${styles.slider__arrow} ${styles.slider__rightArrow}`}
        src={rightArrow}
        alt="Right arrow"
        onClick={next}
      />
      <div className={styles.slider__counter}>
        {index + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
