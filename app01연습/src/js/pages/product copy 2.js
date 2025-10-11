/*
1.도서추가기능
- **요구사항** :
    - 도서명과 가격을 입력 후 "확인" 버튼 클릭 도서를 추가한다
    - 도서명과 가격을 입력 후 엔터키 입력 시 도서를 추가한다
    주의사항) 단, 입력값이 누락되었을 경우 추가되지 않는다.
    - 도서 추가가 완료되면 입력 필드는 초기화한다.
    - 추가된 도서정보는 도서의 갯수를 카운팅하여 리스트 하단에 표현되어야한다.


2.도서 수정 기능
- **요구사항** :
    - 도서 정보의 "수정" 버튼 클릭시 모달 창을 통해 도서명과 가격을 수정할 수 있다.
    - 모달 창이 열리면 수정할 도서의 기존 도서명과 가격이 미리 입력되어있다.

*/

const $ = (selector) => document.querySelector(selector);

const store = {
  setlocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getlocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

function Product() {
  this.books = {};

  this.currentCategory = {};

  //초기화
  this.init = () => {
    this.currentCategory = {
      code: "it",
      name: "IT",
    };
    renderCategory();

    this.books = store.getlocalStorage("books") || {
      it: [],
      science: [],
      hiterature: [],
      history: [],
    };
    if (this.books[this.currentCategory.code].length !== 0) {
      renderBook();
    }
  };

  const renderBook = () => {
    const bookItem = this.books[this.currentCategory.code]
      .map((book) => {
        return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
         <div class="book-actions">
           <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
           <button class="delete-btn">삭제</button>
          </div>
        </li>
        `;
      })
      .join("");

    $("#book-list").innerHTML = bookItem;
    $("#book-count").innerText = this.books[this.currentCategory.code].length;
  };
  //현재 선택된 카테고리 상태에 따라 렌더링되는 함
  const renderCategory = () => {
    $("#book-category-name").innerText = this.currentCategory.name;
    document.querySelectorAll(".category-btn").forEach((categoryBtn) => {
      categoryBtn.classList.toggle(
        "active",
        categoryBtn.dataset.categoryCode == this.currentCategory.code
      );
    });
  };
  //기능함수 1. 도서 추가
  const registBook = () => {
    const bookName = $("#book-name-input").value;
    const bookPrice = Number($("#book-price-input").value);

    if (!bookName.trim() || !bookPrice) {
      alert("다시 입력하세요");
      return;
    }
    console.log(this.books);
    this.books[this.currentCategory.code].push({
      title: bookName,
      price: bookPrice,
    });

    store.setlocalStorage("books", this.books);

    renderBook();

    $("#book-regist-form").reset();
    $("#book-name-input").focus();
  };

  //기능함수 2 -1. 수정 내용 뿌리기
  const editBookForm = (e) => {
    //수정 선택한 책의 내용을 수정 창에 띄우기
    const $bookItem = e.target.closest(".book-item");
    const bookName = $bookItem.querySelector(".book-name").innerText;
    const bookPrice = Number(
      $bookItem.querySelector(".book-price").innerText.replace(/[₩,]/g, "")
    );
    const editBookIndex = Array.from($("#book-list").children).indexOf(
      $bookItem
    );

    $("#edit-book-name").value = bookName;
    $("#edit-book-price").value = bookPrice;
    $("#edit-book-index").value = editBookIndex;
  };
  //기능함수 2 - 2. 수정 내용 처리하기
  const editBook = () => {
    const editBookName = $("#edit-book-name").value;
    const editBookPrice = Number($("#edit-book-price").value);
    const editBookIndex = $("#edit-book-index").value;

    if (!editBookName.trim() || !editBookPrice) {
      alert("다시 입력하세요");
      return;
    }

    this.books[this.currentCategory.code][editBookIndex] = {
      title: editBookName,
      price: editBookPrice,
    };

    store.setlocalStorage("books", this.books);

    renderBook();

    $("#editModal .modal-close").click();
  };
  //기능함수 3. 삭제하기

  const deleteBook = (e) => {
    if (confirm("삭제하시겠습니까?")) {
      // 삭제인덱스 확인
      const deleteBookIndex = Array.from($("#book-list").children).indexOf(
        e.target.closest(".book-item")
      );
      //도서상태 변경
      this.books[this.currentCategory.code].splice(deleteBookIndex, 1);

      store.setlocalStorage("books", this.books);

      renderBook();
    }
  };

  // 이벤트 발생0. 카테고리 선택
  $(".category-select").addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      this.currentCategory = {
        code: e.target.dataset.categoryCode,
        name: e.target.innerText,
      };
      renderCategory();
      renderBook();
    }
  });
  // 이벤트 발생 1. 도서 추가
  $("#book-regist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    registBook();
  });

  // 이벤트 발생 2. 수정 혹은 삭제 연결
  $("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      editBookForm(e);
    }
    if (e.target.classList.contains("delete-btn")) {
      deleteBook(e);
    }
  });

  //이벤트 발생 3. 도서 수정
  $("#book-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    editBook();
  });

  /* 도서
    - 도서 정보의 "삭제" 버튼 클릭을 확인하고
    - 브라우저에 제공되는 confirm 인터페이스로 띄운다.
    - 사용자의 삭제 의사를 확인되면 삭제를 진행한다.
     - 도서 삭제 완료 시 도서의 갯수를 카운팅 하여 화면에 표현한다.
     */
  //수정선택후 창에서 수정완료한 값을 넣기
}

const product = new Product();
product.init();
