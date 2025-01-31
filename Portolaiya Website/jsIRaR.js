document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".carousel-thumbnails img");
  const mainImage = document.querySelector("#main-image");
  const viewMoreButton = document.querySelector(".view-more");
  const galleryImages = document.querySelectorAll(".gallery-images img");
  const popupGallery = document.querySelector(".popup-gallery");
  const closePopup = document.querySelector(".close-popup");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentImageIndex = 0; // Keep track of the current image in the popup

  viewMoreButton.textContent = `+${galleryImages.length}`;
  viewMoreButton.style.padding = "60px 40px"; // Increase padding
  viewMoreButton.style.fontSize = "2vw"; // Increase font size
  viewMoreButton.style.borderRadius = "10px"; // Round corners
  viewMoreButton.style.width = "100%"; // Make the button take full width

  // Function to change the main image when a thumbnail is clicked
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      const fullImageUrl = thumbnail.getAttribute("data-full"); // Get full image URL from data attribute
      mainImage.setAttribute("src", fullImageUrl); // Set main image source

      // Remove highlight from all thumbnails
      thumbnails.forEach(t => t.classList.remove("thumbnail-highlight"));
      
      // Add highlight to the clicked thumbnail
      thumbnail.classList.add("thumbnail-highlight");
    });
  });

  // Show the popup when "+23" button is clicked
  viewMoreButton.addEventListener("click", () => {
    popupGallery.classList.remove("hidden"); // Show popup gallery
    showImage(currentImageIndex); // Show the first image in the popup
  });

  // Close the popup when the close button is clicked
  closePopup.addEventListener("click", () => {
    popupGallery.classList.add("hidden"); // Hide popup gallery
  });

  // Optionally close the popup when clicking outside the content
  popupGallery.addEventListener("click", (e) => {
    if (e.target === popupGallery) {
      popupGallery.classList.add("hidden");
    }
  });

  // Show the image at the current index
  function showImage(index) {
    const images = document.querySelectorAll(".gallery-images img");
    images.forEach((img, i) => {
      if (i === index) {
        img.style.display = "block"; // Show the image
      } else {
        img.style.display = "none"; // Hide other images
      }
    });
  }

  // Navigate to the next image
  nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
  });

  // Navigate to the previous image
  prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
  });
});
