const addBookButton = document.querySelector('[data-open-modal');
const closeAddBook = document.querySelector('[data-close-modal');
const addToLibrary = document.querySelector('[data-add-to-library');
const mainBody = document.querySelector('[data-main-body');
const modal = document.querySelector('[data-modal]');
const overlay = document.getElementById('overlay');

const frankenstein = new Book('Frankenstein', 'Shelley', '269', '1818', 'yes');
const twilight = new Book('Twilight', 'Meyer', '434', '2007', 'no')

let myLibrary = [frankenstein, twilight];

displayLibrary();

function Book(title, author, pages, release, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.release = release,
    this.read = read
}


function addBookToLibrary(title, author, pages, release, read) {

    myLibrary.push(new Book(title, author, pages, release, read))

}

function displayLibrary() {

    mainBody.innerHTML = '';

    myLibrary.forEach((book, index) => {

        const newDiv = document.createElement('div');
        newDiv.dataset.indexNumber = index;
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
        newRead.classList.add('card-read');
        newDiv.appendChild(newRead)

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        newRead.classList.add('remove-button');
        newDiv.appendChild(removeButton)

        removeButton.addEventListener('click', () => {
            const cardToRemoveIndex = newDiv.dataset.indexNumber;
            myLibrary.splice(cardToRemoveIndex, 1);
            displayLibrary();
        })

    })

}

//?
Book.prototype.didRead = () => {
    this.read = 'yes';
}

addToLibrary.addEventListener('submit', (event) => {

    event.preventDefault();

    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const release = document.getElementById('release').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, release, read);

    modal.classList.remove('active');
    overlay.classList.remove('active');

    addToLibrary.reset();
    displayLibrary();
})

addBookButton.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
})

closeAddBook.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})


