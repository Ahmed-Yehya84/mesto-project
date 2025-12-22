import "./pages/index.css"; // Always keep CSS at the top
import { initialCards } from "./components/cards.js";
import { createCard, handleLike, handleDelete } from "./components/card.js";
import {
  openModal,
  closeModal,
  handleOverlayClick,
} from "./components/modal.js";
console.log("working");
// --- DOM ELEMENTS ---
const placesList = document.querySelector(".places__list");

// Popups
const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

// Image Popup Elements
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

// --- INITIAL RENDER ---
initialCards.forEach((item) => {
  const card = createCard(item, handleDelete, handleLike, handleImageClick);
  placesList.append(card);
});

// --- EVENT LISTENERS ---

// Open Edit Profile
btnEditProfile.addEventListener("click", () => {
  // Tip: You'll want to pre-fill the inputs here later!
  openModal(popupEdit);
});

// Open Add Card
btnAddCard.addEventListener("click", () => {
  openModal(popupAdd);
});

// Close buttons logic
document.querySelectorAll(".popup__close").forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

// Overlay click logic
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClick);
});
