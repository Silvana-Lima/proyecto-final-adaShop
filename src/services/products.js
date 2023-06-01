import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from '../firebase/config';

export const getAllProducts = async () => {
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

export const getMultipleProducts = async (field, value) => {
  const q = query(collection(db, 'products'), where(field, '==', value));

  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(collection(db, 'products'), id);

  const querySnapshot = await getDoc(docRef);

  const product = {
    id: querySnapshot.id,
    ...querySnapshot.data(),
  };

  return product;
};
