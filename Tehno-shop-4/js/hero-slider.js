const slider = document.querySelector("[data-slider]");

if (slider) {
  const track = slider.querySelector(".slider__track");
  const slides = [...slider.querySelectorAll(".slider__slide")];
  const buttons = [...slider.querySelectorAll(".slider__pagination-button")];
  const previousButton = slider.querySelector(".slider__arrow--prev");
  const nextButton = slider.querySelector(".slider__arrow--next");
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === activeIndex;
      button.classList.toggle("slider__pagination-button--active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => showSlide(index));
  });

  previousButton?.addEventListener("click", () => showSlide(activeIndex - 1));
  nextButton?.addEventListener("click", () => showSlide(activeIndex + 1));
}
