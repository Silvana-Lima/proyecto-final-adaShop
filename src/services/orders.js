import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase/config';

export const createOrder = async (order) => {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef;
};

export const getUserOrders = async (userId) => {
  const q = query(
    collection(db, 'orders'),
    where('customer.userId', '==', userId)
  );

  const querySnapshot = await getDocs(q);

  let orders = [];

  querySnapshot.forEach((doc) => {
    orders.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return orders;
};
