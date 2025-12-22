// 1. Select the list where cards go
const placesList = document.querySelector(".places__list");

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

// popup logic

const popupAddCard = document.querySelector(".popup_type_new-card");
const addButton = document.querySelector(".profile__add-button");
const closeButton = popupAddCard.querySelector(".popup__close");

// Function to open popup
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

// Function to close popup
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

// Listeners
addButton.addEventListener("click", () => openPopup(popupAddCard));
closeButton.addEventListener("click", () => closePopup(popupAddCard));

// Select the form and inputs
const cardForm = popupAddCard.querySelector(".popup__form");
const placeNameInput = cardForm.querySelector(".popup__input_type_card-name");
const urlInput = cardForm.querySelector(".popup__input_type_url");

function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Prevents the page from reloading

  // 1. Create a data object from the input values
  const newCardData = {
    name: placeNameInput.value,
    link: urlInput.value,
  };

  // 2. Create the card element using your existing createCard function
  // We pass 'deleteCard' as the second argument just like we did for initial cards
  const newCardElement = createCard(newCardData, deleteCard);

  // 3. Add the card to the beginning of the list
  placesList.prepend(newCardElement);

  // 4. Close the popup and reset the form
  closePopup(popupAddCard);
  cardForm.reset();
}

// 5. Attach the listener to the form
cardForm.addEventListener("submit", handleCardFormSubmit);
