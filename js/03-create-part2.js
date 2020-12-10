const products = [
  {
    name: 'Сервоприводы',
    description: 'lorem, ipsum bla bla bla',
    price: 2000,
    available: true,
  },
  {
    name: 'Генератор Щитов',
    description: 'lorem, ipsum bla bla bla',
    price: 3000,
    available: false,
  },
  {
    name: 'Нулевой Элемент',
    description: 'lorem, ipsum bla bla bla',
    price: 1500,
    available: true,
  },
  {
    name: 'Титаниум',
    description: 'lorem, ipsum bla bla bla',
    price: 2500,
    available: true,
  },
];

console.table(products);

const createProductCard = product => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;
  const inStockClass = product.available
    ? 'product-card__name--available'
    : 'product-card__name--not-available';

  titleRef.classList.add('product-card__name', inStockClass);

  //   titleRef.classList.add(
  //     'product-card__name',
  //     product.available
  //       ? 'product-card__name--available'
  //       : 'product-card__name--not-available',
  //   );

  const descRef = document.createElement('p');
  descRef.textContent = product.description;
  descRef.classList.add('product-description');

  const priceRef = document.createElement('p');
  priceRef.textContent = `Цена: ${product.price} кредитов`;
  priceRef.classList.add('product-price');

  containerRef.append(titleRef, descRef, priceRef);

  return containerRef;
};

// console.log(createProductCard(products[0]));

// products.forEach(product => console.log(createProductCard(product)));

const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productsListRef = document.querySelector('.js-products');
console.log(productsListRef);

productsListRef.append(...productCards);
