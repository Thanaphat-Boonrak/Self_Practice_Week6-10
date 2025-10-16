let quotes = [];

const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");
const clearBtn = document.getElementById("clearBtn");
const quoteCount = document.getElementById("quoteCount");

function updateQuoteCount() {
  if (quotes.length === 0) {
    quoteCount.textContent = "No quote now!!";
  } else {
    quoteCount.textContent = `All quote: ${quotes.length}`;
  }
}

function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.dataset.id = quote.id;

  const pContent = document.createElement("p");
  pContent.textContent = quote.content;

  const pAuthor = document.createElement("p");
  pAuthor.textContent = quote.author;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id;
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id;
  deleteBtn.textContent = "Delete";

  div.appendChild(pContent);
  div.appendChild(pAuthor);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  return div;
}

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote);
  quoteList.appendChild(quoteElement);
}

function updateQuoteInDOM(quote) {
  const quoteDiv = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (quoteDiv) {
    quoteDiv.querySelector("p:nth-child(1)").textContent = quote.content;
    quoteDiv.querySelector("p:nth-child(2)").textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const quoteDiv = quoteList.querySelector(`div[data-id="${id}"]`);
  if (quoteDiv) {
    quoteList.removeChild(quoteDiv);
  }
}

function renderQuotes() {
  quoteList.innerHTML = "";
  quotes.forEach((q) => addQuoteToDOM(q));
  updateQuoteCount();
}

function showRandomQuote() {
  if (quotes.length === 0) {
    randomDisplay.textContent = "No quotes available";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = idInput.value.trim();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  if (!content || !author) return;
  if (id) {
    const index = quotes.findIndex((q) => q.id === id);
    if (index !== -1) {
      quotes[index].content = content;
      quotes[index].author = author;
      updateQuoteInDOM(quotes[index]);
    }
  } else {
    const newQuote = {
      id: Date.now().toString(),
      content,
      author,
    };
    quotes.push(newQuote);
    addQuoteToDOM(newQuote);
  }
  updateQuoteCount();
  form.reset();
  idInput.value = "";
});

quoteList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = e.target.dataset.id;
    const quote = quotes.find((q) => q.id === id);
    if (quote) {
      idInput.value = quote.id;
      contentInput.value = quote.content;
      authorInput.value = quote.author;
    }
  } else if (e.target.classList.contains("delete-btn")) {
    const id = e.target.dataset.id;
    quotes = quotes.filter((q) => q.id !== id);
    deleteQuoteFromDOM(id);
    updateQuoteCount();
    if (idInput.value === id) {
      form.reset();
      idInput.value = "";
    }
  }
});

clearBtn.addEventListener("click", () => {
  const confirmDelete = confirm("Are you sure you want to delete all quotes?");
  if (!confirmDelete) return;
  quotes = [];
  quoteList.innerHTML = "";
  updateQuoteCount();
  alert("All quotes have been deleted.");
});

randomBtn.addEventListener("click", showRandomQuote);

updateQuoteCount();
