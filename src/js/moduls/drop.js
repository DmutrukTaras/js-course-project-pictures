import {
    postData
} from "../services/requests";

const drop = () => {

    let fileInputs = document.querySelectorAll('[name="upload"]');

    let massage = {
        "loading": "Загрузка...",
        "success": "Дякую!",
        "failure": "Щось пышло не так..."
    };

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,0.7)";
    }

    function unHighLight(item) {
        item.closest('.file_upload').style.border = "none";
        item.closest('.file_upload').style.backgroundColor = "transparent";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => highLight(fileInput), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => unHighLight(fileInput), false);
        });
    });


    fileInputs.forEach(fileInput => {
        fileInput.addEventListener('drop', (e) => {
            fileInput.files = e.dataTransfer.files;
            let dots;
            let splitArray = fileInput.files[0].name.split('.');
            dots = splitArray[0].length > 6 ? '...' : '.';
            let name = splitArray[0].substring(0, 6) + dots + splitArray[1];
            fileInput.previousElementSibling.textContent = name;
        });
    });






    let specialInput = document.querySelector('.main [name="upload"]');
    specialInput.addEventListener('drop', (e) => {
        specialInput.files = e.dataTransfer.files;
        console.log(specialInput.files);
        let dots;
        let splitArray = specialInput.files[0].name.split('.');
        dots = splitArray[0].length > 6 ? '...' : '.';
        let name = splitArray[0].substring(0, 6) + dots + splitArray[1];
        specialInput.previousElementSibling.textContent = name;

        let statusMassage = document.createElement('div');
        statusMassage.classList.add('status');
        statusMassage.style.textAlign = "center";

        specialInput.parentNode.parentNode.appendChild(statusMassage);

        specialInput.classList.add('animated', 'fadeOutUp');
        setTimeout(() => {
            specialInput.style.display = "none";
        }, 400);

        let statusText = document.createElement('div');
        statusText.textContent = massage.loading;
        statusMassage.appendChild(statusText);


        let api = "assets/server.php";

        let formData = new FormData();

        formData.append("image", specialInput.files[0]);

        postData(api, formData)
            .then(res => {
                console.log(res);
                statusText.textContent = massage.success;
            })
            .catch(() => {
                statusMassage.textContent = massage.failure;
            })
            .finally(() => {
                setTimeout(() => {
                    statusMassage.remove();
                    specialInput.classList.remove('fadeOutUp');
                    specialInput.classList.add('fadeInUp');
                    specialInput.style.display = "block";
                }, 5000);
            });

    });

}

export default drop;