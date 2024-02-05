import { useParams } from 'react-router-dom';
import { BeitCnesetIF } from '../interfaces/beitCnesetIF';
import CardDetails from '../components/CardDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BeitCnesetDetailsPage = () => {
  const [bcSelected, setBcSelected] = useState<BeitCnesetIF>();

  const { bc } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/beit-cneset/${bc}`)
      .then((res) => {
        const { data } = res;
        setBcSelected(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [bc]);

  if (!bcSelected) {
    return null;
  }

  const { name, community, address, gabai, tfilot, image, URLaddress } =
    bcSelected;

  return (
    <CardDetails
      image={image}
      name={name}
      address={address}
      URLaddress={URLaddress}
      community={community}
      gabai={gabai}
      tfilot={tfilot}
    />
  );
};

export default BeitCnesetDetailsPage;
