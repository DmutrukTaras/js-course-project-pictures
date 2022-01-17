import {
    postData
} from "../services/requests";

const forms = (state) => {

    'use strick';

    let form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        fileUpload = document.querySelectorAll('input[name="upload"]');


    fileUpload.forEach((item) => {
        item.addEventListener('input', () => {
            let dots;
            let splitArray = item.files[0].name.split('.');
            dots = splitArray[0].length > 6 ? '...' : '.';
            let name = splitArray[0].substring(0, 6) + dots + splitArray[1];
            item.previousElementSibling.textContent = name;

        });
    });
    //checkNumInputs('input[name ="user_phone"]');

    let massage = {
        "loading": "Загрузка...",
        "success": "Дякую! З вами скоро зв'яжуться",
        "failure": "Щось пышло не так...",
        "spinner": "assets/img/spinner.gif",
        "ok": "assets/img/ok.png",
        "fail": "assets/img/fail.png"
    };

    let path = {
        designer: "assets/server.php",
        question: "assets/question.php"

    }


    let clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        fileUpload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            statusMassage.style.textAlign = "center";

            item.parentNode.appendChild(statusMassage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = "none";
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', massage.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMassage.appendChild(statusImg);
            let statusText = document.createElement('div');
            statusText.textContent = massage.loading;
            statusMassage.appendChild(statusText);

            let formData = new FormData(item);


            if (item.getAttribute('data-calc') === "end") {
                for (let k in state) {
                    formData.append(k, state[k]);
                }
            }


            let api;

            api = item.closest('.popup-design') || item.classList.contains("calc-form") ? path.designer : path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', massage.ok);
                    statusText.textContent = massage.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', massage.ok);
                    statusMassage.textContent = massage.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMassage.remove();
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        item.style.display = "block";
                    }, 5000);
                });

        });
    });


};

export default forms;