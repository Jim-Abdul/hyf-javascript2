// ---------- 1
let myArr = [
        'the_secret',
        'the_lost_lirl_of_astor_street',
        'de_opmaat',
        'de_sprong',
        'de_finale',
        'nederlands_in_actie',
        'nederlands_op_niveau',
        'murder_magic_and_what_we_wore',
        'an_enchantment_of_ravens',
        'the_beautiful_ones'
];

// ---------- 4

let myFavoriteBooks = [
    { bookId: 'the_secret', title: 'The Secret', language: 'English', author: 'Rhonda Byrne' },
    { bookId: 'the_lost_girl_of_astor_street', title: 'The Lost Girl of Astor Street', language: 'English', author: 'Stephanie Morrill' },
    { bookId: 'de_opmaat', title: 'De opmaat', language: 'Dutch', author: 'Maud Beersmans' },
    { bookId: 'de_sprong', title: 'De sprong', language: 'Dutch', author: 'Wim Tersteeg' },
    { bookId: 'de_finale', title: 'De finale', language: 'Dutch', author: 'Maud Beersmans' },
    { bookId: 'nederlands_in_actie', title: 'Nederlands in actie', language: 'Dutch', author: 'Berna de Boer' },
    { bookId: 'nederlands_op_niveau', title: 'Nederlands op niveau', language: 'Dutch', author: 'Ronald Ohlsen' },
    { bookId: 'murder_magic_and_what_we_wore', title: 'Murder, Magic, and What We Wore', language: 'English', author: 'Kelly Jones' },
    { bookId: 'an_enchantment_of_ravens', title: 'An Enchantment of Ravens', language: 'English', author: 'Margaret Rogerson' },
    { bookId: 'the_beautiful_ones', title: 'The Beautiful Ones', language: 'English', author: 'Silvia Moreno-Garcia' }
]


// ---------- 6
//Beautify your html page with css, add sources and alts to each of the images.

// ---------- 7

let newObj =
    {
        The_Secret: "https://images-na.ssl-images-amazon.com/images/I/51k7PlE3bLL._SX384_BO1,204,203,200_.jpg"
        , The_Lost_Girl_of_Astor_Street: "https://images.gr-assets.com/books/1466449796l/29618105.jpg"
        , De_opmaat: "https://www.lowan.nl/wp-content/uploads/2016/03/25-de-opmaat.jpg"
        , De_sprong: "https://www.lowan.nl/wp-content/uploads/2016/03/26-de-sprong.jpg"
        , De_finale: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/4/9/3/1001004005513943.jpg"
        , Nederlands_in_actie: "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/7/0/0/3/9200000001313007.jpg"
        , Nederlands_op_niveau: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/0/5/1/9200000039801505.jpg"
        , Murder_Magic_and_What_We_Wore: "https://images.gr-assets.com/books/1480525478l/23113602.jpg"
        , An_Enchantment_of_Ravens: "https://images.gr-assets.com/books/1486244049l/30969741.jpg"
        , The_Beautiful_Ones: "https://images.gr-assets.com/books/1500030880l/33574143.jpg"
    }




//Now loop over these entries(hint: Object.keys(objectName) gives you an array containing the keys).
let x = Object.values(newObj);
let y = Object.keys(newObj);

console.log(y);

for (let i = 0; i < y.length; i++){
    console.log(y[i]); 
}




//Then write a function which places an image at the corresponding li element.Remember 
//that Objects are not ordered, so you cannot guarantee that the first key is the first li element.
//(Hint: you could give each li item an id tag by modifying the function you made before)
let mee = document.getElementById('bee')  
function imgDownload() {
    for (let i = 0; i < y.length; i++) {
        
        let ulCreate = document.createElement('ul');
        let liCreate = document.createElement('li');    
        let hCreate = document.createElement('h3');
        let pCreate = document.createElement('p');
        let imgCreate = document.createElement('img'); 
        
        mee.appendChild(ulCreate);
        ulCreate.appendChild(liCreate);    
        liCreate.appendChild(hCreate);
        liCreate.appendChild(pCreate);
        liCreate.appendChild(imgCreate);
            
        imgCreate.innerHTML = imgCreate.setAttribute("src", x[i]);
        imgCreate.innerHTML = imgCreate.setAttribute("width", "300"); 
        hCreate.innerHTML = myFavoriteBooks[i].title;
        pCreate.innerHTML = 'The author is ' + myFavoriteBooks[i].author + ' and the language is '
            + myFavoriteBooks[i].language;
     }
     }
 imgDownload();