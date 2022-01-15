const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        items = document.querySelectorAll(slides),
        paused = false;


    function showSlides(index) {

        slideIndex = (index > items.length) ? 1 : slideIndex;
        slideIndex = (index < 1) ? items.length : slideIndex;

        items.forEach((item) => {
            item.classList.add('animated', 'hide');

        });
        items[slideIndex - 1].classList.remove('hide');

    }

    showSlides(slideIndex);

    function plusSlide(index) {
        showSlides(slideIndex += index);
    }

    try {
        let prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {

    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');

            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');

            }, 3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });




};

export default sliders;