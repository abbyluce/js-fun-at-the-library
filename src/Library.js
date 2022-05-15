function createLibrary(libraryName, shelves) {
return {
  name: libraryName,
  shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
  }
}
}

function addBook(libraryName, bookTitle) {
  if (bookTitle.genre === "fantasy") {
  return libraryName.shelves.fantasy.push(bookTitle)
} else if (bookTitle.genre === "fiction"){
  return libraryName.shelves.fiction.push(bookTitle)
} else if (bookTitle.genre === "nonFiction"){
  return libraryName.shelves.nonFiction.push(bookTitle)
}
}

function checkoutBook(libraryName, bookTitle, bookGenre) {
  for (i = 0; i < libraryName.shelves[bookGenre].length; i++) {
 if (bookTitle === libraryName.shelves[bookGenre][i].title) {
   libraryName.shelves[bookGenre].splice(i, 1)
return "You have now checked out " + bookTitle + " from the " + libraryName.name
}
} return "Sorry, there are currently no copies of " + bookTitle + " available at the " + libraryName.name
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
