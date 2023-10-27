let telephoneOrEmailInput = document.querySelector('.telephoneOrEmailInput')
let fullNameInput = document.querySelector('.fullNameInput')
let userNameInput = document.querySelector('.userNameInput')
let passwordInput = document.querySelector('.passwordInput')
let signUpButton = document.querySelector('.signUpButton')

let randomIdArr = []

let idNumber = 0;

signUpButton.addEventListener('click', function () {
    if (
        telephoneOrEmailInput.value != ""
        &&
        fullNameInput.value != ""
        &&
        userNameInput.value != ""
        &&
        passwordInput.value != ""
    ) {
        idNumber = Number(localStorage.getItem("idNumber")) + 1
        localStorage.setItem("idNumber", idNumber)

        let newData = {} //!-----
        newData.id = String(idNumber) //!-----
        newData.telOrEmail = telephoneOrEmailInput?.value.toLowerCase()
        newData.fullName = fullNameInput?.value
        newData.userName = userNameInput?.value.toLowerCase()
        newData.password = passwordInput?.value
        newData.postsCount = 0
        newData.followerCount = 0
        newData.followingCount = 0
        newData.profilePhoto = "../images/user.jpg"

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                data.users.push(newData);
                return fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            })
        // .then(response => {
        //     if (response.ok) {
        //         console.log("Veri başarıyla eklendi.");
        //         // Sayfa yeniden yüklemesi sadece belirli bir koşulu sağladığında yapılabilir.
        //     } else {
        //         console.error("Veri eklenirken bir hata oluştu.");
        //     }
        // })
    } else {
        console.log("NOTHING");
    }
});
