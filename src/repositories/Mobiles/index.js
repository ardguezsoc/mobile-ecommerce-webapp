import axios from 'axios';
import { service_backend_url } from '../../config';
import { mobilePageMapper, mobileMapper } from './mapper';

export const createMobileRepository = () => {
  const getMobilePage = async () => {
    const mobilesPage = [
      {
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        brand: 'Acer',
        model: 'Iconia Talk S',
        price: '170',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
      },
      {
        id: 'cGjFJlmqNPIwU59AOcY8H',
        brand: 'Acer',
        model: 'Liquid Z6 Plus',
        price: '250',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
      },
      {
        id: '8hKbH2UHPM_944nRHYN1n',
        brand: 'Acer',
        model: 'Liquid Z6',
        price: '120',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
      },
      {
        id: 'xyPoqGJxYR4Nn3yVGQcfI',
        brand: 'Acer',
        model: 'Iconia Tab 10 A3-A40',
        price: '230',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
      },
      {
        id: 'ND1elEt4nqZrCeFflDUZ2',
        brand: 'Acer',
        model: 'Liquid X2',
        price: '230',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ND1elEt4nqZrCeFflDUZ2.jpg',
      },
      {
        id: 'pMZMhe_ZaAPZoaCCtlDrg',
        brand: 'Acer',
        model: 'Liquid Jade 2',
        price: '',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg',
      },
      {
        id: 'ke-gsQbO8qH9PQ-zcdiAJ',
        brand: 'Acer',
        model: 'Liquid Zest Plus',
        price: '200',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg',
      },
      {
        id: 'meQvyTcXACAwWn3wCKSw6',
        brand: 'Acer',
        model: 'Liquid Zest',
        price: '110',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/meQvyTcXACAwWn3wCKSw6.jpg',
      },
      {
        id: 'qSyO-2wbNUssUhBb2waew',
        brand: 'Acer',
        model: 'Predator 8',
        price: '350',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/qSyO-2wbNUssUhBb2waew.jpg',
      },
      {
        id: 'P2oqviM96_ozwsgZkj9Xf',
        brand: 'Acer',
        model: 'Liquid Jade Primo',
        price: '220',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/P2oqviM96_ozwsgZkj9Xf.jpg',
      },
      {
        id: 'ypkE9xhckmUbS1UJRm5dS',
        brand: 'Acer',
        model: 'Liquid Z330',
        price: '110',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ypkE9xhckmUbS1UJRm5dS.jpg',
      },
    ];

    //await axios.get(`${service_backend_url}/api/product`);
    //mobilesPage.data
    return mobilePageMapper(mobilesPage);
  };

  const getMobileDetails = async (id) => {
    const mobileDetail = await axios.get(`${service_backend_url}/api/product/${id}`);

    return mobileMapper(mobileDetail.data);
  };

  const postMobileToCart = async ({ id, memory, color }) =>
    await axios.post(`${service_backend_url}/api/cart`, {
      id,
      colorCode: color,
      storageCode: memory,
    });

  return {
    getMobilePage,
    getMobileDetails,
    postMobileToCart,
  };
};
