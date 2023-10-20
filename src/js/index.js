import css from "../style.css";
import homeLoadContent from "./home";
import menuLoadContent from "./menu";
import contactLoadContent from "./contact";

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", homeLoadContent);

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", menuLoadContent);

const contactButton = document.querySelector(".contact");
contactButton.addEventListener("click", contactLoadContent);

homeLoadContent();