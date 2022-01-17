const checkTextInputs = (selector) => {

    let textInputs = document.querySelectorAll(selector);

    textInputs.forEach((textInput) => {
        textInput.addEventListener('keypress', function (e) {
            try {
                if (e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault();
                }
            } catch (e) {
                console.log(e);
            }

        });
        textInput.addEventListener('change', function () {
            if ((/[^а-яё 0-9]/ig).test(textInput.value)) {
                textInput.value = textInput.value.replace(/[^а-яё 0-9]/ig, '');
                textInput.value = textInput.value.replace(/ /ig, '')
            };

        });

    });


};


export default checkTextInputs;