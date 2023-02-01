import { useState } from 'react';
import styles from '../../styles/_Collapse.module.scss';
import arrowUp from '../../assets/icons/arrow_up.png';
import arrowDown from '../../assets/icons/arrow_down.png';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <li className={styles.collapse__li}>
      <div className={styles.collapse__li__header}>
        <span>{props.title}</span>
        <img
          id="arrow"
          src={arrowUp}
          alt="Up arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <p>{props.description}</p>
    </li>
  ) : (
    <li className={styles.collapse__li}>
      <div className={styles.collapse__li__header}>
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
