import modals from "./moduls/modals";
import sliders from "./moduls/sliders";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

});