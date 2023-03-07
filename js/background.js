const images = ["pic1.jpeg", "pic2.jpg", "pic3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");


document.body.appendChild(bgImage);
