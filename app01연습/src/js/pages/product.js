const $ = (selector) => {
  return document.querySelector(selector);
};

const store = {
  setlocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getlocalStorage(key) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  },
};

function Product() {
  this.books = {
    it: [],
    science: [],
    literature: [],
    history: [],
  };

  this.currentCategory = {
    code: "it", // 기본은 IT 카테고리
    name: "IT",
  };

  const renderCategory = () => {
    $("#book-category-name").innerText = this.currentCategory.name;

    document.querySelectorAll(".category-btn").forEach(($btn) => {
      $btn.classList.remove("active");
      if ($btn.dataset.categoryCode === this.currentCategory.code) {
        $btn.classList.add("active");
      }
    });
  };

  const renderBook = () => {
    const currentBooks = this.books[this.currentCategory.code];
    const bookItem = currentBooks
      .map((book, index) => {
        return `
            <li class="book-item" data-index="${index}">
                <div class="book-info">
                    <span class="book-name">${book.title}</span>
                    <span class="book-price">₩${book.price.toLocaleString()}</span>
                </div>
                <div class="book-actions">
                    <button class="edit-btn">수정</button> <button class="delete-btn">삭제</button>
                </div>
            </li>
            `;
      })
      .join("");
    $("#book-list").innerHTML = bookItem;
    $("#book-count").innerText = currentBooks.length;
  };
  this.init = () => {
    const storedBooks = store.getlocalStorage("books");
    if (storedBooks) {
      this.books = storedBooks;
    }
    renderBook();
    renderCategory();
  };

  const registBook = () => {
    const bookName = $("#book-name-input").value;
    const bookPrice = Number($("#book-price-input").value);

    if (!bookName.trim() || !bookPrice) {
      alert("책 제목과 가격을 모두 입력하세요");
      return;
    }

    this.books[this.currentCategory.code].push({
      title: bookName,
      price: bookPrice,
    });

    store.setlocalStorage("books", this.books);
    renderBook();
    $("#book-regist-form").reset();
    $("#book-name-input").focus();
  };

  const deleteBook = (e) => {
    if (confirm("정말 삭제 하시겠습니까?")) {
      const $bookItem = e.target.closest(".book-item");
      const indexToDelete = Number($bookItem.dataset.index);
      this.books[this.currentCategory.code].splice(indexToDelete, 1);

      store.setlocalStorage("books", this.books);
      renderBook();
      renderCategory();
    }
  };

  $("#book-regist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    registBook();
  });
  $("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      deleteBook(e);
    }
  });
  $(".category-select").addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      const newCode = e.target.dataset.categoryCode;
      const newName = e.target.innerText.trim();

      this.currentCategory = {
        code: newCode,
        name: newName,
      };
      renderBook();
      renderCategory();
    }
  });
}
const product = new Product();
product.init();
