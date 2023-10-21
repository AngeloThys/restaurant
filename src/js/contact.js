import imageSource from "../img/contact-matcha.jpg";

export default function loadContent() {
  // create elements
  const image = document.createElement("img");
  image.src = imageSource;

  const locationTitle = document.createElement("h1");
  locationTitle.textContent = "Location";
  const locationLocation = document.createElement("div");
  locationLocation.innerHTML = `
  <p>Green Tea Grove Café</p>
  <p>123 Matcha Lane</p>
  <p>Zenith City, Tranquilville</p>
  `;
  const locationDescription = document.createElement("p");
  locationDescription.textContent =
    "Tea-loving patrons can find us nestled in the heart of Zenith City, a serene haven of tranquility. Our matcha bar, Green Tea Grove Café, is discreetly located on Matcha Lane, providing a cozy and peaceful oasis for matcha enthusiasts and those seeking a moment of green tea serenity. Come and savor the taste of Japan in the heart of Tranquilville.";
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location");
  locationContainer.replaceChildren(
    locationTitle,
    locationLocation,
    locationDescription
  );

  const scheduleContainer = document.createElement("div");
  scheduleContainer.classList.add("schedule");
  scheduleContainer.innerHTML = `
    <h2>Opening Hours:</h2>
    <ul>
      <li><span>Monday: </span><p>9:00 AM - 5:00 PM</p></li>
      <li><span>Tuesday: </span><p>9:00 AM - 5:00 PM</p></li>
      <li><span>Wednesday: </span><p>9:00 AM - 5:00 PM</p></li>
      <li><span>Thursday: </span><p>9:00 AM - 8:00 PM</p></li>
      <li><span>Friday: </span><p>9:00 AM - 8:00 PM</p></li>
      <li><span>Saturday: </span><p>10:00 AM - 6:00 PM</p></li>
      <li><span>Monday: </span><p>10:00 AM - 6:00 PM</p></li>
    </ul>
    <p>We welcome you to join us on these days and hours to enjoy our delightful matcha creations and experience a taste of tranquility.</p>
  `;

  const informationContainer = document.createElement("div");
  informationContainer.classList.add("information");
  informationContainer.innerHTML = `
    <h2>Contact Information</h2>
    <ul>
      <li><span>Phone: </span><p>(555) 123-4567</p></li>
      <li><span>Email: </span><p>info@greenteagrove.com</p></li>
      <li><span>Address: </span><p>123 Matcha Lane, Zenith City, Tranquilville</p></li>
      <li>
        <span>Social Media:</span>
        <ul>
          <li>Facebook: Facebook.com/GreenTeaGroveCafe</li>
          <li>Instagram: @GreenTeaGroveCafe</li>
          <li>Twitter: @GroveMatcha</li>
        </ul>
      </li>
    </ul>
    <p>Feel free to reach out to us through any of these channels for inquiries, reservations, or to stay updated on our latest matcha creations and promotions. We're here to assist you!</p>
  `;

  // select the content div
  const content = document.querySelector("#content");
  content.classList.remove(...content.classList);
  content.classList.add("contact-content");

  // replace the elements of the content div
  content.replaceChildren(
    image,
    locationContainer,
    scheduleContainer,
    informationContainer
  );
}
