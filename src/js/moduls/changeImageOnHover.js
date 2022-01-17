const changeImage = (blockSelector, elementSelector) => {
    let block = document.querySelector(blockSelector),
        elements = document.querySelectorAll(elementSelector),
        src, newSrc;

    block.addEventListener('mouseover', (e) => {

        elements.forEach((elem) => {
            if (e.target && e.target.parentNode == elem) {

                let image = elem.querySelector('img');
                let spans = elem.querySelectorAll('p');

                src = image.getAttribute('src');
                newSrc = (src.replace(/.png/ig, '-1.png'));
                image.setAttribute('src', newSrc);

                spans.forEach(item => {
                    item.style.display = 'none';
                    if (item.classList.contains('sizes-hit')) {
                        item.style.display = 'block';
                    }
                })

            }
        });

    });

    block.addEventListener('mouseout', (e) => {

        elements.forEach((elem) => {
            if (e.target && e.target.parentNode == elem) {
                let image = elem.querySelector('img');
                let spans = elem.querySelectorAll('p');

                image.setAttribute('src', src);
                spans.forEach(item => {
                    item.style.display = 'block';
                })
            }
        });

    });

};

export default changeImage;