const accordion = (headerSelector, blockSelector) => {
    let trigers = document.querySelectorAll(headerSelector);
    // let  blocks = document.querySelectorAll(blockSelector);


    trigers.forEach(triger => {
        triger.addEventListener('click', function () {
            this.classList.toggle('active-style');

            trigers.forEach(trig => {
                if (trig != this) {
                    trig.classList.remove('active-style');
                    trig.nextElementSibling.classList.remove('active-content');
                    trig.nextElementSibling.style.maxHeight = 0;
                }

            });

            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = 0;
            }
        });
    });


    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // trigers.forEach(triger => {
    //     triger.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             trigers.forEach(item => {
    //                 item.classList.remove('active', 'active-style');
    //             });
    //         }
    //         this.classList.add('active', 'active-style');
    //     })
    // });


};

export default accordion;