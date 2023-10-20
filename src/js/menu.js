import imageOneSource from "../img/menu-matchaLatte.jpg";
import imageTwoSource from "../img/menu-matchaBowl.webp";
import imageThreeSource from "../img/menu-matchaMojito2.webp";
import imageFourSource from "../img/menu-matchaCake.jpeg";

export default function loadContent() {
  // create first menu item
  const titleOne = document.createElement("h1");
  titleOne.textContent = "Matcha Latte";
  const priceOne = document.createElement("h2");
  priceOne.textContent = "$4.99";
  const descriptionOne = document.createElement("p");
  descriptionOne.textContent =
    "A classic favorite, our Matcha Latte is a harmonious blend of premium matcha powder, steamed milk, and a touch of honey for sweetness. Served hot or iced, it's the perfect balance of earthy, creamy, and refreshing in every sip.";
  const imageOne = document.createElement("img");
  imageOne.src = imageOneSource;
  const itemOne = document.createElement("div");
  itemOne.replaceChildren(titleOne, priceOne, descriptionOne, imageOne);

  // create second menu item
  const titleTwo = document.createElement("h1");
  titleTwo.textContent = "Matcha Bliss Bowl";
  const priceTwo = document.createElement("h2");
  priceTwo.textContent = "$8.99";
  const descriptionTwo = document.createElement("p");
  descriptionTwo.textContent =
    "Dive into a bowl of pure matcha bliss with our Matcha Bliss Bowl. This healthy and hearty creation features a base of matcha-infused Greek yogurt topped with fresh berries, granola, and a drizzle of honey. It's a delightful and energizing breakfast or snack option.";
  const imageTwo = document.createElement("img");
  imageTwo.src = imageTwoSource;
  const itemTwo = document.createElement("div");
  itemTwo.replaceChildren(titleTwo, priceTwo, descriptionTwo, imageTwo);

  // create third menu item
  const titleThree = document.createElement("h1");
  titleThree.textContent = "Matcha Mint Mojito";
  const priceThree = document.createElement("h2");
  priceThree.textContent = "$5.49";
  const descriptionThree = document.createElement("p");
  descriptionThree.textContent =
    "Cool off with our Matcha Mint Mojito, a unique and refreshing beverage that combines matcha, fresh mint leaves, lime juice, and a splash of sparkling water. It's a zesty and invigorating choice for those looking to quench their thirst.";
  const imageThree = document.createElement("img");
  imageThree.src = imageThreeSource;
  const itemThree = document.createElement("div");
  itemThree.replaceChildren(
    titleThree,
    priceThree,
    descriptionThree,
    imageThree
  );

  // create fourth menu item
  const titleFour = document.createElement("h1");
  titleFour.textContent = "Matcha Opera Cake";
  const priceFour = document.createElement("h2");
  priceFour.textContent = "$6.99";
  const descriptionFour = document.createElement("p");
  descriptionFour.textContent =
    "Indulge your sweet tooth with our Matcha Opera Cake. This exquisite dessert features layers of almond sponge cake, matcha buttercream, and a rich chocolate ganache. It's a symphony of flavors and textures that will leave you craving for more.";
  const imageFour = document.createElement("img");
  imageFour.src = imageFourSource;
  const itemFour = document.createElement("div");
  itemFour.replaceChildren(titleFour, priceFour, descriptionFour, imageFour);

  // select the content div
  const content = document.querySelector("#content");
  content.classList.remove(...content.classList);
  content.classList.add("menu-content");

  // replace the elements of the content div
  content.replaceChildren(itemOne, itemTwo, itemThree, itemFour);
}
