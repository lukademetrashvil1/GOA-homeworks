function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.pagesPerDay = function() {
        return Math.ceil(this.pages / 7); // 7 დღეში წასაკითხი გვერდები
    };
}

// მაგალითი:
const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 210, 1925);
console.log(myBook.pagesPerDay());  // 30 (210 / 7)
