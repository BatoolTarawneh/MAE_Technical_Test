const imageContainers = document.querySelectorAll(".fifth-image-container");
const prevButton = document.querySelector(".prevb");
const nextButton = document.querySelector(".nextb");

let currentIndex = 0;

function updateVisibleImageContainers() {
  imageContainers.forEach((container, index) => {
    if (index >= currentIndex && index < currentIndex + 2) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}

nextButton.addEventListener("click", () => {
  if (currentIndex + 2 < imageContainers.length) {
    currentIndex++;
    updateVisibleImageContainers();
  }
  
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateVisibleImageContainers();
  }
});

updateVisibleImageContainers();







// /////////////////////
 
      const testimonials = document.querySelectorAll('.sixth-slider-desc');
      const namesAndRoles = document.querySelectorAll('.sixth-name-major');
      const prevButtons = document.querySelector('.prevs');
      const nextButtons = document.querySelector('.nexts');

      let currentInde= 0;

      function updateVisibleTestimonial() {
        testimonials.forEach((container, index) => {
          if (index >= currentInde && index < currentInde+ 1) {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
        });
      }
      function updateVisibleNamesAndRoles() {
        namesAndRoles.forEach((container, index) => {
          if (index >= currentInde && index < currentInde+ 1) {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
        });
      }

      nextButtons.addEventListener("click", () => {
        console.log(1);
        if (currentInde + 1 < testimonials.length) {
          currentInde++;
          updateVisibleTestimonial();
          updateVisibleNamesAndRoles()
        }
        
      });
  
      prevButtons.addEventListener("click", () => {
        if (currentInde > 0) {
          currentInde--;
          updateVisibleTestimonial();
          updateVisibleNamesAndRoles()
        }
      });

     

      updateVisibleTestimonial();
      updateVisibleNamesAndRoles();
    



const toTop = document.querySelector(".to-top")

  window.onscroll=function(){
    console.log(this.scrollY);
    if(this.scrollY >= 100){
      toTop.classList.add("show")
    }
    else{
      toTop.classList.remove("show")

    }
  }


