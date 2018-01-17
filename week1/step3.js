// ---------- 3
// Make a function (or functions) that generate a ul with li elements for each book ID in the array 
// using a for loop.

let mee = document.getElementById('bee')


function ulGenerator() {

    for (let i = 0; i < myArr.length; i++) {
        let ulCreate = document.createElement('ul');
        let liCreate = document.createElement('li');
        let pCreate = document.createElement('p');
        ulCreate.appendChild(liCreate);
        liCreate.appendChild(pCreate);    
        mee.appendChild(ulCreate);
        pCreate.innerHTML = myArr[i];
    }  

}
ulGenerator();  