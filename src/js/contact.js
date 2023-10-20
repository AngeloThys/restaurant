export default function loadContent() {
  // select the content div
  const content = document.querySelector("#content");
  content.classList.remove(...content.classList);
  content.classList.add("contact-content");

  // replace the elements of the content div
  content.replaceChildren(image, headerOne, paragraph);
}
