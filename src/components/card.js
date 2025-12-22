// Function for creating a card
export function createCard(data, onDelete, onLike, onImageClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const imageElement = cardElement.querySelector(".card__image");
  const titleElement = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  deleteButton.addEventListener("click", () => onDelete(cardElement));
  likeButton.addEventListener("click", () => onLike(likeButton));
  imageElement.addEventListener("click", () => onImageClick(data));

  return cardElement;
}

// Function for the like button
export function handleLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

// Function for deleting the card
export function handleDelete(cardElement) {
  cardElement.remove();
}
