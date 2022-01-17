const changeModalState = (state) => {

    let windowSize = document.querySelectorAll('#size'),
        windowMaterial = document.querySelectorAll('#material'),
        windowOptions = document.querySelectorAll('#options'),
        windowPromocode = document.querySelectorAll('.promocode'),
        windowSum = document.querySelectorAll('#sumInput');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'INPUT':
                        if (item.classList.contains('promocode')) {
                            if (item.value === 'IWANTPOPART') {
                                state[prop] = true;
                            } else {
                                state[prop] = false;
                            }
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

            });
        });
    };

    bindActionToElems('change', windowSize, 'size');
    bindActionToElems('change', windowMaterial, 'material');
    bindActionToElems('change', windowOptions, 'options');
    bindActionToElems('input', windowPromocode, 'promocode');
    bindActionToElems('change', windowSum, 'sumInput');





};

export default changeModalState;