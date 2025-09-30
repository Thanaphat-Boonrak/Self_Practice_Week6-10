// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [];

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  if (!quote) {
    console.log("It was null or Undefind");
    return;
  }

  if (
    typeof quote !== "object" ||
    !Number.isInteger(quote.id) ||
    !quote.content ||
    !quote.author
  ) {
    console.log("Some Thing went wrong");
    return;
  }

  quotes.push(quote);
  console.log("Add Quote Success");
  return;
  // TODO: Add the quote object to the quotes array
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  if (!id) {
    console.log("Id is Null");
    return;
  }
  const index = quotes.findIndex((quote) => quote.id === id);

  if (index !== -1) {
    quotes.splice(index, 1);
    console.log(`Remove ${id} Success`);
    return;
  } else {
    console.log(`Quote was not found id = ${id}`);
    return;
  }
  // TODO: Remove the quote object from the array using the given id
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  if (!id) {
    console.log("Id is Null");
    return;
  }
  if (!updatedQuote) {
    console.log("It was null or Undefind");
    return;
  }

  if (typeof updatedQuote !== "object") {
    console.log("It was not Object");
  }

  const index = quotes.findIndex((quote) => quote.id === id);

  quotes[index] = { ...quotes[index], ...updatedQuote };
  console.log(`Update Id ${id} -> Updatedata = `, updatedQuote);

  return;
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
  // TODO: Return the quotes array
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
// 6. Test your functions below

// Add 3 quotes

addQuote({ id: 1, content: "tse", author: "Steve Jobs" });

addQuote({ id: 2, content: "Test", author: "Yoda" });

addQuote({
  id: 3,

  content: "Simplicity is the ultimate sophistication.",

  author: "Leonardo da Vinci",
});

// Delete 1 quote

deleteQuote(10);

// Update 1 quote

updateQuote(1, { content: "Stay hungry. Stay foolish.", author: "Jobs" });

// Print all quotes

console.log(getAllQuotes());

// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  if (!quote) {
    console.log("It was null or Undefind");
    return;
  }

  if (
    typeof quote !== "object" ||
    !Number.isInteger(quote.id) ||
    !quote.content ||
    !quote.author
  ) {
    console.log("Some Thing went wrong");
    return;
  }

  quotes.push(quote);
  console.log("Add Quote Success");
  return;
  // TODO: Add the quote object to the quotes array
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  if (!id || !Number.isInteger(id)) {
    console.log("Id is Null or Not a Number");
    return;
  }
  const index = quotes.findIndex((quote) => quote.id === id);

  if (index !== -1) {
    quotes.splice(index, 1);
    console.log(`Remove ${id} Success`);
    return;
  } else {
    console.log(`Quote was not found id = ${id}`);
    return;
  }
  // TODO: Remove the quote object from the array using the given id
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  if (!id || !Number.isInteger(id)) {
    console.log("Id is Null");
    return;
  }
  if (typeof updatedQuote !== "object") {
    console.log("It was not Object");
  }
  if (!updatedQuote.content || !updatedQuote.author) {
    console.log("It was null or string");
    return;
  }

  const index = quotes.findIndex((quote) => quote.id === id);

  quotes[index] = { ...quotes[index], ...updatedQuote };
  console.log(`Update Id ${id} -> Updatedata = `, updatedQuote);

  return;
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
  // TODO: Return the quotes array
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
// 6. Test your functions below

// Add 3 quotes

addQuote({ id: 1, content: "tse", author: "Steve Jobs" });

addQuote({ id: 2, content: "Test", author: "Yoda" });

addQuote({
  id: 3,

  content: "Simplicity is the ultimate sophistication.",

  author: "Leonardo da Vinci",
});

// Delete 1 quote

deleteQuote(10);

// Update 1 quote

updateQuote(1, { content: "Stay hungry. Stay foolish.", author: "Jobs" });

// Print all quotes

console.log(getAllQuotes());
