const modals = () => {

    let btnPress = false;

    function bindModal(trigerSelector, modalSelector, closeSelector, destroy = false) {

        let triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            giftImg = document.querySelector('.fixed-gift'),
            scroll = calcScroll();

        triger.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault();
                }
                btnPress = true;

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                    item.classList.remove('fadeOut');

                });

                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                if (destroy) {
                    item.remove();
                }
                document.body.style.marginRight = `${scroll}px`;
                if (giftImg) {
                    giftImg.style.marginRight = `${scroll}px`;
                }

            });
        });

        let closeModalFunc = () => {
            windows.forEach(item => {
                modal.classList.remove('fadeIn');
                modal.classList.add('fadeOut');
                setTimeout(() => {
                    item.style.display = 'none';
                    document.body.classList.remove('modal-open');
                    document.body.style.marginRight = `0px`;
                    giftImg.style.marginRight = `0px`;
                }, 250);

            });
        }

        close.addEventListener('click', function () {
            closeModalFunc();
        });
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        })
    }

    function showModalByTime(selector, time) {
        let windows = document.querySelectorAll('[data-modal]'),
            displayModal;
        windows.forEach(modal => {
            if (getComputedStyle(modal).display !== 'none') {
                displayModal = true;
            }
        });

        if (!displayModal) {
            setTimeout(function () {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
                let giftImg = document.querySelector('.fixed-gift'),
                    scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
                if (giftImg) {
                    giftImg.style.marginRight = `${scroll}px`;
                }

            }, time);
        }

    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {

            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

            if (!btnPress && (window.pageYOffset + document.documentElement.clientHeight) >= scrollHeight) {
                document.querySelector(selector).click();
            }
        })
    }


    bindModal('button.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('button.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('img.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('img.fixed-gift');

    showModalByTime('.popup-consultation', 60000);

};



export default modals;