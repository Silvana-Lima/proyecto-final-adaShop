// Function to remove tildes

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Function to filter by name

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

// Function to filter by category

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

// Function to filter by price

const filterPrice = (filterValue, products) => {
  let productsPrice = [];

  if (filterValue === 0) {
    productsPrice = products;
  } else {
    productsPrice = products.filter(
      (p) => Number(p.price) <= Number(filterValue)
    );
  }

  return productsPrice;
};

// Function to filter products

export const filterProducts = (products, filters) => {
  const { name, category, price } = filters;

  let productsFiltered = products;

  productsFiltered = filterName(name, productsFiltered);
  productsFiltered = filterCategory(category, productsFiltered);
  productsFiltered = filterPrice(price, productsFiltered);

  return productsFiltered;
};
