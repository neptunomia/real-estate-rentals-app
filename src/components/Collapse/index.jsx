import { useState } from 'react';
import styles from '../../styles/_Collapse.module.scss';
import arrowUp from '../../assets/icons/arrow_up.png';
import arrowDown from '../../assets/icons/arrow_down.png';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div
      className={
        props.page === 'housing'
          ? `${styles.collapse__container} ${props.container}`
          : `${styles.collapse__container}`
      }
    >
      <div
        className={
          props.page === 'housing'
            ? `${styles.collapse__container__header} ${props.header}`
            : `${styles.collapse__container__header}`
        }
      >
        <h2>{props.title}</h2>
        <img
          id="arrow"
          src={arrowUp}
          alt="Up arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <p
        className={
          props.page === 'housing'
            ? `${styles.collapse__container__paragraph} ${props.equipments}`
            : `${styles.collapse__container__paragraph}`
        }
      >
        {props.description}
      </p>
    </div>
  ) : (
    <div
      className={
        props.page === 'housing'
          ? `${styles.collapse__container} ${props.container}`
          : `${styles.collapse__container}`
      }
    >
      <div
        className={
          props.page === 'housing'
            ? `${styles.collapse__container__header} ${props.header}`
            : `${styles.collapse__container__header}`
        }
      >
        <h2>{props.title}</h2>
        <img
          id="arrow"
          src={arrowDown}
          alt="Down arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}

export default Collapse;
