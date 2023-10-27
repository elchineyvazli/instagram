
let fullName = document.querySelector('.fullName')
let userName = document.querySelector('.userName')
let profilePhoto = document.querySelector('.profilePhoto')
let postsCount = document.querySelector('.postsCount')
let followersCount = document.querySelector('.followersCount')
let followingCount = document.querySelector('.followingCount')
let editProfileButton = document.querySelector('.editProfileButton')
let userLocationTitle = document.querySelector('.userLocationTitle')
let body = document.querySelector('body')


// let gettingStr1 = JSON.stringify(localStorage.getItem(0)).replace(/\\"/g, "").replace(/"/g, "").replace(/{/g, "").replace(/}/g, "")
let gettingStr = JSON.stringify(localStorage.getItem(0)).replace(/\\"/g, "").replace(/"/g, "").slice(1, localStorage.getItem(0).replace(/\\"/g, "").replace(/"/g, "").length - 1)
// let gettingStr3 = JSON.stringify(localStorage.getItem(0)).replace(/\\"/g, "").slice(2, localStorage.getItem(0).replace(/\\"/g, "").length - 3)
// JSON.stringify(localStorage.getItem(0)).replace(/\\"/g, "").slice(0, 1) == "." ?
let say = 0
let gettingStrBackLength = 0
for (let i = 0; i < gettingStr.length; i++) {
    let word = ""
    for (let j = i; j < i + 13; j++) {
        word += gettingStr[j];
        // console.log(word);
        if (word == "profilePhoto:") {
            say++
        }
    }
    gettingStrBackLength++
    if (say == 1) {
        break;
    }
}
console.log(gettingStrBackLength);
let subGettingStr = ""

for (let i = 0; i < gettingStrBackLength + 12; i++) {
    subGettingStr += gettingStr[i]
}
console.log(subGettingStr);
let imgUrlInGettingStr = ""

for (let i = gettingStrBackLength + 12; i < gettingStr.length; i++) {
    imgUrlInGettingStr += gettingStr[i]
}

console.log("with comma: ", imgUrlInGettingStr);
let imgUrlInGettingStr_array = imgUrlInGettingStr.split('')
for (let i = 0; i < imgUrlInGettingStr_array.length; i++) {
    if (imgUrlInGettingStr_array[i] == "," || imgUrlInGettingStr_array[i] == ":") {
        imgUrlInGettingStr_array[i] = ";"
    }
}
let imgUrlInGettingStr_new = imgUrlInGettingStr_array.join("")
console.log("without comma : ", imgUrlInGettingStr_new);

let superGettingStr = subGettingStr.concat(imgUrlInGettingStr_new)
console.log(superGettingStr);

// let gettingStrArr = []
let arr = []
let objSlicingGettingStr;
let slicingGettingStr = ""
let filteredObjStr = ""
console.log(gettingStr);
// let a = gettingStr.split(",")
// console.log(a);

if (imgUrlInGettingStr.slice(0, 1) != ".") {
    //! If images' url start without "."
    // gettingStrArr = gettingStr.split("")
    // console.log(gettingStrArr);    
    slicingGettingStr = superGettingStr.replace(/:/g, ",")
    console.log(superGettingStr);
    arr = slicingGettingStr.split(',')
    console.log(arr);
    objSlicingGettingStr = arr.reduce((acc, current, index, arr) => {
        if (index % 2 === 0) {
            acc[current] = arr[index + 1];
        }
        return acc;
    }, {});
    console.log(objSlicingGettingStr);

} else {
    //! If images' url start with "."
    // console.log(superGettingStr)
    slicingGettingStr = superGettingStr.replace(/:/g, ",")
    // console.log(slicingGettingStr)
    arr = slicingGettingStr.split(',')
    // console.log(arr);
    objSlicingGettingStr = arr.reduce((acc, current, index, arr) => {
        if (index % 2 === 0) {
            acc[current] = arr[index + 1];
        }
        return acc;
    }, {});
    // console.log(objSlicingGettingStr);
}

console.log(localStorage.getItem('0'));

fullName.innerText = objSlicingGettingStr.fullName
userName.innerText = objSlicingGettingStr.userName
postsCount.innerText = objSlicingGettingStr.postsCount
followersCount.innerText = objSlicingGettingStr.followerCount
followingCount.innerText = objSlicingGettingStr.followingCount
// profilePhoto.style.backgroundImage = `url(${objSlicingGettingStr.profilePhoto})`

console.log(gettingStr);
// console.log(gettingStrArr);
console.log(slicingGettingStr);
console.log(arr);
console.log(objSlicingGettingStr);
console.log(objSlicingGettingStr.profilePhoto);

profilePhoto.addEventListener('click', () => {
    let fakeProfilePhoto = document.createElement('div')
    fakeProfilePhoto.classList = "fakeProfilePhoto"
    body.appendChild(fakeProfilePhoto)
})
let obj;
//!--------------------

editProfileButton.addEventListener('click', function () {
    let editProfileContainer = document.createElement('div')
    let editProfileInputImage = document.createElement('input')
    let editProfileInputUserName = document.createElement('input')
    let editProfileInputFullName = document.createElement('input')
    let editProfileCloseButton = document.createElement('button')
    let editProfileSaveButton = document.createElement('button')

    editProfileContainer.classList = "editProfileContainer"
    editProfileInputImage.classList = "editProfileInputImage"
    editProfileInputUserName.classList = "editProfileInputUserName"
    editProfileInputFullName.classList = "editProfileInputFullName"
    editProfileCloseButton.classList = "editProfileCloseButton"
    editProfileCloseButton.classList = "editProfileSaveButton"

    editProfileInputImage.type = "file"

    editProfileCloseButton.innerText = "Close"
    editProfileSaveButton.innerText = "Save & Close"
    editProfileContainer.appendChild(editProfileInputImage)
    editProfileContainer.appendChild(editProfileInputUserName)
    editProfileContainer.appendChild(editProfileInputFullName)
    editProfileContainer.appendChild(editProfileSaveButton)
    editProfileContainer.appendChild(editProfileCloseButton)


    // function replaceNthOccurrence(input, search, replacement, nth) {
    //     var regExp = new RegExp(search, 'g');
    //     var match = 0;

    //     return input.replace(regExp, function (match) {
    //         match++;
    //         if (match === nth) {
    //             return replacement;
    //         } else {
    //             return match;
    //         }
    //     });
    // }

    let backgroundImage = ""
    editProfileInputImage.addEventListener('change', function () {
        const reader = new FileReader();
        const selectedImage = editProfileInputImage.files[0]
        // console.log(selectedImage);
        // if (selectedImage) {
        reader.onload = function (e) {
            // console.log(e.target.result);
            profilePhoto.style.backgroundImage = `url(${e.target.result})`
            console.log(e.target.result);
            obj = JSON.parse(localStorage.getItem("0"))
            obj.userName = editProfileInputUserName.value;
            obj.fullName = editProfileInputFullName.value;
            obj.profilePhoto = e.target.result;
            // obj.profilePhoto = e.target.result.profilePhoto.replace(/,/g, ";");
            filteredObjStr = obj.profilePhoto.replace(/,/g, ";").split("")

            for (let a = 0; a < filteredObjStr.length; a++) {
                if (filteredObjStr[a] == ":") {
                    filteredObjStr[a] = ";"
                }
            }
            // let a = obj.profilePhoto.replace(/;/g, ",").replace(",", ":")
            // let b = replaceNthOccurrence(a, ",", ":", 2)
            console.log(filteredObjStr.join(""));
            localStorage.setItem("0", JSON.stringify({
                ...obj,
                "profilePhoto": obj.profilePhoto.replace(/;/g, ",").replace(",", ":")
            }))
            console.log(obj);
            console.log(e.target.result);
            console.log(localStorage.getItem('0'));

            // gettingStr = JSON.stringify(localStorage.getItem(0)).replace(/\\"/g, "");
            // slicingGettingStr = gettingStr.slice(1, gettingStr.length - 1).replace(/:/g, ",").slice(1, gettingStr.length - 3)
            // arr = slicingGettingStr.split(',')
            // objSlicingGettingStr = arr.reduce((acc, current, index, arr) => {
            //     if (index % 2 === 0) {
            //         acc[current] = arr[index + 1];
            //     }
            //     return acc;
            // }, {});
            // console.log(gettingStr);
            // console.log(slicingGettingStr);
            // console.log(arr);
            // localStorage.setItem('profileImage', objSlicingGettingStr.profilePhoto)
        }
        // profilePhoto.style.backgroundImage = `url(${editProfileInputImage.files[0].slice(1, editProfileInputImage.files[0].length - 1)})`
        reader.readAsDataURL(selectedImage);
        console.log(selectedImage);

        // console.log(editProfileInputImage.files[0].slice(1, editProfileInputImage.files[0].length - 1));
        // profilePhoto.style.backgroundImage = `url(${editProfileInputImage.files[0].slice(1, editProfileInputImage.files[0].length - 1)})`
        backgroundImage = profilePhoto.style.backgroundImage
        // backgroundImage = editProfileInputImage.files[0].slice(1, editProfileInputImage.files[0].length - 1)
        // let obj = JSON.parse(localStorage.getItem("0"))
        // obj.userName = editProfileInputUserName.value;
        // obj.fullName = editProfileInputFullName.value;
        // obj.profilePhoto = backgroundImage;
        // localStorage.setItem("0", JSON.stringify(obj))
    })
    editProfileSaveButton.addEventListener('click', function () {
        // let backgroundImage = profilePhoto.style.backgroundImage.slice(6, profilePhoto.style.backgroundImage.length - 2)
        // profilePhoto.style.backgroundImage = `url(${editProfileInputImage.files[0].slice(1, editProfileInputImage.files[0].length - 1)})`
        // let backgroundImage = profilePhoto.style.backgroundImage
        // let obj = JSON.parse(localStorage.getItem("0"))
        // obj.userName = editProfileInputUserName.value;
        // obj.fullName = editProfileInputFullName.value;
        // obj.profilePhoto = backgroundImage;
        // localStorage.setItem("0", JSON.stringify(obj))
        // let a = obj.profilePhoto.replace(/;/g, ",").replace(",", ":")
        // let b = replaceNthOccurrence(a, ";", ":", 2)
        fetch(`http://localhost:3000/users/${objSlicingGettingStr.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...obj,
                "profilePhoto": obj.profilePhoto.replace(/;/g, ",").replace(",", ":")
            })
        })
        // fetch(`http://localhost:3000/users/${objSlicingGettingStr.id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         obj = data.users[Number(objSlicingGettingStr.id)]
        //     })
        body.removeChild(editProfileContainer)
    })


    editProfileCloseButton.addEventListener('click', function () {
        body.removeChild(editProfileContainer)
    })

    body.appendChild(editProfileContainer)
})

let sharingThings = document.querySelector('.sharingThings')
let postsButton = document.querySelector('.posts')
let reelsButton = document.querySelector('.reels')
let savedButton = document.querySelector('.saved')
let taggedButton = document.querySelector('.tagged')

sharingThings.innerHTML = "posts"

postsButton.addEventListener('click', function () {
    sharingThings.innerHTML = "posts"
})
reelsButton.addEventListener('click', function () {
    sharingThings.innerHTML = "reels"
})
savedButton.addEventListener('click', function () {
    sharingThings.innerHTML = "saved"
})
taggedButton.addEventListener('click', function () {
    sharingThings.innerHTML = "tagged"
})

let createButton = document.getElementById('createButton');

createButton.addEventListener('change', () => {
    const selectedImage = createButton.files[0]
    console.log(selectedImage);
})