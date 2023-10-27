let loginUserNameInput = document.querySelector('.loginUserNameInput')
let loginPasswordInput = document.querySelector('.loginPasswordInput')
let showOrHideButton = document.querySelector('.showOrHideButton')
let loginButton = document.querySelector('.loginButton')
let isShow = false;
// let usersIdArr = []

// export default usersInfo
// document.addEventListener('DOMContentLoaded', () => {

showOrHideButton.addEventListener('click', function () {
    isShow = !isShow
    showOrHideButton.innerHTML = isShow ? "<i class='fa-solid fa-eye'></i>" : "<i class='fa-solid fa-eye-slash'></i>"
    isShow ? loginPasswordInput.type = "text" : loginPasswordInput.type = "password"
})

// if (loginUserNameInput.value != ""
//     &&
//     loginPasswordInput.value != ""
// ) {
//     loginButton.disabled = true
//     console.log(loginButton);
// }


loginButton.addEventListener('click', function (e) {
    // setTimeout(() => {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (loginUserNameInput.value != "" &&
                    loginPasswordInput.value != ""
                ) {
                    if (loginUserNameInput.value == data[i].userName &&
                        loginPasswordInput.value == data[i].password) {
                        localStorage.setItem("0", JSON.stringify(data[i]))
                        window.location.href = "../pages/userLocation.html"
                    }
                }
            }
        })
    // }, 3000)
})
// })