import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase/config';

export const getproducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));

  let products = [];
  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return products;
};
