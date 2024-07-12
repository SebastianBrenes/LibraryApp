
const myLibrary = [];

const svgDelete = '<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#fefae0"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>';
const svgToggle = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fefae0"><path d="M480-72q-69-64-155.22-104T144-216v-384q95 0 179.5 39T480-456q72-66 156.5-105T816-600v384q-95.49 0-181.24 40Q549-136 480-72Zm0-95q59-44 125-75t139-41v-237q-78 14-142.5 59.5T480-358q-57-57-121.5-102.5T216-520v237q73 9 139 40.5T480-167Zm0-385q-70 0-119-49t-49-119q0-70 49-119t119-49q70 0 119 49t49 119q0 70-49 119t-119 49Zm0-72q39.6 0 67.8-28.2Q576-680.4 576-720q0-39.6-28.2-67.8Q519.6-816 480-816q-39.6 0-67.8 28.2Q384-759.6 384-720q0 39.6 28.2 67.8Q440.4-624 480-624Zm0-96Zm0 362Z"/></svg>';

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let information = title + ', ' + author + ', ' + pages + ', ' + read;
        return information;
    }
}
function addSVG(divBook) {
    let divOptions = document.createElement('div'); // creates new div
    divOptions.className = 'options';
    divBook.appendChild(divOptions); // add new div to the book

    let buttonDeleteElement = document.createElement('button');
    buttonDeleteElement.className = 'button-options delete';
    buttonDeleteElement.innerHTML = svgDelete;
    divOptions.appendChild(buttonDeleteElement); // adds svg delete to button

    let buttonToggleElement = document.createElement('button');
    buttonToggleElement.className = 'button-options toggle';
    buttonToggleElement.innerHTML = svgToggle;    
    divOptions.appendChild(buttonToggleElement); // adds svg toggle to button
}


function showLibrary() {
    document.getElementById('library-section').innerHTML = '';
    for (let index = 0; index < myLibrary.length; index++) {
        let element = myLibrary[index];
        let library = document.querySelector('#library-section');
        let divBook = document.createElement('div'); // creates a new div - book
        divBook.className = "book"
        library.appendChild(divBook); // adds the div to the library section
        // creates text content from the input
        let nameBook = document.createElement('p');
        nameBook.className = "name-book"
        nameBook.textContent = element.title;
        let authorBook = document.createElement('p');
        authorBook.className = "name-book"
        authorBook.textContent = element.author;
        let pagesBook = document.createElement('p');
        pagesBook.className = "name-book"
        pagesBook.textContent = element.pages;
        let readBook = document.createElement('p');
        readBook.className = "name-book"
        readBook.textContent = element.read;
        // adding to the new div
        divBook.appendChild(nameBook);
        divBook.appendChild(authorBook);
        divBook.appendChild(pagesBook);
        divBook.appendChild(readBook);
        // adding svgs
        addSVG(divBook)


    }
}

function ClearFields() {
    document.getElementById("name-book").value = "";
    document.getElementById("author-name").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

function addBookToLibrary() {
    const title = document.getElementById('name-book').value
    console.log(title);
    const author = document.getElementById('author-name').value
    console.log(author);
    const pages = document.getElementById('pages').value
    console.log(pages);
    const read = document.getElementById('read').value
    console.log(read);
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    ClearFields();
    showLibrary()
}



let buttonSelector = document.querySelector('#button-add-book');
buttonSelector.addEventListener('click', addBookToLibrary);