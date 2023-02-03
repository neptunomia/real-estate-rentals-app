import { useState } from 'react';
import styles from '../../styles/_Collapse.module.scss';
import arrowUp from '../../assets/icons/arrow_up.png';
import arrowDown from '../../assets/icons/arrow_down.png';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <li
      className={
        props.page === 'housing'
          ? `${styles.collapse__li} ${props.li}`
          : `${styles.collapse__li}`
      }
    >
      <div
        className={
          props.page === 'housing'
            ? `${styles.collapse__li__header} ${props.header}`
            : `${styles.collapse__li__header}`
        }
      >
        <span>{props.title}</span>
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
            ? `${styles.collapse__li__paragraph} ${props.equipments}`
            : `${styles.collapse__li__paragraph}`
        }
      >
        {props.description}
      </p>
    </li>
  ) : (
    <li
      className={
        props.page === 'housing'
          ? `${styles.collapse__li} ${props.li}`
          : `${styles.collapse__li}`
      }
    >
      <div
        className={
          props.page === 'housing'
            ? `${styles.collapse__li__header} ${props.header}`
            : `${styles.collapse__li__header}`
        }
      >
        <span>{props.title}</span>
        <img
          id="arrow"
          src={arrowDown}
          alt="Down arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </li>
  );
}

export default Collapse;
