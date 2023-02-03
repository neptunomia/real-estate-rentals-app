import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import datas from '../../utils/data/index.json';
import Collapse from '../../components/Collapse';
import styles from '../../styles/_Housing.module.scss';

function Housing() {
  const { id } = useParams();
  //console.log(id);
  const rentalData = datas.find((rental) => rental.id === id);
  //console.log(rentalData);
  return (
    <div>
      <Slideshow pictures={rentalData} />
      <section>
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
  );
}
//liStyle, headerStyle, paragrapheStyle

export default Housing;
