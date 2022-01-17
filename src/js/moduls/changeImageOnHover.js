const changeImage = (blockSelector, elementSelector) => {
    let block = document.querySelector(blockSelector),
        elements = document.querySelectorAll(elementSelector);

    block.addEventListener('mouseover', (e) => {

        elements.forEach((elem) => {
            if (e.target && e.target.parentNode == elem) {

                let image = elem.querySelector('img');
                let spans = elem.querySelectorAll('p:not(.sizes-hit)');

                image.setAttribute('src', image.src.slice(0, -4) + '-1.png');
                spans.forEach(item => {
                    item.style.display = 'none';
                })

            }
        });

    });

    block.addEventListener('mouseout', (e) => {

        elements.forEach((elem) => {
            if (e.target && e.target.parentNode == elem) {
                let image = elem.querySelector('img');
                let spans = elem.querySelectorAll('p');

                image.setAttribute('src', image.src.replace('-1.png', '.png'));

                spans.forEach(item => {
                    item.style.display = 'block';
                })
            }
        });

    });

};

export default changeImage;