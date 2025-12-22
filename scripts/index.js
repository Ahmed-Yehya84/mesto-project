// --- 1. SELECTORS ---
const placesList = document.querySelector(".places__list");

// Profile Elements
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// Popups
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

// Popup Elements
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const descriptionInput = popupEditProfile.querySelector(
  ".popup__input_type_description"
);
const placeNameInput = popupAddCard.querySelector(
  ".popup__input_type_card-name"
);
const urlInput = popupAddCard.querySelector(".popup__input_type_url");
const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

// Forms
const profileForm = popupEditProfile.querySelector(".popup__form");
const cardForm = popupAddCard.querySelector(".popup__form");

// --- 2. UNIVERSAL POPUP LOGIC ---

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

// Esc Key Handler
const handleEscClose = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closePopup(openedPopup);
  }
};

// Overlay & Close Button Listener (Universal)
const allPopups = document.querySelectorAll(".popup");
allPopups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    // If click is on the dark overlay OR on the close button (X)
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.closest(".popup__close")
    ) {
      closePopup(popup);
    }
  });
});

// --- 3. CARD LOGIC ---

function toggleLike(evt) {
  const likeButton = evt.target.closest(".card__like-button");
  const likeImage = likeButton.querySelector("img");
  likeButton.classList.toggle("card__like-button_is-active");

  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  likeImage.src = isLiked
    ? "./images/heart-filled.png"
    : "./images/heart-icon.svg";
}

function createCard(data, onDelete) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const imageElement = cardElement.querySelector(".card__image");
  const titleElement = cardElement.querySelector(".card__title");

  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  // Image Zoom Click
  imageElement.addEventListener("click", () => {
    // FIX: Clear stale data to prevent flicker
    popupImageElement.src = "";
    popupImageElement.alt = "";

    popupImageElement.src = data.link;
    popupImageElement.alt = data.name;
    popupCaption.textContent = data.name;
    openPopup(popupImage);
  });

  // Delete & Like listeners
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => onDelete(cardElement));
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", toggleLike);

  return cardElement;
}

// --- 4. FORM HANDLERS ---

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupEditProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard(
    { name: placeNameInput.value, link: urlInput.value },
    (item) => item.remove()
  );
  placesList.prepend(newCard);
  closePopup(popupAddCard);
  cardForm.reset();
}

// --- 5. INITIALIZATION & GLOBAL LISTENERS ---

// Edit Profile Open
editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

// Add Card Open
addButton.addEventListener("click", () => openPopup(popupAddCard));

// Form Submissions
profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

// Render Initial Cards
initialCards.forEach((item) => {
  placesList.append(createCard(item, (card) => card.remove()));
});
