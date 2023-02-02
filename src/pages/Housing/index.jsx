import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import datas from '../../utils/data/index.json';

function Housing() {
  const { id } = useParams();
  //console.log(id);
  const rentalData = datas.find((rental) => rental.id === id);
  //console.log(rentalData);
  return <Slideshow pictures={rentalData} />;
}

export default Housing;
