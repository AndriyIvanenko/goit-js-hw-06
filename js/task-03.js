const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galeryEl = document.querySelector(".gallery");
let galeryList = "";

images.forEach((image) => {
  galeryList += `<li style="display:flex;margin-left:30px;margin-bottom:30px"><img style="width: 480px" src="${image.url}" alt="${image.alt}"></li>`;
  // console.log(galeryList);
});

galeryEl.insertAdjacentHTML("afterbegin", galeryList);

galeryEl.style.display = "flex";
galeryEl.style.flexWrap = "wrap";
galeryEl.style.justifyContent = "center";
galeryEl.style.margin = "0px";
galeryEl.style.padding = "0px";
galeryEl.style.marginLeft = "-30px";
galeryEl.style.marginBottom = "-30px";
