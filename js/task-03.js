const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector('.gallery');

const createElement = ({ url, alt }) => {
  return `<img src='${url} alt='${alt} class='image'></img>`;
};

const element = images.map(createElement).join('');
gallery.insertAdjacentHTML('beforeend', element);


// const ulId = document.querySelector(".gallery");
// const arrayLink = `${images.map((item) => `<li><img src=${item.url} alt=${item.alt}/></li>`)}`;
// ulId.insertAdjacentHTML("afterbegin", arrayLink);


// function insertList(id, array) {
//   const ulId = document.querySelector(id);

//   ulId.insertAdjacentHTML(
//     "afterbegin",
//     `${array.map((el) => `<li><img src=${el.url} alt=${el.alt}/></li>`)}`
//   );
// }

// insertList(".gallery", images);
