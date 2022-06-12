let urlAPI = 'assets/json/users.json';
let usersAll = fetch(urlAPI).then(response => response.json());

function getAllUsers() {
    usersAll.then(usersArr => {
        usersArr.forEach(user => {
            let a = document.querySelector
                ('#card-list');
            let cardA = document.createElement('div');
            cardA.className = 'col';
            a.appendChild(cardA);
            let cardB = document.createElement('div');
            cardB.classList = 'card';
            cardA.append(cardB);
            let cardC = document.createElement('div');
            cardB.append(cardC);
            let cardImg = document.createElement('img');
            cardImg.classList = 'rounded-circle'
            cardImg.src = `${user.profileURL}`;
            cardC.appendChild(cardImg);
            let cardD = document.createElement('div');
            cardD.className = 'card-body';
            cardB.append(cardD);
            let cardName = document.createElement('h5');
            cardName.className = 'card-text';
            cardName.innerText = `${user.firstName} ${user.lastName}`;
            cardD.append(cardName);
            let hr = document.createElement('hr');
            cardD.append(hr);
            let cardGender = document.createElement('p');
            cardGender.className = 'card-text';
            cardGender.innerText = `${user.gender}`;
            cardD.append(cardGender);
            let cardEmail = document.createElement('p');
            cardEmail.className = 'card-text';
            cardEmail.innerText = `${user.email}`;
            cardD.append(cardEmail);
            let cardE = document.createElement('div');
            cardE.className = 'btn_box'
            cardA.append(cardE);
            let btnImg = document.createElement('button');
            btnImg.classList = 'btn btn-secondary';
            btnImg.type = 'button';
            btnImg.onclick = function () {
                let img = document.querySelector('#hidden');
                let imgsrc = document.querySelector('#image-holder')
                img.style.display = 'block';
                imgsrc.src = `${user.profileURL}`;
                a.style.display = 'none';
            };
            btnImg.innerText = 'SHOW FULL SIZE IMAGE';
            cardE.append(btnImg);

        })
    })
}

let closeImage = document.querySelector('#hidden button');
closeImage.addEventListener('click', function () {
    /*     let img = document.querySelector('#hidden');
        img.style.display = 'none';
        let a = document.querySelector('#card-list');
        a.style.display = 'block'; */
    let img = document.querySelector('#hidden');
    img.style.display = 'none';
    let a = document.querySelector('#card-list');
    a.style.display = 'flex';

})



document.addEventListener('DOMContentLoaded', function () {
    getAllUsers();
})

