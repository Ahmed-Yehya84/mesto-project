import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, handleLike, handleDelete } from "./components/card.js";
import {
  openModal,
  closeModal,
  handleOverlayClick,
} from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";

// --- CONFIGURATION ---
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// --- DOM ELEMENTS ---
const placesList = document.querySelector(".places__list");

// Forms and Inputs
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);

const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const urlInput = formNewPlace.querySelector(".popup__input_type_url");

// Profile Display Elements
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Popups
const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

// Image Popup Content
const imgElement = popupImage.querySelector(".popup__image");
const captionElement = popupImage.querySelector(".popup__caption");

// Buttons to open popups
const btnEditProfile = document.querySelector(".profile__edit-button");
const btnAddCard = document.querySelector(".profile__add-button");

// --- FUNCTIONS ---

/**
 * Handles clicking a card image to open the big preview
 */
function handleImageClick(data) {
  imgElement.src = data.link;
  imgElement.alt = data.name;
  captionElement.textContent = data.name;
  openModal(popupImage);
}

/**
 * Handles Profile Form Submission
 */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
}

/**
 * Handles New Card Form Submission
 */
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: urlInput.value,
  };

  const newCard = createCard(
    cardData,
    handleDelete,
    handleLike,
    handleImageClick
  );

  placesList.prepend(newCard);
  formNewPlace.reset();
  closeModal(popupAdd);
}

// --- INITIAL RENDER ---
initialCards.forEach((item) => {
  const card = createCard(item, handleDelete, handleLike, handleImageClick);
  placesList.append(card);
});

// --- EVENT LISTENERS ---

// Form Submissions
formEditProfile.addEventListener("submit", handleProfileFormSubmit);
formNewPlace.addEventListener("submit", handleCardFormSubmit);

// Open Edit Profile Popup
btnEditProfile.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  // Clear validation errors and reset button state
  clearValidation(formEditProfile, validationConfig);
  openModal(popupEdit);
});

// Open Add Card Popup
btnAddCard.addEventListener("click", () => {
  formNewPlace.reset(); // Clear previous inputs

  // Clear validation errors and ensure button is disabled for empty form
  clearValidation(formNewPlace, validationConfig);
  openModal(popupAdd);
});

// Generic Close Button Logic
document.querySelectorAll(".popup__close").forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

// Generic Overlay Click Logic
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClick);
});

// --- INITIALIZATION ---

// Enable live validation globally
enableValidation(validationConfig);
