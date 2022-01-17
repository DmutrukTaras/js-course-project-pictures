const imageFilter = (Selector, tabsSelector, contentSelector, activeClass, noElementsSelector) => {
    let block = document.querySelector(Selector),
        tabs = document.querySelectorAll(tabsSelector),
        noElements = document.querySelector(noElementsSelector),
        content = document.querySelectorAll(contentSelector);

    block.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName == "LI") {
            tabs.forEach(item => {
                item.classList.remove(activeClass);
                e.target.classList.add(activeClass);
            });

            let curentElements = (e.target.classList[0]),
                count = 0;


            content.forEach(block => {
                block.style.display = "none";
                noElements.style.display = 'none';
                block.classList.remove('animated', 'fadeIn');
                noElements.classList.add('animated', 'fadeIn');

                if (block.classList.contains(curentElements)) {
                    block.style.display = "block";
                    block.classList.add('animated', 'fadeIn');
                    count++;
                }
                if (count == 0) {
                    noElements.style.display = 'block';
                    noElements.classList.add('animated', 'fadeIn');
                }
            })
        }
    });
};

export default imageFilter;