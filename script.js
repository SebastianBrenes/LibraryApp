
const myLibrary = [];

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