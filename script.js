const addBookButton = document.querySelector('[data-open-modal');
const closeAddBook = document.querySelector('[data-close-modal');
const mainBody = document.querySelector('[data-main-body');
const modal = document.querySelector('[data-modal]');
const overlay = document.getElementById('overlay');

const frankenstein = new Book('Frankenstein', 'Shelley', '269', '1818', 'yes');
const twilight = new Book('Twilight', 'Meyer', '434', '2007', 'no')

let myLibrary = [frankenstein, twilight];

function Book(title, author, pages, release, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.release = release,
    this.read = read
}


function addBookToLibrary(title, author, pages, release, read) {

    const newBook = new Book(title, author, pages, release, read)

    myLibrary.push(newBook)

}

myLibrary.forEach((book) => {

    const newDiv = document.createElement('div');
    newDiv.classList.add('library-card');
    mainBody.appendChild(newDiv);

    const newTitle = document.createElement('p');
    newTitle.textContent = book.title;
    newTitle.classList.add('card-title');
    newDiv.appendChild(newTitle)

    const newAuthor = document.createElement('p');
    newAuthor.textContent = book.author;
    newAuthor.classList.add('card-author');
    newDiv.appendChild(newAuthor)

    const newPages = document.createElement('p');
    newPages.textContent = book.pages;
    newPages.classList.add('card-pages');
    newDiv.appendChild(newPages)

    const newRelease = document.createElement('p');
    newRelease.textContent = book.release;
    newRelease.classList.add('card-release');
    newDiv.appendChild(newRelease)

    const newRead = document.createElement('p');
    newRead.textContent = 'Have I read already?';
    newRead.classList.add('card-release');
    newDiv.appendChild(newRead)

})

addBookButton.addEventListener('click', () => {
    modal.classList.add('active')
    overlay.classList.add('active')
})

closeAddBook.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})


