const slider = document.querySelector(".about-top");

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,

      autoplay: {
        delay: 3000,
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767 && slider.dataset.mobile == "true") {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
