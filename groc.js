const addGroceryForm = document.querySelector(".add-grocery");
const addGroceryInput = document.querySelector(
  ".add-grocery input[type='text']"
);
const groceryList = document.querySelector(".grocery-list");
const abc = document.getElementsByClassName("grocery-list");
console.log(addGroceryForm);
console.log(groceryList);
console.log(abc);

addGroceryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newGroceryItemText = addGroceryInput.value;
  //   console.log(newGroceryItemText);
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text">${newGroceryItemText}</span>
                    <div class="add-delete-buttons"><button class="grocery-list-button done"><i
                                class="fas fa-check"></i></button><button
                            class="grocery-list-button remove"><i
                                class="fas fa-times"></i></button>`;
  newLi.innerHTML = newLiInnerHtml;
  groceryList.append(newLi);
  addGroceryInput.value = "";
});

groceryList.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
