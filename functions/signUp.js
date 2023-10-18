let telephoneOrEmailInput = document.querySelector('.telephoneOrEmailInput')
let fullNameInput = document.querySelector('.fullNameInput')
let userNameInput = document.querySelector('.userNameInput')
let passwordInput = document.querySelector('.passwordInput')
let signUpButton = document.querySelector('.signUpButton')

// document.addEventListener('keydown', function (e) {
//     if (e.key == "Enter") {
//         if (telephoneOrEmailInput.value != ""
//             &&
//             fullNameInput.value != ""
//             &&
//             userNameInput.value != ""
//             &&
//             passwordInput.value != ""
//         ) {
//             let obj = {}
//             obj.telOrEmail = telephoneOrEmailInput.value
//             obj.fullName = fullNameInput.value
//             obj.userName = userNameInput.value
//             obj.password = passwordInput.value

//             fetch("http://localhost:3000/personalInfo", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": 'application/json'
//                 },
//                 body: JSON.stringify(arr)
//             })
//                 .then(res => {
//                     if (res.ok) {
//                         console.log("Successfully");
//                     } else {
//                         console.log("data sending error" + res.status);
//                     }

//                 })
//                 .catch(err => {
//                     console.log("ERROR", err);
//                 })
//         } else {
//             console.log("NOTHING");
//         }
//     }
// })
let randomIdArr = []
let choise = true;
let id = 0;

signUpButton.addEventListener('click', function () {
    // let id = Math.floor(Math.random() * 5)
    // let say = 0

    // while (choise) {
    //     for (let i = 0; i < randomIdArr.length; i++) {
    //         if (id == randomIdArr[i]) {
    //             say++
    //             id = Math.floor(Math.random() * 5)
    //         }
    //     }
    //     console.log("say : ", say);
    //     console.log("arr : ", randomIdArr);
    //     if (say > 0) {
    //         choise = true
    //         console.log(id);
    //     } else {
    //         choise = false
    //         console.log("FALSE");
    //     }
    //     if (say == 0) {
    //         randomIdArr.push(id)
    //     }
    // }
    localStorage.setItem(id, id)
    if (telephoneOrEmailInput.value != ""
        &&
        fullNameInput.value != ""
        &&
        userNameInput.value != ""
        &&
        passwordInput.value != ""
    ) {
        let newData = {}
        newData.id = String(localStorage.getItem(id))
        newData.telOrEmail = telephoneOrEmailInput?.value
        newData.fullName = fullNameInput?.value
        newData.userName = userNameInput?.value
        newData.password = passwordInput?.value
        console.log(newData);
        id++;

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                data.users.push(newData)
                //!_________________

                return fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.ok) {
                            console.log("Veri başarıyla eklendi.");
                        } else {
                            console.error("Veri eklenirken bir hata oluştu.");
                        }
                    })
                // .then(data => {
                //     data.users.id++
                // })

                //!_________________
            })
    } else {
        console.log("NOTHING");
    }
})

