// ссылка на ДОМ узел

// const titleEl =

// первая найденная строка возвратится
// const titleRef = document.querySelector('h1');

//так запрос на класс, через точку
// const titleRef = document.querySelector('.js-title');
// titleRef.textContent = 'Я поменял этот Титул h1 с помощью titleRef.textContent';

// console.dir(titleRef);

// ===============
const linkRef = document.querySelector('.link-js');
const activeLinkRef = document.querySelector('.link--active');
activeLinkRef.href = '/blog';
activeLinkRef.style.color = 'palevioletred';

console.log(activeLinkRef.classList.contains('link--active'));
activeLinkRef.classList.add('link--notSoActive');
activeLinkRef.classList.remove('link--active');
// activeLinkRef.classList.toggle('link--active');
// console.dir(linkRef);
console.log(activeLinkRef);

// ===============

// const linksRef = document.querySelectorAll('.link-js');
// console.log(linksRef);

// const imageRef = document.querySelector('.hero-image');
// console.log(imageRef);

// ===============// // НЬЮ СКУЛ ДЕЛАТЬ ТАК!!!!
// imageRef.alt = 'Жму Руки назло Коронавирусу!';
// imageRef.src  можно и сорсы поменять

// console.log(imageRef.src);
// console.log(imageRef.alt);

// console.log(imageRef.getAttribute('src'));

// imageRef.setAttribute(
//   'alt',
//   'Это типа официальный метод задачи аттрибута, но олдскул',
// );

// console.log(imageRef);

// ===============//// CLASSLIST !!!!!
