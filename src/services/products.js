import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
} from 'firebase/firestore';

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

export const getFilteredProducts = async ({ name = '', category, price }) => {
  const q = query(
    collection(db, 'products'),
    orderBy('name'),
    startAt(name),
    endAt(name + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((p) => {
      if (category !== 'Todas' && p.category !== category) {
        return false;
      }
      if (price && p.price > price) {
        return false;
      }
      return true;
    });

  return products;
};
