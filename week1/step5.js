// ---------- 5
// Now change the function you used to display the book ID's in a list to take the actual 
// information about the book from the object and display that.
// Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

let mee = document.getElementById('bee')
function ulGenerator() {
    for (let i = 0; i < myFavoriteBooks.length; i++) {
        let ulCreate = document.createElement('ul');
        let liCreate = document.createElement('li');
        let hCreate =  document.createElement('h3');
        let pCreate = document.createElement('p');


        mee.appendChild(ulCreate);

        ulCreate.appendChild(liCreate);
        liCreate.appendChild(hCreate);
        liCreate.appendChild(pCreate);

        hCreate.innerHTML = myFavoriteBooks[i].title;
       pCreate.innerHTML = 'The author is ' + myFavoriteBooks[i].author + ' and the language is '
           + myFavoriteBooks[i].language;

    }
    }  

ulGenerator();