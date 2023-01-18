let currentSlide = {
    skill: 0,
    interest: 0
  };
  
  function prevSlide(carousel) {
    let slides = document.getElementsByClassName(carousel);
    currentSlide[carousel]--;
    if (currentSlide[carousel] < 0) {
      currentSlide[carousel] = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide[carousel]].style.display = "block";
  }
  
  function nextSlide(carousel) {
    let slides = document.getElementsByClassName(carousel);
    currentSlide[carousel]++;
    if (currentSlide[carousel] >= slides.length)
        if (currentSlide[carousel] >= slides.length) {
            currentSlide[carousel] = 0;
          }
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[currentSlide[carousel]].style.display = "block";
        }        