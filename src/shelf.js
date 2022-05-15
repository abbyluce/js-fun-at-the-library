function shelfBook(book, shelf) {
  if  (shelf.length < 3) {
  return shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      return shelf.splice(i, 1);
      }
}
}

function listTitles(shelf) {
  return shelf[0].title + ", " + shelf[1].title + ", " + shelf[2].title
}

function searchShelf(shelf, book) {
  var bookExist = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      bookExist = true
    }
    }
    return bookExist
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
