// 1. Select the list where cards go
const placesList = document.querySelector(".places__list");
console.log(placesList);
// 2. The Function to create a card
function createCard(data, onDelete) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const imageElement = cardElement.querySelector(".card__image");
  const titleElement = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  // Set data
  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  // Add delete listener
  deleteButton.addEventListener("click", () => onDelete(cardElement));
  likeButton.addEventListener("click", toggleLike);
  return cardElement;
}

// 3. The Delete Handler
function deleteCard(item) {
  item.remove();
}

// 4. Initialization (The Loop)
initialCards.forEach((item) => {
  const card = createCard(item, deleteCard);
  placesList.append(card);
});

// @todo: Function to handle the like toggle

function toggleLike(evt) {
  const likeButton = evt.target.closest(".card__like-button");
  const likeImage = likeButton.querySelector("img");

  // Toggle a class first so we can track the state easily
  likeButton.classList.toggle("card__like-button_is-active");

  // Now change the image based on whether the class is present
  if (likeButton.classList.contains("card__like-button_is-active")) {
    likeImage.src = "./images/heart-filled.png"; // Use your filled icon path
  } else {
    likeImage.src = "./images/heart-icon.svg"; // Use your outline icon path
  }
}
