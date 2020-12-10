// const titleRef = document.createElement('h1');
// // console.log(titleRef);

// titleRef.textContent = 'Динамически созданный заголовок';
// titleRef.classList.add('site-title');
// titleRef.id = 'title';
// // console.log(titleRef);

const product = {
  name: 'Сервоприводы',
  description: 'lorem, ipsum bla bla bla',
  price: 2000,
  available: true,
};

{
  /* <div>
  <h2>Сервоприводы</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat aut
    voluptates quos corporis ex esse, cum ea quod maiores.
  </p>
  <p>Цена: 2000 кредитов</p>
</div>; */
}

// Создаем отдельные узлы
const containerRef = document.createElement('div');
containerRef.classList.add('product-card');
// console.log(containerRef);

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');
// console.log(titleRef);

const descRef = document.createElement('p');
descRef.textContent = product.description;
descRef.classList.add('product-description');
// console.log(descRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${product.price} кредитов`;
priceRef.classList.add('product-price');
// console.log(priceRef);

// Соединение УЗЛОВ, ДЛЯ ОДНОГО УЗЛА ИСПОЛЬЗОВАТЬ ЭТО!
// containerRef.appendChild(titleRef);
// containerRef.appendChild(descRef);
// containerRef.appendChild(priceRef);

// СОВРЕМЕННЫЙ МЕТОД СОЕДИНЕНИЯ УЗЛОВ НО ТЯЖЕЛЫЙ, ВСТАВЛЯЕТСЯ В ПОРЯДКЕ ОЧЕРЕДИ
containerRef.append(titleRef, descRef, priceRef);
console.log(containerRef);

// const parentDiv = document.createElement('div');
// parentDiv.appendChild(containerRef);
// console.log(parentDiv);

// ==================================================
// ПРИКОЛЬНЫЕ ЭКСПЕРИМЕНТЫ
// const nav = document.querySelector('.nav');

// const listItemRef = document.createElement('li');
// listItemRef.textContent = 'New Item';
// listItemRef.classList.add('nav-item');
// console.log(listItemRef);

// // классика для одиночных добавлений
// // nav.appendChild(listItemRef);

// // новомодный метод, лучше юзать для множественных добавлений, СТАВИТ В НАЧАЛО
// // nav.prepend(listItemRef);

// // ЗАКРУЧЕННЫЙ МЕТОД, ЧИСТО ДЛЯ ПРАКТИКИ!!
// nav.insertBefore(listItemRef, nav.firstElementChild);

// console.log(nav);

// ==================================================

// НЕКРУТО!!!!!
// document.body.appendChild(containerRef);

const cardRootRef = document.querySelector('#root');
cardRootRef.appendChild(containerRef);
