let fullName = document.querySelector('.fullName')
let userName = document.querySelector('.userName')
let profilePhoto = document.querySelector('.profilePhoto')
let postsCount = document.querySelector('.postsCount')
let followersCount = document.querySelector('.followersCount')
let followingCount = document.querySelector('.followingCount')
let editProfileButton = document.querySelector('.editProfileButton')
let userLocationTitle = document.querySelector('.userLocationTitle')
let body = document.querySelector('body')

let sharingThings = document.querySelector('.sharingThings')
let sharingThingsInside = document.querySelector('.sharingThingsInside')
let postsButton = document.querySelector('.posts')
let reelsButton = document.querySelector('.reels')
let savedButton = document.querySelector('.saved')
let taggedButton = document.querySelector('.tagged')

let sharingThingsInsideChildrens = sharingThingsInside.querySelectorAll('*')

if (!localStorage.getItem('postsArr')) {
    localStorage.setItem("postsArr", "[]")
}
if (!localStorage.getItem('postsArrImageUrl')) {
    localStorage.setItem("postsArrImageUrl", "[]")
}
if (!localStorage.getItem('postsArrObjectId')) {
    localStorage.setItem("postsArrObjectId", "0")
}

let postsArr = JSON.parse(localStorage.getItem("postsArr"))
let postsArrImageUrl = JSON.parse(localStorage.getItem("postsArrImageUrl"))
let postsArrObjectId = JSON.parse(localStorage.getItem("postsArrObjectId"))

if (sharingThingsInsideChildrens.length == 0) {
    for (let i = 0; i < postsArr.length; i++) {

        sharingThingsInside.innerHTML += `
        <div class="postDiv">
        <div class="postDivImage" style="background-image: url(${postsArr[i].postDivImage});"></div>
        <div class="photoInfo">
        <p class="likeCount">${postsArr[i].likeCount}</p>
        <p class="commentCount">${postsArr[i].commentCount}</p>
        </div>
        </div>
        `
    }
    let allPostDiv = document.querySelectorAll('.postDiv')
    let allLikeCount = document.querySelectorAll('.likeCount')
    let allCommentCount = document.querySelectorAll('.commentCount')
    let allSavePhoto = document.querySelectorAll('.savePhoto')
    let postsContainer = document.createElement('div')
    postsContainer.classList = "postsContainer"
    body.appendChild(postsContainer)

    for (let i = 0; i < allPostDiv.length; i++) {
        allPostDiv[i].addEventListener('click', function () {

        })
    }
    console.log(sharingThingsInside);
    console.log("TRUE");
} else {
    console.log(sharingThingsInside.innerHTML.length);
    console.log("FALSE");
}

// localStorage.setItem('postsArrImageUrl', JSON.stringify(postsArrImageUrl))

console.log(postsArr);
console.log(postsArrImageUrl);
console.log(postsArrObjectId);

let parsedObjFromLocalStorage = JSON.parse(localStorage.getItem(0))

fullName.innerText = parsedObjFromLocalStorage.fullName
userName.innerText = parsedObjFromLocalStorage.userName
postsCount.innerText = parsedObjFromLocalStorage.postsCount
followersCount.innerText = parsedObjFromLocalStorage.followerCount
followingCount.innerText = parsedObjFromLocalStorage.followingCount
profilePhoto.style.backgroundImage = `url(${parsedObjFromLocalStorage.profilePhoto})`

profilePhoto.addEventListener('click', () => {
    let fakeProfilePhoto = document.createElement('div')
    fakeProfilePhoto.classList = "fakeProfilePhoto"
    body.appendChild(fakeProfilePhoto)
})

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

    editProfileInputImage.addEventListener('change', function () {
        const reader = new FileReader();
        const selectedImage = editProfileInputImage.files[0]
        reader.onload = function (e) {
            console.log(e.target.result);//!
            profilePhoto.style.backgroundImage = `url(${e.target.result})`
            parsedObjFromLocalStorage.userName = editProfileInputUserName.value;
            parsedObjFromLocalStorage.fullName = editProfileInputFullName.value;
            parsedObjFromLocalStorage.profilePhoto = e.target.result;
            localStorage.setItem("0", JSON.stringify({
                ...parsedObjFromLocalStorage,
                "profilePhoto": parsedObjFromLocalStorage.profilePhoto
            }))
        }
        reader.readAsDataURL(selectedImage);
    })
    editProfileSaveButton.addEventListener('click', function () {
        fetch(`http://localhost:3000/users/${parsedObjFromLocalStorage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...parsedObjFromLocalStorage,
                "profilePhoto": parsedObjFromLocalStorage.profilePhoto
            })
        })
        body.removeChild(editProfileContainer)
    })

    editProfileCloseButton.addEventListener('click', function () {
        body.removeChild(editProfileContainer)
    })
    body.appendChild(editProfileContainer)
})


postsButton.addEventListener('click', function () {
    sharingThingsInside.innerHTML = "posts"
})
reelsButton.addEventListener('click', function () {
    sharingThingsInside.innerHTML = "reels"
})
savedButton.addEventListener('click', function () {
    sharingThingsInside.innerHTML = "saved"
})
taggedButton.addEventListener('click', function () {
    sharingThingsInside.innerHTML = "tagged"
})

let createButton = document.getElementById('createButton');

createButton.addEventListener('change', () => {
    const reader = new FileReader();
    const selectedImage = createButton.files[0]

    let postDiv = document.createElement('div')
    let postDivImage = document.createElement('img')
    let likeCount = document.createElement('p')
    let commentCount = document.createElement('p')
    let countsInfo = document.createElement('div')

    postDiv.classList = "postDiv"
    likeCount.classList = "likeCount"
    commentCount.classList = "commentCount"
    countsInfo.classList = "countsInfo"
    postDivImage.classList = "postDivImage"

    likeCount.innerText = "0"
    commentCount.innerText = "0"

    let obj = Object.create({})
    postsArrObjectId++
    localStorage.setItem("postsArrObjectId", postsArrObjectId)
    obj.id = localStorage.getItem('postsArrObjectId')
    reader.onload = function (e) {
        postDivImage.src = `${e.target.result}`
        sharingThingsInside.innerHTML += `
        <div class="postDiv">
        <div style="background-image: url(${e.target.result})" class="postDivImage"></div>
        <div class="photoInfo">
        <p class="likeCount">${obj.likeCount}</p>
        <p class="commentCount">${obj.commentCount}</p>
        </div>
        </div>
        `
        obj.postDivImage = e.target.result
        localStorage.setItem("postsArrImageUrl", JSON.stringify(obj))
        console.log(obj);


        // likeCount.innerText = "0"
        // commentCount.innerText = "0"
        obj.likeCount = likeCount.innerText
        obj.commentCount = commentCount.innerText
        console.log(obj);
        obj.postDivImage = JSON.parse(localStorage.getItem("postsArrImageUrl")).postDivImage
        postsArr.push(obj)
        localStorage.setItem("postsArr", JSON.stringify(postsArr))
    }
    likeCount.innerText = "0"
    commentCount.innerText = "0"

    //! Bu fetch'i silme, sonradan aktivlesdirersen))
    fetch(`http://localhost:3000/users/${parsedObjFromLocalStorage.id}`)
        .then(res => res.json())
        .then(data => {
            data.posts.push(obj)

            return fetch(`http://localhost:3000/users/${parsedObjFromLocalStorage.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })

    reader.readAsDataURL(selectedImage);
})
