import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { aboutDescriptions } from '../../utils/data/index';
import styles from '../../styles/_Collapse.module.scss';

function About() {
  return (
    <div>
      <Banner page="about"></Banner>
      <section>
        <ul className={styles.collapse}>
          {aboutDescriptions.map((collapse) => (
            <Collapse
              key={collapse.id}
              title={collapse.title}
              description={collapse.description}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
