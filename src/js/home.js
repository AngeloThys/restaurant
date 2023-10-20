import imageSource from "../img/home-matcha.jpg";

export default function loadContent() {
  // create elements
  const image = document.createElement("img");
  image.src = imageSource;
  image.alt = "A matcha latte on a wooden table";

  const headerOne = document.createElement("h1");
  headerOne.textContent = "Indulge in Green Bliss: Our Matcha Bar";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Welcome to our matcha bar, where green bliss meets culinary innovation. Whether you're a matcha connoisseur or a curious newcomer, our vibrant selection of matcha-infused delights will captivate your taste buds. From luscious matcha lattes and velvety matcha cakes to refreshing matcha smoothies, we've carefully crafted a menu that celebrates this finely ground Japanese green tea in all its glory. Join us for a serene moment of matcha magic, where every sip and bite is a celebration of flavor, health, and culture.";

  // select the content div
  const content = document.querySelector("#content");
  content.classList.remove(...content.classList);
  content.classList.add("home-content");

  // replace the elements of the content div
  content.replaceChildren(image, headerOne, paragraph);
}
