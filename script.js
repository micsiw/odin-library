const addBookButton = document.querySelector('.add-button');

let myLibrary = [];

function Book(title, author, pages, release, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.release = release,
    this.read = read
}

const frankenstein = new Book('Frankenstein', 'Shelley', '269', '1818', 'yes');
const twilight = new Book('Twilight', 'Meyer', '434', '2007', 'no')

function addBookToLibrary() {

}




