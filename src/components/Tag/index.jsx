import styles from '../../styles/_Tag.module.scss';

function Tag(props) {
  return <div className={styles.tag}>{props.tag}</div>;
}

export default Tag;
