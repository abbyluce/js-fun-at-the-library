function createTitle(bookIdea) {
  return ("The " + bookIdea);
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(title, reviews) {
if (reviews.includes(title)) {
  return
} else {
  return (reviews.push(title));
  }
}

function calculatePageCount(bookTitle) {
return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
return {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
  }
}

function editBook(newPageCount) {
  newPageCount.pageCount = newPageCount.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
