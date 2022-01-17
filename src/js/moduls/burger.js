const burger = (btnSelector, menuSelector) => {
    let btn = document.querySelector(btnSelector),
        menu = document.querySelector(menuSelector);

    menu.style.display = "none";

    btn.addEventListener('click', function () {
        if (menu.style.display == "none" && window.screen.availWidth <= 992) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    window.addEventListener('resize', function () {
        if (window.screen.availWidth > 992) {
            menu.style.display = "none";
        }
    });
};

export default burger;