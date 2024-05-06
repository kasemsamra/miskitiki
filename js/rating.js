document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const value = parseInt(star.getAttribute("data-value"));
        setRating(value);
      });
      
      star.addEventListener("mouseenter", function() {
        const value = parseInt(star.getAttribute("data-value"));
        fillStars(value);
      });
      
      star.addEventListener("mouseleave", function() {
        resetStars();
      });
      
      star.addEventListener("focus", function() {
        const value = parseInt(star.getAttribute("data-value"));
        fillStars(value);
      });
      
      star.addEventListener("blur", function() {
        resetStars();
      });
      
      star.addEventListener("keydown", function(event) {
        if (event.code === "Enter" || event.code === "Space") {
          const value = parseInt(star.getAttribute("data-value"));
          setRating(value);
        }
      });
    });
  
    function setRating(value) {
      ratingValue.innerHTML = `You rated: ${value} stars`;
      ratingValue.style.color = "gold";
      resetStars();
      fillStars(value);
    }
  
    function fillStars(value) {
      stars.forEach(function(star, index) {
        if (index < value) {
          star.classList.add("active");
        }
      });
    }
  
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove("active");
      });
    }
  });
  