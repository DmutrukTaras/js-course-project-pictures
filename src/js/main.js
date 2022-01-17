import modals from "./moduls/modals";
import sliders from "./moduls/sliders";
import forms from "./moduls/forms";
import mask from "./moduls/mask";
import checkTextInputs from "./moduls/checkTextInputs";
import showMoreStylesWithDB from "./moduls/showMoreStylesWithData";
import calc from "./moduls/calc";
import changeModalState from './moduls/changeModalState';
import imageFilter from './moduls/imageFilter';
import changeImage from './moduls/changeImageOnHover';
import accordion from "./moduls/accordion";
import burger from "./moduls/burger";



window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let modalState = {};

    changeModalState(modalState);


    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(modalState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="massage"]');
    showMoreStylesWithDB('.button-styles', '#styles .row');
    calc("#size", "#material", "#options", ".promocode", ".calc-price");
    imageFilter('#portfolio', '.portfolio-menu li', '.portfolio-block', 'active', '.portfolio-no');
    changeImage('.sizes-wrapper', '.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
});