
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
}



let buttonSelector = document.querySelector('#button-add-book')
buttonSelector.addEventListener('click', addBookToLibrary);
