document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".carousel-thumbnails img");
  const mainImage = document.querySelector("#main-image");
  const viewMoreButton = document.querySelector(".view-more");
  const galleryImages = document.querySelectorAll(".gallery-images img");
  const popupGallery = document.querySelector(".popup-gallery");
  const closePopup = document.querySelector(".close-popup");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const editPopup = document.getElementById("edit-popup");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeModal = document.getElementById("close-modal");
  const modalContent = document.getElementById("modal-content");

  let currentImageIndex = 0;

  // Update view-more button
  viewMoreButton.textContent = `+${galleryImages.length}`;
  viewMoreButton.style.padding = "10px 5px";
  viewMoreButton.style.fontSize = "1.3vw";
  viewMoreButton.style.borderRadius = "10px";
  viewMoreButton.style.width = "100%";

  // Change main image on thumbnail click
  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
          const fullImageUrl = thumbnail.getAttribute("data-full");
          mainImage.setAttribute("src", fullImageUrl);

          // Highlight the selected thumbnail
          thumbnails.forEach(t => t.classList.remove("thumbnail-highlight"));
          thumbnail.classList.add("thumbnail-highlight");
      });
  });

  // Show the popup gallery
  viewMoreButton.addEventListener("click", () => {
      popupGallery.classList.remove("hidden");
      showImage(currentImageIndex);
  });

  // Close the popup gallery
  closePopup.addEventListener("click", () => {
      popupGallery.classList.add("hidden");
  });

  popupGallery.addEventListener("click", (e) => {
      if (e.target === popupGallery) {
          popupGallery.classList.add("hidden");
      }
  });

  // Show the current image in the gallery
  function showImage(index) {
      galleryImages.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
      });
  }

  // Navigate gallery
  nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      showImage(currentImageIndex);
  });

  prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentImageIndex);
  });

  // Load content dynamically for modal
  function loadContent(url) {
      fetch(url)
          .then(response => response.text())
          .then(data => {
              modalContent.innerHTML = data;
          })
          .catch(error => {
              modalContent.innerHTML = "<p>Failed to load content. Please try again later.</p>";
              console.error("Error loading content:", error);
          });
  }

  // Show modal with dynamic content
  editPopup.addEventListener("click", () => {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
      loadContent("pictureEdit-popup.html"); // Replace with your actual file
  });

  // Close modal
  [closeModal, modalOverlay].forEach(element => {
      element.addEventListener("click", () => {
          modal.style.display = "none";
          modalOverlay.style.display = "none";
      });
  });
});

document.getElementById('save-button').addEventListener('click', function () {
  const description = document.getElementById('description-textbox').value;
  console.log('Description saved:', description); // Logs the description to the console
  alert('Description saved!'); // Alerts the user
});

