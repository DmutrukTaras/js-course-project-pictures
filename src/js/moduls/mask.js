const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.creteTextRange) {
            range = elem.creteTextRange();

            range.collapse(true);
            range.moveStart('character', pos);
            range.moveEnd('character', pos);
            range.select();
        }
    }

    function creareMask(event) {
        let matrix = '+38 (___) - ___ - __ - __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }
        val = ((val[0] != '3') || (val[1] != '8')) ? def : val;


        this.value = matrix.replace(/./g, function (a) {
            return (/[_\d]/.test(a) && i < val.length) ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }


    }

    let imputs = document.querySelectorAll(selector);

    imputs.forEach((input) => {
        input.addEventListener('input', creareMask);
        input.addEventListener('focus', creareMask);
        input.addEventListener('blur', creareMask);
    });


}



export default mask;