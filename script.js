const addBookButton = document.querySelector('[data-open-modal]');
const closeAddBook = document.querySelector('[data-close-modal]');
const addToLibrary = document.querySelector('[data-add-to-library]');
const mainBody = document.querySelector('[data-main-body]');
const modal = document.querySelector('[data-modal]');
const overlay = document.getElementById('overlay');
const sumOfBooks = document.querySelector('[data-stats-sum]');
const readBooks = document.querySelector('[data-stats-finished]');
const unreadBooks = document.querySelector('[data-stats-unfinished]');

class Book {
    constructor(title, author, pages, release, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.release = release;
        this.read = read;
    }
    
}

const frankenstein = new Book('Frankenstein', 'Mary Shelley', '269', '1818', 'yes');
const twilight = new Book('Twilight', 'Stephenie Meyer', '434', '2007', 'no')

let myLibrary = [frankenstein, twilight];

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
        newDiv.appendChild(newTitle);

        const authorPara = document.createElement('p');
        newDiv.appendChild(authorPara);

        const newAuthorLabel = document.createElement('span');
        const newAuthor = document.createElement('span');
        newAuthorLabel.textContent = 'Written by: ';
        newAuthor.textContent = book.author;
        newAuthorLabel.classList.add('card-label');
        newAuthor.classList.add('card-author');
        authorPara.appendChild(newAuthorLabel);
        authorPara.appendChild(newAuthor);

        const pagePara = document.createElement('p');
        newDiv.appendChild(pagePara);

        const newPagesLabel = document.createElement('span');
        const newPages = document.createElement('span');
        newPagesLabel.textContent = 'Number of pages: '
        newPages.textContent = book.pages;
        newPagesLabel.classList.add('card-label')
        newPages.classList.add('card-pages');
        pagePara.appendChild(newPagesLabel);
        pagePara.appendChild(newPages);

        const releasePara = document.createElement('p');
        newDiv.appendChild(releasePara);

        const newReleaseLabel = document.createElement('span');
        const newRelease = document.createElement('span');
        newReleaseLabel.textContent = 'Year of release: '
        newRelease.textContent = book.release;
        newReleaseLabel.classList.add('card-label');
        newRelease.classList.add('card-release');
        releasePara.appendChild(newReleaseLabel);
        releasePara.appendChild(newRelease);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');
        newDiv.appendChild(cardFooter);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Discard';
        removeButton.classList.add('remove-button');
        cardFooter.appendChild(removeButton);

        const newRead = document.createElement('p');
        newRead.textContent = 'Have I read already?';
        newRead.classList.add('card-read');
        cardFooter.appendChild(newRead);

        const readStatus = document.createElement('input');
        readStatus.type = 'checkbox';
        readStatus.classList.add('read-switch');
        newRead.appendChild(readStatus);

        book.read === 'yes' ? readStatus.checked = true : readStatus.checked = false; 

        readStatus.addEventListener('click', () => {

            if (myLibrary[index].read === 'yes') {
                myLibrary[index].read = 'no'
            } else {
                myLibrary[index].read = 'yes'
            }

            statsCalculation();

        })

        removeButton.addEventListener('click', () => {

            myLibrary.splice(index, 1);
            displayLibrary();

        })

    })

    statsCalculation();

}

function statsCalculation() {

    let readBooksSum = 0;
    let unreadBooksSum = 0;

    myLibrary.forEach((book) => {
        if (book.read === 'yes') {
            readBooksSum += 1
        } else {
            unreadBooksSum += 1
        }
    })

    sumOfBooks.textContent = 'Books on shelves: ' + myLibrary.length;
    readBooks.textContent = 'Finished books: ' + readBooksSum;
    unreadBooks.textContent = 'Unfinished books: ' + unreadBooksSum;
    
}

addToLibrary.addEventListener('submit', (event) => {

    event.preventDefault();

    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const release = document.getElementById('release').value;
    let read = document.getElementById('read').checked;

    read === true ? read = "yes" : read = "no";

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

displayLibrary();



