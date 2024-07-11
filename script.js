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

function addBookToLibrary() {
    
    myLibrary.push(newBook)
}

addBookToLibrary();
