// Smooth Scrolling for Links (if added later)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Dynamic Header Color Change on Scroll
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.background = "linear-gradient(90deg, #3498db, #8e44ad)";
    } else {
        header.style.background = "linear-gradient(90deg, #8e44ad, #3498db)";
    }
});

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑ Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.backgroundColor = "#e74c3c";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none"; // Initially hidden
backToTopButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Display Alert on Image Click
const images = document.querySelectorAll(".place img");
images.forEach((image) => {
    image.addEventListener("click", () => {
        const placeName = image.alt; // Use the alt text for the place name
        alert(`You clicked on the image of ${placeName}.`);
    });
});

// Animation on Place Cards on Hover
const places = document.querySelectorAll(".place");
places.forEach((place) => {
    place.addEventListener("mouseenter", () => {
        place.style.transform = "scale(1.05)";
        place.style.transition = "transform 0.3s ease";
    });

    place.addEventListener("mouseleave", () => {
        place.style.transform = "scale(1)";
    });
});
