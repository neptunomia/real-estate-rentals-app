import Banner from '../../components/Banner';
import Card from '../../components/Card/Card';
import rentalData from '../../utils/data/index.json';
import styles from '../../styles/_Card.module.scss';

function Homepage() {
  return (
    <div>
      <Banner page="home"></Banner>
      <section className={styles.container}>
        {rentalData.map((rental) => (
          <Card
            key={rental.id}
            id={rental.id}
            title={rental.title}
            cover={rental.cover}
          />
        ))}
      </section>
    </div>
  );
}

export default Homepage;
