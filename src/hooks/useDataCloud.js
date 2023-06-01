import { useEffect, useState } from 'react';
// Get Cloud Firestore Products
export const useDataCloud = (servicesProducts) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await servicesProducts;
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [servicesProducts]);

  return { products, error, loading };
};
