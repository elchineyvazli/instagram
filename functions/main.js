let loginUserNameInput = document.querySelector('.loginUserNameInput')
let loginPasswordInput = document.querySelector('.loginPasswordInput')
let showOrHideButton = document.querySelector('.showOrHideButton')
let isShow = false;


showOrHideButton.addEventListener('click', function () {
    isShow = !isShow
    showOrHideButton.innerHTML = isShow ? "<i class='fa-solid fa-eye'></i>" : "<i class='fa-solid fa-eye-slash'></i>"
    isShow ? loginPasswordInput.type = "text" : loginPasswordInput.type = "password"
})

