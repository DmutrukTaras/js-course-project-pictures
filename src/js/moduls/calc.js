const calc = (size, material, options, promoCode, result) => {
    let sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promoCode),
        resultBlock = document.querySelector(result);

    let sumInput = document.createElement('input');
    sumInput.setAttribute('name', 'sumInput');
    sumInput.setAttribute('id', 'sumInput');
    sumInput.setAttribute('type', 'hidden');
    resultBlock.parentNode.appendChild(sumInput);



    let sum = 0;

    let calcFunc = () => {

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Для расчета нужно выбрать размер картины и материал картины";
            sumInput.value = 0;

        } else if (promoCodeBlock.value === "IWANTPOPART") {
            sum = Math.round(sum * 0.7);
            resultBlock.textContent = sum;
            sumInput.value = sum;
        } else {
            resultBlock.textContent = sum;
            sumInput.value = sum;

        }

    };
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoCodeBlock.addEventListener('input', calcFunc);



};

export default calc;