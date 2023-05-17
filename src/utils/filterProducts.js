// función para remover tildes

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
//
const filterName = (filterValue, products) => {
  let productsName = [];

  if (filterValue === '') {
    productsName = products;
  } else {
    productsName = products.filter((p) => {
      const productName = p.name.toLowerCase();
      const nameWithoutAccents = removeAccents(productName);

      return (
        nameWithoutAccents.includes(removeAccents(filterValue.toLowerCase())) ||
        productName.includes(filterValue.toLowerCase())
      );
    });
  }

  return productsName;
};

const filterCategory = (filterValue, products) => {
  let productsCategory = [];

  if (filterValue === 'todas') {
    productsCategory = products;
  } else {
    productsCategory = products.filter(
      (p) => p.category.toLowerCase() == filterValue
    );
  }

  return productsCategory;
};

const filterPrice = (filterValue, products) => {
  let productsPrice = [];

  if (filterValue === '') {
    productsPrice = products;
  } else {
    productsPrice = products.filter(
      (p) => Number(p.price) <= Number(filterValue)
    );
  }

  return productsPrice;
};

export const filterProducts = (products, name, category, price) => {
  let productsFiltered = products;
  if (name || category || price) {
    productsFiltered = filterName(name, productsFiltered);
    productsFiltered = filterCategory(category, productsFiltered);
    productsFiltered = filterPrice(price, productsFiltered);
  }

  return productsFiltered;
};
