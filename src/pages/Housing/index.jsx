import { useParams, Navigate } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import datas from '../../utils/data/index.json';
import Collapse from '../../components/Collapse';
import Tag from '../../components/Tag';
import Profile from '../../components/Profile';
import Rate from '../../components/Rate';
import styles from '../../styles/_Housing.module.scss';

function Housing() {
  const { id } = useParams();
  //console.log(id);
  const rentalData = datas.find((rental) => rental.id === id);
  //console.log(rentalData);
  return rentalData ? (
    <div>
      <Gallery pictures={rentalData} />
      <section className={styles.housing}>
        <div className={styles.housing__container}>
          <div>
            <h1 className={styles.housing__title}>{rentalData.title}</h1>
            <h2 className={styles.housing__subtitle}>{rentalData.location}</h2>
            <div className={styles.tags}>
              {rentalData.tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} tag={tag} />
              ))}
            </div>
          </div>
          <div className={styles.containerRateProfile}>
            <Rate rate={rentalData.rating} />
            <Profile
              name={rentalData.host.name}
              picture={rentalData.host.picture}
            />
          </div>
        </div>
        <ul className={styles.rentalCollapses}>
          <Collapse
            page="housing"
            title="Description"
            description={rentalData.description}
            li={styles.rentalCollapses__li}
            header={styles.rentalCollapses__header}
          />
          <Collapse
            page="housing"
            title="Équipements"
            description={rentalData.equipments.map((equipment, index) => (
              <span key={`${equipment}-${index}`}>{equipment}</span>
            ))}
            li={styles.rentalCollapses__li}
            header={styles.rentalCollapses__header}
            equipments={styles.rentalCollapses__equipments}
          />
        </ul>
      </section>
    </div>
  ) : (
    <Navigate to={'*'} />
  );
}

export default Housing;
