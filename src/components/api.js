const config = {
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
};

const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Error: ${res.status}`);
};

/**
 * Fetches random travel/city photos and formats them for the gallery
 */
export const getInitialCards = () => {
  return fetch(
    `${config.baseUrl}/photos/random?count=10&orientation=squarish&query=travel,city,architecture`,
    {
      headers: config.headers,
    }
  )
    .then(checkResponse)
    .then((data) => {
      return data.map((photo) => {
        // 1. Try to get the specific location name first
        const rawName =
          photo.location?.name ||
          photo.description ||
          photo.alt_description ||
          "Beautiful Place";

        // 2. Truncate name if it's too long (over 20 characters)
        const cleanName =
          rawName.length > 20 ? rawName.slice(0, 20) + "..." : rawName;

        // 3. Return object mapped to your card template requirements
        return {
          name: cleanName,
          link: photo.urls.regular,
          likes: photo.likes,
          id: photo.id,
        };
      });
    });
};

/**
 * Note: Unsplash Like requires User OAuth.
 * For this project version, we will handle Like toggles in the UI.
 */
export const toggleLike = (photoId, isLiked) => {
  return fetch(`${config.baseUrl}/photos/${photoId}/like`, {
    method: isLiked ? "DELETE" : "POST",
    headers: config.headers,
  }).then(checkResponse);
};
