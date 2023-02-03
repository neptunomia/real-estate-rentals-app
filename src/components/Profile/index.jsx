import styles from '../../styles/_Profile.module.scss';

function Profile(props) {
  return (
    <div className={styles.profile}>
      <h3 className={styles.profile__name}>{props.name}</h3>
      <img
        className={styles.profile__picture}
        src={props.picture}
        alt="Owner"
      />
    </div>
  );
}

export default Profile;
